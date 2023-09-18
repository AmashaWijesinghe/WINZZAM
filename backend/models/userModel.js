//create the schemas of different models
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: false,
	},
	lastName: {
		type: String,
		required: false,
	},
	username: {
		type: String,
		required: false,
	},
	userRole: {
		type: String,
		required: true,
	},
	isProfileComplete: {
		type: Number,
		required: false,
		default: 0, //0- not complete // 1- Pending // 0-reject (kalin data thiyenne one)
	},
	isActive: {
		type: Number,
		required: false,
	},
	isBanned: {
		type: Number,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	password: { type: String, required: true },
	verified: { type: Boolean, default: false },
	registerDate: {
		type: Date,
		required: false,
	},
	profilePicture: {
		type: String,
		required: false,
	},
	phone: {
		type: String,
		required: false,
	},
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_SEC, {
		expiresIn: "7d",
	});
	return token;
};

module.exports = mongoose.model("user", userSchema);

