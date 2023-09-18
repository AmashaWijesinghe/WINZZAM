const express = require("express");
const {
	getTuitionMasters,
	getTuitionMaster,
	updateTuitionMaster,
	registerTutionMaster,
	createBatch,
	getBatchesForTutor,
	createMonth,
	getMonthsforBatch,
	createExam,
	getExamsForMonth
} = require("../controllers/tuitionMasterController");
const {verifyAndAuthorization,verifyToken,verifyAndAdmin, verifyByRole} = require("../middleware/verifyToken")


const router = express.Router();

//GET all tuition masters
router.get("/", getTuitionMasters);

//GET a single tuition master
//router.get("/:id", getTuitionMaster);

//UPDATE a tuition master
router.patch("/:id", updateTuitionMaster);

router.post("/register", verifyToken,  registerTutionMaster);
router.post("/createexam", createExam);

//createbatch
router.post("/createbatch", verifyToken,  createBatch);

//getbatches
router.get("/getbatches", verifyToken, getBatchesForTutor);

//createmonth
router.post("/createmonth",  createMonth);

//getmonths
router.get("/getmonths/:batchid", getMonthsforBatch);
router.get("/getexams/:monthid", getExamsForMonth);
module.exports = router;
