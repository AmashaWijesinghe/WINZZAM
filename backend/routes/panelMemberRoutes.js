const express = require("express");
const {
	getPanelMembers,
	getPanelMember,
	updatePanelMember,
	// holdMember
} = require("../controllers/panelMemberController");

const router = express.Router();

//GET all panel members
router.get("/", getPanelMembers);

//GET a single panel member
router.get("/:id", getPanelMember);

//UPDATE a panel member
router.patch("/:id", updatePanelMember);

// router.patch("/ban_member/:id", holdMember);

module.exports = router;
