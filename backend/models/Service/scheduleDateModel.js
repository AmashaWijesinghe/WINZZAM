const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduledDateSchema = new Schema({
	type: String,
	date: Date,
	time: Date,
	count: Number,
});

module.exports = mongoose.model("scheduledate", scheduledDateSchema);
