const express = require("express");
const {
	getStudents,
	getStudent,
	updateStudent,
	getTuitionMastersByMonth,
	getAllStudentMonths
} = require("../controllers/studentController");
const {verifyToken} = require("../middleware/verifyToken")
const router = express.Router();

//GET all students
router.get("/", getStudents);


//Get all the paperclass product

router.get("/getpaperclasses",getTuitionMastersByMonth)
router.post("/getallstudentmonths",verifyToken,getAllStudentMonths)
//GET a single student
router.get("/:id", getStudent);

//UPDATE a student
router.patch("/:id", updateStudent);

module.exports = router;
