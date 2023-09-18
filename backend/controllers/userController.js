
const User = require("../models/userModel");
const Student = require("../models/studentModel");
const mongoose = require("mongoose");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("./utils/sendEmail");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");





//Create a user

const userSignup = async (req, res) => {
	try {
		const { error } = validate_signup(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });


		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();

		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();

		console.log(token)
		const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
		await sendEmail(user.email, "Verify Email", url);

		res
			.status(201)
			.send({ message: "An Email sent to your account please verify" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
};

const verifyEmail = async (req, res) => {
	try {
	  console.log("came", req.params.id,  req.params.token)
	  const user = await User.findOne({ _id: req.params.id });
	  if (!user) return res.status(400).send({ message: "Invalid id" });
  
	  const token = await Token.findOne({
		userId: user._id,
		token: req.params.token,
	  });
	  if (!token) return res.status(400).send({ message: "Invalid token" });
  
	  // Update the 'verified' field of the user document
	  await User.updateOne({ _id: user._id }, { verified: true });
  
	  // Remove the token document
	  await Token.deleteOne({ _id: token._id });

	  if(user.userRole === "Student"){
		const Student = await new Student({
			userId: user._id,
		}).save();
	  }
	  
	  res.status(200).send({ message: "Email verified successfully" });
	  console.log("succcess")
	} catch (error) {
	  console.error(error);
	  res.status(500).send({ message: "Internal Server Error" });
	}
  };
  


const userLogin = async (req,res) =>{
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });
		console.log(req.body.password)
		console.log(user.password)
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Password" });

		if (!user.verified) {
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
			}

			return res
				.status(400)
				.send({ message: "An Email sent to your account please verify" });
		}

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
}

const authCheck = async (req,res)=>{
	console.log(req.user)
	const userId = req.user._id;
	console.log(userId)

	try {
	  // Query the database to find the user based on their ID
	  const user = await User.findById(userId);

	  console.log(user);
  
	  if (!user) {
		return res.status(404).json({ message: "User not found" });
	  }
  
	  // Extract the relevant user data (userRole and profileCompletion)
	  const { userRole, isProfileComplete } = user;
  
	  res.json({ userRole, isProfileComplete });
	} catch (error) {
	  console.error("Error fetching user info:", error);
	  res.status(500).json({ message: "Internal server error" });
	}
}

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

const validate_signup = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		userRole: Joi.string().required().label("userRole"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};




//get all users
const getUsers = async (req, res) => {
	const users = await User.find({}).sort({ createdAt: -1 });
	res.status(200).json({ users });
};

//get a single user
const getUser = async (req, res) => {
	const { id } = req.params;
	//check the type of id to stop crashing the app
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "User not found" });
	}
	const user = await User.findById(id);

	if (!user) {
		return res.status(404).json({ error: "User not found" });
	}

	res.status(200).json({ user });
};

//update a user
const updateUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "User not found" });
	}

	const user = await User.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!user) {
		return res.status(404).json({ error: "User not found" });
	}

	res.status(200).json(user);
};



module.exports = {
	getUsers,
	getUser,
	updateUser,
	userSignup,
	verifyEmail,
	userLogin ,
	authCheck
};
