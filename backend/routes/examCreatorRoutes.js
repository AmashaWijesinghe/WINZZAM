const express = require("express");
const router = express.Router();
const authController = require("../controllers/examCreatorController");
const {
	getCurrentOrdersDetails,
	getHeaderInfo,
	uploadQuestion,
	loadQuestions,
	getSubjectsDetails,
	getResource,
} = require("../controllers/examCreatorController");
// const {getCurrentOrdersDetails, getHeaderInfo, uploadQuestion, } = require('../controllers/examCreatorController');

const {
	verifyAndAuthorization,
	verifyToken,
	verifyByRole,
} = require("../middleware/verifyToken");

router.get("/exam_info", getCurrentOrdersDetails);
router.get("/header_info", verifyToken, getHeaderInfo);
router.get("/getProductions", loadQuestions);
router.post("/setQuestions", uploadQuestion);
router.get("/getResource", getResource);
router.get("/subj_info/:id", getSubjectsDetails);
// router.post('/examDetailsById/:id', getExamDetails);

module.exports = router;
