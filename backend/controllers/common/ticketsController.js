const { get } = require('mongoose')
const Tickets = require('../../models/Service/ticketsModel')
const mongoose = require('mongoose')

//get all tickets
const getTickets = async (req, res) => {
    const tickets = await Tickets.find({}).sort({createdAt: -1})
    .populate('sender')
    .exec();
    res.status(200).json({tickets})
}

//get a single ticket
const getTicket = async (req, res) => {
    const {id} = req.params
    //check the type of id to stop crashing the app
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Ticket not found'})
    }
    const ticket = await Tickets.findById(id)

    if(!ticket) {
        return res.status(404).json({error: 'Ticket not found'})
    }

    res.status(200).json({ticket})
}

//create new ticket
const createTicket = async(req, res) => {
    const {department} = req.body

    let emptyFields = []

    if(!department) {
        emptyFields.push('department')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: "Please select a valid department", emptyFields})
    }

    try{
        const ticket = await Tickets.create(req.body)
        res.status(201).json({ticket})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//update a ticket
const updateTicket = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Ticket not found'})
    }

    const ticket = await Tickets.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!ticket) {
        return res.status(404).json({error: 'Ticket not found'})
    }

    res.status(200).json(ticket)
   
}


module.exports = {
    createTicket,
    getTickets,
    getTicket,
    updateTicket
}

