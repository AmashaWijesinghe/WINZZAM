const Exam = require("../models/Service/examModel");
//const Subject = require('../models/Service/subjectModel');
const mongoose = require("mongoose");
const Production = require("../models/Service/productionModel");
const userexamdata = require("../models/Service/userExamDataModel")




const SubmitAnswers = async (req, res) => {
    try {
        // Get the user's answers from the request body
        const { answers, time, exam_id } = req.body;
        const user_id = '64d9b0264a84cd30050ba3f4'

        // Initialize user score and a map to track correct/incorrect answers
        let userScore = 0;

        // Update the answers object with correct state (1 or 0)
        const updatedAnswers = {};

        // Loop through user answers
        for (const questionId in answers) {
            const [userSelectedOption, productionQuestionId] = answers[questionId];

            // Fetch the production question by its ID
            const productionQuestion = await Production.findOne({ _id: productionQuestionId });

            if (!productionQuestion) {
                return res.status(404).json({ error: `Production question not found for ID ${productionQuestionId}` });
            }


            // Check if the user's selected option matches the correct answer
            if (userSelectedOption === productionQuestion.answer) {
                userScore++;
                updatedAnswers[questionId] = [userSelectedOption, productionQuestionId, 1, productionQuestion.answer]; // 1 represents correct
            } else {
                updatedAnswers[questionId] = [userSelectedOption, productionQuestionId, 0, productionQuestion.answer]; // 0 represents incorrect
            }
        }

        const updatedDocument = await userexamdata.findOneAndUpdate(
            {
                user: user_id,
                exam: exam_id
            },
            {
                $set: {
                    marks: userScore,
                    time: time,
                    status: 2,
                    answers : updatedAnswers
                },
            },
            { new: true }
        )

        if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }


        // Return the user's score and updated answers
        res.status(200).json({ score: userScore, updatedAnswers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




const getExamQuestions = async (req, res) => {
    try {
        const exam_id = req.params.exam_id;
        const user_id = req.user._id;

        console.log(exam_id,user_id)

        const foundDocument = await userexamdata.findOne({
            user: user_id,
            exam: exam_id
        });

        if (!foundDocument) {
            return res.status(404).json({ message: 'User not allowed for this exam' });
        }

        const status = foundDocument.status;


        const exam = await Exam.findOne({ _id: exam_id })
            .populate('production', 'question_number questionURL')
            .exec();


        if (!exam) {
            return res.status(404).json({ error: 'Exam not found' });
        }

        // Sort the production array based on question_number
        const sortedProduction = exam.production.slice().sort((a, b) => a.question_number - b.question_number);

        if(status === 0){
            res.status(200).json({ production: sortedProduction }); 
        }else if(status === 1){
            //paritialy completed user
        }else{
            //finished user

            const score = foundDocument.marks;
            const time = foundDocument.time;
            const updatedAnswers = foundDocument.answers;
        


            res.status(200).json({ production: sortedProduction , status :status, score : score , time : time , updatedAnswers : updatedAnswers  }); 
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// //updating tution masters

// const updatedTuitionMaster = async (req, res) => { await TutionMaster.findOneAndUpdate(
//     { user: yourTuitionMasterId },
//     { $set: { years_of_experience: newExperienceValue } },
//     { new: true }
// )};




// // detelet tution masters

// const deletedTuitionMaster = async (req, res) => {await TutionMaster.findOneAndDelete({ _id: yourTuitionMasterId }) };



// //get all tution masters
// const allTuitionMasters = async (req, res) => {await TutionMaster.find()};




module.exports = {
    getExamQuestions,
    SubmitAnswers
};