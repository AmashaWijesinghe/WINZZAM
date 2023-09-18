const { get } = require("mongoose");
const TuitionMaster = require("../models/tutionMasterModel");
const User = require("../models/userModel");

const Batch = require("../models/Service/batchModel");

const Month = require("../models/Service/monthModel");

const SheduleDate = require("../models/Service/scheduleDateModel");

const Exam = require("../models/Service/examModel");

const Resource = require("../models/Service/resourseModel");

const mongoose = require("mongoose");

//get all tuition masters
const getTuitionMasters = async (req, res) => {
	const tuitionMasters = await TuitionMaster.find({}).sort({ createdAt: -1 });
	res.status(200).json({ tuitionMasters });
};


//get a single tuition master
const getTuitionMaster = async (req, res) => {
	const { id } = req.params;
	//check the type of id to stop crashing the app
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Tuition Master not found" });
	}
	const tuitionMaster = await TuitionMaster.findById(id);

	if (!tuitionMaster) {
		return res.status(404).json({ error: "Tuition Master not found" });
	}

	res.status(200).json({ tuitionMaster });
};

//update a tuition master
const updateTuitionMaster = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Tuition Master not found" });
	}

	const tuitionMaster = await TuitionMaster.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!tuitionMaster) {
		return res.status(404).json({ error: "Tuition Master not found" });
	}

	res.status(200).json(tuitionMaster);
};

const registerTutionMaster = async (req, res) => {
	console.log(req.user._id);

	try {
		// Save the User document
		const { firstName, lastName, phone, profilePicture, NIC_Path, gender, degree, subject, description } = req.body;
		const updatedUser = await User.findOneAndUpdate(
			{ _id: req.user._id }, // Replace userId with the actual user's _id
			{
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				profilePicture: profilePicture
			},
			{ new: true } // Return the updated user document
		);
		// Use the savedUser._id to create the TutionMaster document
		const newTuitionMaster = new TuitionMaster({
			user: updatedUser._id,
			NIC_Path: NIC_Path,
			gender: gender,
			degree: degree,
			subject: subject,
			description: description
		});
		const savedTuitionMaster = await newTuitionMaster.save();
		const updatedProfUser = await User.findOneAndUpdate(
			{ _id: req.user._id }, // Replace userId with the actual user's _id
			{
				isProfileComplete: 1
			},
			{ new: true } // Return the updated user document
		);

		res.status(200).json({ "message": "Succussfull" });

		// Return the savedTuitionMaster or any other response you need
	} catch (error) {
		// Handle any errors here
		console.error('Error saving documents:', error);
		throw error;
	}
}

//create a new batch
const createBatch = async (req, res) => {
	try {
		const { year, fee } = req.body; // Extract batch details from the request body

		// Get the tuition master's id
		const tuitionMaster = await TuitionMaster.findOne({ user: req.user._id });

		if (!tuitionMaster) {
			return res.status(404).json({ error: "Tuition Master not found" });
		}

		// Check if a batch with the same year already exists for the tuition master
		const existingBatch = await Batch.findOne({ year, _id: { $in: tuitionMaster.batches } });

		if (existingBatch) {
			return res.status(400).json({ error: "A batch with the same year already exists for this tuition master" });
		}

		// Create a new batch
		const newBatch = new Batch({
			year,
			fee,
		});

		const savedBatch = await newBatch.save();

		// Push the ID of the newly created batch into the tuition master's batches array
		tuitionMaster.batches.push(savedBatch._id);

		// Save the updated tuition master
		await tuitionMaster.save();

		res.status(200).json({ message: "Batch created successfully", batch: savedBatch });
	} catch (error) {
		console.error('Error creating batch:', error);
		res.status(500).json({ error: "An error occurred while creating the batch" });
	}
};

const getBatchesForTutor = async (req, res) => {
	try {
		// Find the tuition master based on their ID
		const tuitionMaster = await TuitionMaster.findOne({ user: req.user._id });

		if (!tuitionMaster) {
			return res.status(404).json({ error: "Tuition Master not found" });
		}
		// Retrieve all batches associated with the tuition master
		const batches = await Batch.find({ _id: { $in: tuitionMaster.batches } });
		console.log('Batches:', batches);

		res.status(200).json({ batches });
	} catch (error) {
		console.error('Error retrieving batches:', error);
		res.status(500).json({ error: "An error occurred while retrieving batches" });
	}
};

// Create a new month
const createMonth = async (req, res) => {
	try {
		const { name, fee, date, batchId } = req.body; // Extract month details and batchId from the request body

		// Find the batch using the provided batchId
		const batch = await Batch.findById(batchId);

		if (!batch) {
			return res.status(404).json({ error: "Batch not found" });
		}

		// Check if a month with the same name already exists within this batch
		let isExistingMonth = false;
		for (const monthId of batch.months) {
			const month = await Month.findById(monthId);
			if (month && month.name === name) {
				isExistingMonth = true;
				break;
			}
		}

		if (isExistingMonth) {
			return res.status(400).json({ error: "A month with the same name already exists within this batch" });
		}

		// Create a new month
		const newMonth = new Month({
			name: name,
			fee: fee,
			date: date,
		});

		const savedMonth = await newMonth.save();

		// Add the month's ID to the batch's months array
		batch.months.push(savedMonth._id);

		// Save the updated batch
		await batch.save();

		res.status(200).json({ message: "Month created successfully", month: savedMonth });
	} catch (error) {
		console.error('Error creating month:', error);
		res.status(500).json({ error: "An error occurred while creating the month" });
	}
};

const getMonthsforBatch = async (req, res) => {
	try {
		const batchId = req.params.batchid; // Extract batchId from the request parameters
		console.log(batchId)
		// Find the batch using the provided batchId

		const batch = await Batch.findById(batchId)
			.populate('months')
			.exec();


		console.log(batch)

		if (!batch) {
			return res.status(404).json({ error: "Batch not found" });
		}

		// Retrieve all months associated with the batch using the batch's months array
		const months = batch.months;

		res.status(200).json({ months });
	} catch (error) {
		console.error('Error retrieving months for batch:', error);
		res.status(500).json({ error: "An error occurred while retrieving months" });
	}
};

const createExam = async (req, res) => {
	try {
		// Save the User document
		const { type, publishDate, publishTime, duration, qcount, questionFile, selectedMonth, explainFile, disDate, disTime } = req.body;




		let number;

		const month = await Month.findById(selectedMonth)
			.populate('exams')
			.exec();

		if (!month) {
			return res.status(404).json({ error: "Month not found" });
		}



		// Retrieve all months associated with the batch using the batch's months array
		const result = month.exams.length;

		if (result >= 6) {
			return res.status(404).json({ message: 1 });
		}

		console.log(result)
		const newDate = new SheduleDate({
			type: "Paper", // Make sure this aligns with your actual data structure
			date: publishDate,
			time: publishTime
		});

		const newDate_2 = new SheduleDate({
			type: "Discussion", // Make sure this aligns with your actual data structure
			date: disDate,
			time: disTime
		});

		const savedDate_1 = await newDate.save();
		const savedDate_2 = await newDate_2.save();

		const newResourse = new Resource({
			questionURL: questionFile,
			count: qcount,
			explanationURL: explainFile
		});

		const savedResource = await newResourse.save();


		// Use the savedUser._id to create the TutionMaster document
		const newExam = new Exam({
			number: result + 1,
			type: type,
			scheduledDates: [savedDate_1._id, savedDate_2._id],
			duration: duration,
			resources: savedResource._id
		});

		console.log(selectedMonth);
		const savedExam = await newExam.save();

		// Add the exam ID to the exams array
		month.exams.push(savedExam._id);

		await month.save(); // Save the updated month document

		// Return the saved exam's ID or other relevant information
		res.status(201).json({ message: "Exam created successfully", examId: savedExam._id });
	} catch (error) {
		// Handle any errors here
		console.error('Error saving documents:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}


const getExamsForMonth = async (req, res) => {
	try {
		const monthId = req.params.monthid; // Extract batchId from the request parameters
		console.log(monthId)
		// Find the batch using the provided batchId

		const month = await Month.findById(monthId)
			.populate({
				path: 'exams',
				model: 'exam',
				populate: [
					{
						path: 'resources',
						model: 'resource',
						select: 'questionURL explanationURL count'
					},
					{
						path: 'scheduledDates',
						model: 'ScheduleDate',
						select: 'type date time count'
					}
				]
			})
			.exec();

		if (!month) {
			return res.status(404).json({ error: "Month not found" });
		}

		// Retrieve all months associated with the batch using the batch's months array
		const exams = month.exams;

		res.status(200).json({ exams });
	} catch (error) {
		console.error('Error retrieving months for batch:', error);
		res.status(500).json({ error: "An error occurred while retrieving months" });
	}
};


module.exports = {
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
};
