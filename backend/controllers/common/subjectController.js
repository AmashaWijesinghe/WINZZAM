const { get } = require("mongoose");
const Subject = require("../../models/Service/subjectModel");

const mongoose = require("mongoose");

//get all tuition masters
const getSubjects = async (req, res) => {
	const subjects = await Subject.find();
	res.status(200).json({ subjects });
};


module.exports = {
	getSubjects
};
