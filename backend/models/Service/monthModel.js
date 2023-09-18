const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monthSchema = new Schema({
	name: String,
	fee: Number,
	order: Number, // ? createed At
	active: Number,
	exams: [
		{
			type: Schema.Types.ObjectId,
			ref: "exam",
		},
	],
	paid_users: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: "user",
			},
			payment: {
				type: Schema.Types.ObjectId,
				ref: "payment", // Reference to the BankPayment model
			},
		},
	],
});

module.exports = mongoose.model("month", monthSchema);

