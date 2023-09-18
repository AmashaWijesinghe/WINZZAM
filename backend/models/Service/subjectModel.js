const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
	Name: String,
	lessons: [
		{
			type: String,
		},
	],
});

module.exports = mongoose.model("subjects", SubjectSchema);
