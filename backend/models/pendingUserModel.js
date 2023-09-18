const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const verifieduserSchema = new Schema({
    email: {
		type: String,
		required: true,},
    otp:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('verifieduser', verifieduserSchema)

