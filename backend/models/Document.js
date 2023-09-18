const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Document = new Schema({
	_id: String,
	queExplanation: Object,
	ansExplanation: Object,
	questionNumber: Number,
	answer: String,
	lesson: String,
});

module.exports = mongoose.model("document", Document);
