const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const batchSchema = new Schema({
	year: Number,
	fee: Number,
	months: [
		{
			type: Schema.Types.ObjectId,
			ref: "month",
		},
	],
});

module.exports = mongoose.model("batch", batchSchema);
