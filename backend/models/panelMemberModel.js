const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
			tuitionMaster: { type: Schema.Types.ObjectId, ref: 'users' },
			batch: { type: Schema.Types.ObjectId, ref: 'Batch' },
			month: { type: Schema.Types.ObjectId, ref: 'Month' },
			exam: { type: Schema.Types.ObjectId, ref: 'Exam' },
			users: [
				{ type: Schema.Types.ObjectId, ref: 'users' },
			],
			deadline: {
				type: Date,
			},
			completedOn: {
				type: Date,
			},
			userCount: {
				type: Number,
			}
})

const panelMemberSchema = new Schema({
	isApproved: {
		type: Number,
	},
	isVerified: {
		type: Number,
	},
	assignedTo: [
		{ type: Schema.Types.ObjectId, ref: 'users' }
	],
	subjects: [
		{ type: Schema.Types.ObjectId, ref: 'subjects' }
	],
	work: [WorkSchema],
	idCopy: {
		type: String,
	},
	bannedBy:[
		{type: Schema.Types.ObjectId, ref: 'users'}
	],
	holdBy:[
		{type: Schema.Types.ObjectId, ref: 'users'}
	],		
	contractURL: {
		type: String,
	},
	user: {
		type: Schema.Types.ObjectId, ref: 'users',
	},
});

module.exports = mongoose.model("panelmembers", panelMemberSchema);
