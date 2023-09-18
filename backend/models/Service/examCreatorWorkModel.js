const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const ExamCreatorWorkSchema = new Schema({
	tuitionMaster: { type: Schema.Types.ObjectId, ref: "user" },
	batch: { type: Schema.Types.ObjectId, ref: "batch" },
	month: { type: Schema.Types.ObjectId, ref: "month" },
	exam: { type: Schema.Types.ObjectId, ref: "exam" },
	completedOn: {
		type: String,
	},
});

module.exports = mongoose.model("creatorwork", ExamCreatorWorkSchema);
