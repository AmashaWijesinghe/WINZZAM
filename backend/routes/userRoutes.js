const express = require("express");
const {
	getUsers,
	getUser,
	updateUser,
	userSignup,
	verifyEmail,
	userLogin , 
	authCheck
} = require("../controllers/userController");
const {verifyToken} = require("../middleware/verifyToken")
const router = express.Router();


router.post("/", userSignup);
router.get("/:id/verify/:token", verifyEmail)
router.post("/login",userLogin )
router.get("/userInfo", verifyToken, authCheck)

//GET all users

router.get("/", getUsers);

//GET a user
router.get("/:id", getUser);

//UPDATE a user
router.patch("/:id", updateUser);

module.exports = router;
