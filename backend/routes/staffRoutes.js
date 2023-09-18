//handle routes realted to the actor staff
const express = require("express");
const {
	getAllUsers,
	getBasicInfo,
	newRegistrations,
	getRegistrationDetails,
	updateProfileCompletionStatus,
	getExamProgress,
} = require("../controllers/staffController");
const {
	verifyAndAuthorization,
	verifyToken,
	verifyByRole,
} = require("../middleware/verifyToken");

const router = express.Router();

router.get("/clientInfo", verifyToken, verifyByRole("Staff"), getAllUsers);
router.get("/basics", verifyToken, verifyByRole("Staff"), getBasicInfo);
router.get(
	"/newRegistrations",
	verifyToken,
	verifyByRole("Staff"),
	newRegistrations
);
router.get(
	"/registrationInfo",
	verifyToken,
	verifyByRole("Staff"),
	getRegistrationDetails
);

router.get("/examProgress", getExamProgress);

router.post("/updateProfileCompletionStatus", updateProfileCompletionStatus);

module.exports = router;
