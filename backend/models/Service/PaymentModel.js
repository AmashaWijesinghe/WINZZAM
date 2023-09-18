const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
	paymentSlip: String,
	paymentDate: Date,
	approved: Boolean,
	type: Number, // Online or B.T
});

module.exports = mongoose.model("payment", PaymentSchema);
