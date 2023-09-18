const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userExamDataSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: "user" }, // Reference to user model
	exam: { type: Schema.Types.ObjectId, ref: "exam" }, // Reference to exam model
	marks: Number,
	answers: [
		{
			questionNumber: Number,
			images: [
				{
					pageNumber: Number,
					imageURL: String,
				},
			],
			answer: Number,
			correct_status: Number,
			marks: Number,
		},
	],
	sessions: [
		{
			type: Schema.Types.ObjectId,
			ref: "scheduledate",
		},
	],
});

module.exports = mongoose.model("userExamData", userExamDataSchema);
