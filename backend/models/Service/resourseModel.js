const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
	questionURL: String,
	explanationURL: String,
	typist: { type: Schema.Types.ObjectId, ref: "user" }, // Reference to a user model
	startDate: Date,
	deadline: Date,
	count: Number,
});

module.exports = mongoose.model("resource", resourcesSchema);
