const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketsSchema = new Schema({
    status: {
        type: Number,
        default: 0,
        required: true,
    }, // 0- Open, 1- Closed
    sender: {
        type: Schema.Types.ObjectId,
		ref: "users",
        required: true,
    },
    department: {
        type: Number,
        required: true,
    }, // 0- Admin, 1- Marketing, 2- Finance 3- Tutor 4- Student 5- Panel Members 6- Exam Creator 7- Other 
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reference: {
        type: String,
        required: false,
    },
    attachments: [
        {
            type: String,
            required:false,
        },
    ],
    dateOpened: {
        type: Date,
        required: false,
    },
    dateClosed: {
        type: Date,
        required: false,
    },
    reply: {
        type: String,
        required: false,
    }, 

}, {timestamps: true }); 

module.exports = mongoose.model('Tickets', ticketsSchema);