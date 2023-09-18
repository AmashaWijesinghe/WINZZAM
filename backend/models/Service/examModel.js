const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const examSchema = new Schema({
	number: Number,
	type: Number,
	status: Number,
	scheduledDates: [{ type: Schema.Types.ObjectId, ref: "scheduledate" }],
	duration: String,
	resources: { type: Schema.Types.ObjectId, ref: "resource" },
	production: [{ type: Schema.Types.ObjectId, ref: "production" }],
});

module.exports = mongoose.model("exam", examSchema);

