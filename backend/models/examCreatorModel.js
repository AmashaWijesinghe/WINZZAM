const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const examCreatorSchema = new Schema({
	isApproved: {
		type: Number,
	},
	subjects: [
		{
			type: String,
		},
	],
	idCopy: {
		type: String,
	},
	contractURL: {
		type: String,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "user", // Use the model name you provided for the subject model
	},
	work: [{ type: Schema.Types.ObjectId, ref: "creatorwork" }],
});

module.exports = mongoose.model("examcreators", examCreatorSchema);
