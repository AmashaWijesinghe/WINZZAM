const router = require("express").Router();

const tutorController = require("../controllers/sampleController"); //Require Controllers
const {verifyAndAuthorization,verifyToken,verifyAndAdmin, verifyByRole} = require("../middleware/verifyToken")

//creation of tution master 
router.post("/", verifyToken , verifyByRole("Tutor") , tutorController.registerTutionMaster); // when a post request hits, its first check whether this user is authenticated using the token, if so it will check whether this is a tution master . then give this user to update the tution masters registration page.
router.post("/test", tutorController.createuserExamData);
router.get('/', verifyToken, tutorController.getTuitionMasterDetails);
router.post("/question", tutorController.createQuestion);

module.exports = router;
