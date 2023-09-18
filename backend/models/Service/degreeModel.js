const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const degreeSchema = new Schema({
	degreeName: String,
	university: String,
	completed_year: Date,
	type: String,
});


module.exports = mongoose.model("degree", degreeSchema);




