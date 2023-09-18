const express = require("express");


const {
	getExamQuestions,
	SubmitAnswers
} = require("../controllers/examController");

const router = express.Router();

const {verifyToken} = require("../middleware/verifyToken")


//GET all students
//router.get("/", getStudents);

//GET all the exam questions by passing the exam id
router.post("/:id", verifyToken , getExamQuestions);
router.post("/submitanswers",SubmitAnswers);



//UPDATE a student
//router.patch("/:id", updateStudent);

module.exports = router;
