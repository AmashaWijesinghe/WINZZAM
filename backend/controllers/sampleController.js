const TutionMaster = require("../models/tutionMasterModel");
const Subject = require('../models/Service/subjectModel');
const Production = require('../models/Service/productionModel')
const mongoose = require("mongoose");
const userExamData = require('../models/Service/userExamDataModel')

//Create operation...
const registerTutionMaster = async (req, res) => {
    try {
        // Get the user's userId from the request body
        const { userId, NIC_Path, gender, degrees, subject, years_of_experience, description } = req.body;

        // Create a new tuition master instance
        const newTuitionMaster = new TutionMaster({
            user: userId,
            NIC_Path,
            gender,
            degrees,
            subject,
            years_of_experience,
            description,
        });

        // Save the new tuition master to the database
        const savedTuitionMaster = await newTuitionMaster.save();

        res.status(201).json(savedTuitionMaster); // Return the saved tuition master object
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createSubject = async (req, res) => {
    try {
        const { name, lessons } = req.body;

        // Create a new subject instance
        const newSubject = new Subject({
            Name: name,
            lessons: lessons || [],
        });

        // Save the new subject to the database
        const savedSubject = await newSubject.save();

        res.status(201).json(savedSubject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const createuserExamData = async (req, res) => {
    try {
        const { user, exam } = req.body;

        // Create a new subject instance
        const newdata = new userExamData({
            user: user,
            exam: exam
        });

        // Save the new subject to the database
        const savedexam = await newdata.save();

        res.status(201).json(savedexam);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





const createQuestion = async (req, res) => {
    try {
        const { question_number, questionURL , explanationURL , answer , lesson } = req.body;

        // Create a new subject instance
        const newQuestion = new Production({
            question_number: question_number ,
            questionURL : questionURL,
            explanationURL : explanationURL,
            answer : answer , 
            lesson : lesson
        });
        // Save the new subject to the database
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getTuitionMasterDetails = async (req, res) => {
    try {
        console.log(req.user.id);
        const tuitionMaster = await TutionMaster.findOne({ user: req.user.id })
            .populate('user subject')
            .exec();
        // The .populate() method in Mongoose is used to retrieve and populate fields from referenced documents in your database. It allows you to replace the IDs in the fields of your current document with the actual data from the referenced documents.
        if (!tuitionMaster) {
            return res.status(404).json({ message: 'Tuition master not found' });
        }

        //After populating can get specific data on the referenced collections
         // Access email from the populated user object
         const userEmail = tuitionMaster.user.email;

         // Access NIC_Path directly from tuitionMaster
         const NIC_Path = tuitionMaster.NIC_Path;

        res.status(200).json({ tuitionMaster, userEmail, NIC_Path });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//updating tution masters

const updatedTuitionMaster = async (req, res) => { await TutionMaster.findOneAndUpdate(
    { user: yourTuitionMasterId },
    { $set: { years_of_experience: newExperienceValue } },
    { new: true }
)};




// detelet tution masters

const deletedTuitionMaster = async (req, res) => {await TutionMaster.findOneAndDelete({ _id: yourTuitionMasterId }) };



//get all tution masters
const allTuitionMasters = async (req, res) => {await TutionMaster.find()};




module.exports = {
    registerTutionMaster,
    createSubject,
    getTuitionMasterDetails,
    createQuestion,
    createuserExamData
};