const { get } = require("mongoose");
const PanelMember = require("../models/panelMemberModel");
const mongoose = require("mongoose");

//get all panel members
const getPanelMembers = async (req, res) => {
	const panelMembers = await PanelMember.find({}).sort({ createdAt: -1 })
	.populate('assignedTo subjects bannedBy holdBy user')
    .exec();
	res.status(200).json({ panelMembers });
};

//get a single panel member
const getPanelMember = async (req, res) => {
	const { id } = req.params;
	//check the type of id to stop crashing the app
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Panel Member not found" });
	}
	const panelMember = await PanelMember.findById(id);

	if (!panelMember) {
		return res.status(404).json({ error: "Panel Member not found" });
	}

	res.status(200).json({ panelMember });
};

//update a panel member
const updatePanelMember = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Panel Member not found" });
	}

	const panelMember = await PanelMember.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!panelMember) {
		return res.status(404).json({ error: "Panel Member not found" });
	}

	res.status(200).json(panelMember);
};

// const holdMember = 

module.exports = {
	getPanelMembers,
	getPanelMember,
	updatePanelMember,
	// holdMember
};
