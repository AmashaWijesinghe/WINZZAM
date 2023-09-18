const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');

const Schema = mongoose.Schema

const staffSchema = new Schema({
    address: {
        type: String
    },
    qualifications: [{
        type: String
    }],
    idCopy: {
        type: String
    },
    contractURL: {
        type: String
    },
    userID: {
        type: ObjectId
    }
});

module.exports = mongoose.model('staff', staffSchema)