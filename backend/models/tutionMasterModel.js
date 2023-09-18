const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const degree = require("./Service/degreeModel");

const tuitionMasterSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user", // Use the model name you provided for the users model
	},
	NIC_Path: {
		type: String,
		required: true,
	},
	gender: {
		type: Number, //0- Male , 1- FeMale
		required: true,
	},
	degree: 
		{
			type: String,
			required: false,
		},
	// Array of degrees
	//change-1
	subject: {
		type: Schema.Types.ObjectId,
		ref: "subjects", // Use the model name you provided for the subject model
	}, //change -2
	description: String,
	feedback: {
		type: Schema.Types.ObjectId,
		ref: "feedback",
	},
	tickets: {
		type: Schema.Types.ObjectId,
		ref: "Tickets",
	},
	batches: [{ type: Schema.Types.ObjectId, ref: "Batch" }],
});

module.exports = mongoose.model("TutionMaster", tuitionMasterSchema);
