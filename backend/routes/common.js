const router = require("express").Router();

const tutorController = require("../controllers/sampleController"); //Require Controllers
const {verifyAndAuthorization,verifyToken,verifyAndAdmin, verifyByRole} = require("../middleware/verifyToken")

const subjectController = require("../controllers/common/subjectController"); //Require Controllers
const { createTicket, getTickets, getTicket, updateTicket } = require("../controllers/common/ticketsController");


//creation of tution master 
// router.post("/subject", verifyToken , verifyByRole("Tutor") , tutorController.registerTutionMaster); // when a post request hits, its first check whether this user is authenticated using the token, if so it will check whether this is a tution master . then give this user to update the tution masters registration page.
// router.post("/subject", tutorController.createSubject);
router.get('/subject', subjectController.getSubjects);

//tickets
router.get('/tickets', getTickets);
router.get('/tickets/:id', getTicket);
router.post('/tickets', createTicket);
router.patch('/tickets/:id', updateTicket);

module.exports = router;