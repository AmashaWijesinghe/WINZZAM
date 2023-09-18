//create the functions needed for staff data retrieval, manipulation and deletion from the database
const users = require("../models/userModel");
const panelMembers = require("../models/panelMemberModel");
const examCreators = require("../models/examCreatorModel");
const tuitionMasters = require("../models/tutionMasterModel");

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const getBasicInfo = async (req, res) => {
	const authHeader = req.headers.token;
	const token = authHeader.split(" ")[1];
	// console.log(token);
	jwt.verify(token, process.env.JWT_SEC, async (err, user) => {
		if (err) res.status(403).json("Invalid token");

		req.user = user;
	});

	const userID = req.user.id; //extract the parameters from the fetch request

	// console.log("user" + userID);
	const data = await users.findOne(
		{ _id: userID },
		{ _id: 1, firstName: 1, lastName: 1, username: 1, profilePicture: 1 }
	);

	if (data === null) {
		res.json({
			status: 400,
			message: "User with the given ID does not exist",
		});
	} else {
		res.json({
			status: 200,
			data: data,
		});
	}
};

const getAllUsers = async (req, res) => {
	const userRole = req.query.userRole;
console.log(userRole);
	const data = await users.find({ userRole: userRole, isActive: 1 }); //get the active user count related to the user role
	if (data === null) {
		res.json({
			status: 200,
			count: 0,
		});
	} else {
		res.json({
			status: 200,
			count: data.length,
		});
	}
};

const newRegistrations = async (req, res) => {
	//let pendingRegistrations = [];
	const inactiveUsers = await users.find(
		{
			isProfileComplete: 1,
			$or: [{ userRole: "Tuition Master" }],
		},
		{ userRole: 1, firstName: 1, lastName: 1, profilePicture: 1 }
	);

	// for (let i = 0; i < inactiveUsers.length; i++) {
	// 	let userID = inactiveUsers[i]._id;
	// 	let userRole = inactiveUsers[i].userRole;
	// 	if (userRole == "Exam Creator") {
	// 		let data = await examCreators.findOne({
	// 			user: userID,
	// 			isApproved: 0,
	// 		});
	// 		if (data !== null) {
	// 			pendingRegistrations.push(inactiveUsers[i]);
	// 		}
	// 	}
	// 	if (userRole === "Panel Member") {
	// 		let data = await panelMembers.findOne({
	// 			user: userID,
	// 			isApproved: 0,
	// 		});
	// 		if (data !== null) {
	// 			pendingRegistrations.push(inactiveUsers[i]);
	// 		}
	// 	}
	// 	if (userRole === "Tuition Master") {
	// 		let data = await tuitionMasters.findOne({
	// 			user: userID,
	// 			isApproved: 0,
	// 		});
	// 		if (data !== null) {
	// 			pendingRegistrations.push(inactiveUsers[i]);
	// 		}
	// 	}
	// }
	if (!inactiveUsers) {
		res.json({
			status: 200,
			message: "No pending registrations",
		});
	} else {
		res.json({
			status: 200,
			data: inactiveUsers,
		});
	}

	// console.log(pendingRegistrations);
};

const getRegistrationDetails = async (req, res) => {
	try {
		// console.log(req.query.userRole);
		const userRole = req.query.userRole;
		const uID = req.query.userID;
		// const basicInfo = await users.findOne(
		// 	{ _id: uID },
		// 	{
		// 		firstName: 1,
		// 		lastName: 1,
		// 		email: { address: 1 },
		// 		phone: { number: 1 },
		// 		registerDate: 1,
		// 		profilePicture: 1,
		// 	}
		// );
		let uniqueInfo;
		if (userRole === "Tuition Master") {
			const tutorProfile = await tuitionMasters
				.findOne({ user: uID })
				.populate("user subject")
				.exec();

			if (!tutorProfile) {
				res.status(401).json("No tutor profile found");
			} else {
				res.status(200).json(tutorProfile);
			}
			// uniqueInfo = await tuitionMasters.findOne(
			// 	{ userID: uID },
			// 	{
			// 		NIC_Path: 1,
			// 		gender: 1,
			// 		educationalSkills: 1,
			// 		subject: 1,
			// 		studentCountPhysical: 1,
			// 		yearsTeaching: 1,
			// 	}
			// );
		} else if (userRole === "Panel Member") {
			const panelMemProfile = await panelMembers
				.findOne({ user: uID })
				.populate("user")
				.exec();

			if (!panelMemProfile) {
				res.status(401).json("No such panel member found");
			} else {
				res.status(200).json(panelMemProfile);
			}
		} else if (userRole === "Exam Creator") {
			const examCreatorProfile = await examCreators
				.findOne({
					user: uID,
				})
				.populate("user")
				.exec();

			if (!examCreatorProfile) {
				res.status(401).json("No such exam creator found");
			} else {
				res.status(200).json(examCreatorProfile);
			}
		}
	} catch (error) {
		res.json({
			status: 400,
			message: error.message,
		});
	}
};

const updateProfileCompletionStatus = async (req, res) => {
	try {
		const userID = req.body.userID;
		console.log(userID);

		await users
			.findOneAndUpdate(
				{ _id: userID },
				{ $set: { isProfileComplete: 2 } }
			)
			.then((result) => {
				console.log("Profile Approved Successfully");
				res.status(200).json("Profile completion status updated");
			});
	} catch (error) {
		res.status(400).json(
			"Profile completion status not updated successfully"
		);
	}
};

const getExamProgress = async (req, res) => {
	try {
		// const userID = req.query.userID;
		// const examID = req.query.examID;

		const tuitionMaster = await tuitionMasters
			.find({})
			.populate("user subject batches")
			.exec();
		// The .populate() method in Mongoose is used to retrieve and populate fields from referenced documents in your database. It allows you to replace the IDs in the fields of your current document with the actual data from the referenced documents.
		if (!tuitionMaster) {
			return res
				.status(404)
				.json({ message: "Tuition master not found" });
		}

		//After populating can get specific data on the referenced collections
		// Access email from the populated user object
		//  const userEmail = tuitionMaster.user.email;

		// Access NIC_Path directly from tuitionMaster
		//  const NIC_Path = tuitionMaster.NIC_Path;

		res.status(200).json({ tuitionMaster });
		// const examProgress = await userExamData.findOne({
		// 	user: userID,
		// 	exam: examID,
		// });

		// if (!examProgress) {
		// 	res.status(401).json("No such exam progress found");
		// } else {
		// 	res.status(200).json(examProgress);
		// }
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

module.exports = {
	getAllUsers,
	getBasicInfo,
	newRegistrations,
	getRegistrationDetails,
	updateProfileCompletionStatus,
	getExamProgress,
};
