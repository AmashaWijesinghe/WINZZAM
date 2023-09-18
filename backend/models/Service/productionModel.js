const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productionSchema = new Schema({
	question_number: Number,
	questionURL: String,
	explanationURL: String,
	answer: String,
	lesson: String,
	editorContent: { type: Schema.Types.String, ref: "document" },
});

module.exports = mongoose.model("production", productionSchema);
