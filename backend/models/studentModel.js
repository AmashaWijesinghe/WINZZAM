const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');

const Schema = mongoose.Schema

const studentSchema = new Schema({
    school: {
        type: String
    },
    district: {
        type: String
    },
    joinedClasses: [{
        type: Schema.Types.ObjectId,
        ref: 'month'
    }],
    bankDetails: {
        bankName: {
            type: String
        },
        branchCode: {
            type: String
        },
        branchName: {
            type: String
        },
        accountNo: {
            type: String
        }
    },
    batches: [{
        type: String
    }],
    paymentMethod: {
        type: Number
    },
    preferredClasses: [{
        addDate: {
            type: Date
        },
        tutor: {
            type: ObjectId
        },
        batch: {
            type: String
        }
    }],
    exams: [{
        examNumber: {
            type: Number
        },
        tuitionMaster: {
            type: ObjectId
        },
        batch: {
            type: String
        },
        month: {
            type: String
        },
        exam: {
            type: ObjectId
        }
    }],
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('student', studentSchema)
  