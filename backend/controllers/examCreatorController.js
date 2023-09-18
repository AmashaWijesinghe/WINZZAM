//create the functions needed for everyone as in general in data retrieval, manipulation and deletion from the database
const User = require("../models/userModel");
const Examcreator = require("../models/examCreatorModel");
const TuitionMaster = require("../models/tutionMasterModel");
const Month = require("../models/Service/monthModel");
const Batch = require("../models/Service/batchModel");
const creatorWork = require("../models/Service/examCreatorWorkModel");
const Exam = require("../models/Service/examModel");
const Resources = require("../models/Service/resourseModel");
const express = require("express");
const jwt = require("jsonwebtoken");
const Production = require("../models/Service/productionModel");
const Subjects = require("../models/Service/subjectModel");

const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const getHeaderInfo = async (req, res) => {
	const authHeader = req.headers.token;
	// console.log(authHeader);
	const token = authHeader.split(" ")[1];

	jwt.verify(token, process.env.JWT_SEC, async (err, user) => {
		if (err) {
			return res.status(403).json({ error: "Invalid token" });
		}

		const userID = user.id; // Use user.id directly

		try {
			const data = await User.findOne(
				{ _id: userID },
				{ _id: 1, username: 1, userRole: 1 }
			);

			if (data === null) {
				return res.status(400).json({
					status: 400,
					message: "User with the given ID does not exist",
				});
			} else {
				// console.log("User ID:", data._id);
				// console.log("Username:", data.username);
				// console.log("User Role:", data.userRole);

				return res.json({
					status: 200,
					data: {
						id: data._id,
						username: data.username,
						userRole: data.userRole,
					},
				});
			}
		} catch (error) {
			console.error("Error:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
	});
};
const getSubjectsDetails = async (req, res) => {
	const id = req.params.id;
	console.log(id);
	const ID = id.toString();
	console.log(ID);

	const subjects = await creatorWork.findOne({ exam: ID });
	const tuitionMasterID = subjects.tuitionMaster;
	const tId = tuitionMasterID.toHexString();
	const subjectDetails = await TuitionMaster.findOne({ user: tId });
	let SubDetails = null;
	if (subjectDetails) {
		const subjectId = subjectDetails.subject;
		const sub_id = subjectId.toString();
		SubDetails = await Subjects.findById({ _id: sub_id });
	}

	if (SubDetails) {
		const lessons = SubDetails.lessons;
		res.status(200).json(lessons);
	} else {
		res.status(404).json({ error: "Subject not found" });
	}
};
const getCurrentOrdersDetails = async (req, res) => {
	try {
		// Find the exam creator for the current user and populate the "user" and "work" fields
		const examcreators = await Examcreator.findOne({})
			.populate("user work")
			.exec();

		var data = [];
		for (let i = 0; i < examcreators.work.length; i++) {
			var row = [];
			const work = examcreators.work[i];

			// const documentID = work.
			const tm = work.tuitionMaster;
			const exam = work.exam;
			const month = work.month;
			console.log(tm);
			const tmID = tm.toString();
			const examID = exam.toString();
			const monthID = month.toString();

			// console.log(TMid);
			const tmDetails = await User.findById({ _id: tmID });
			const Examdetails = await Exam.findById({ _id: examID });
			const Monthdetails = await Month.findById({ _id: monthID });
			const resource = Examdetails.resources;
			const resourceDetails = await Resources.findById({ _id: resource });
			const subjectDetails = await TuitionMaster.findOne({ user: tmID });
			let SubDetails = null;
			if (subjectDetails) {
				const subjectId = subjectDetails.subject;
				const sub_id = subjectId.toString();
				SubDetails = await Subjects.findById({ _id: sub_id });
			}

			row.push(tmDetails);
			row.push(Examdetails);
			row.push(resourceDetails);
			row.push(Monthdetails);
			row.push(work);
			row.push(SubDetails);
			data.push(row);

			// console.log(tmDetails);
			// console.log(Examdetails);
		}
		res.status(200).json(data);

		// Check if no data was found
		// if (!examcreator) {
		//   return res.status(404).json({ error: 'No data found' });
		// }

		// Map the exam creator's "work" property to the desired format
		// const examTypeMap = {
		//   0: 'MCQ',
		//   1: 'Essay',
		// };

		// const examInfo = examcreator.work.map((work) => {
		//   const tuitionMaster = work.tuitionMaster ? work.tuitionMaster.username : 'N/A';
		//   const month = work.month && work.month.name ? work.month.name : 'N/A';
		//   const exam = examTypeMap[work.exam] || 'N/A';
		//   const batch = work.batch ? work.batch.year : 'N/A';
		//   const dueDate = work.deadline ? work.deadline.deadline : 'N/A';

		//   return {
		//     tuitionMaster,
		//     month,
		//     exam,
		//     batch,
		//     dueDate,
		//     documentId: work._id.toString(),
		//   };
		// });

		// res.status(200).json(exa);
	} catch (error) {
		console.error("Error in getCurrentOrdersDetails:", error);
		res.status(500).json({ error: "Failed to fetch exam information" });
	}
};

// const getExamDetails = async (req, res) => {
//   try {
//     // Validate the ID
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: 'Invalid ID' });
//     }
// console.log(req.params.id);
//     // Find the exam creator by ID and populate necessary fields
//     const examcreator = await Examcreator.findById(req.params.id)
//     .populate({
//       path: 'work',
//       populate: [
//         { path: 'tuitionMaster', model: User },
//         { path: 'batch', model: Batch },
//         { path: 'month', model: Month },
//         { path: 'deadline', model: Resources },
//         { path: 'exam', model: Exam },
//       ]
//     })
//     .exec();

//     if (!examcreator) {
//       return res.status(404).json({ message: 'Exam creator not found' });
//     }

//     // Mapping for exam types
//     const examTypeMap = {
//       0: 'MCQ',
//       1: 'Essay',
//     };

//     // Build the response object
//     const examInfo = examcreator.work.map((work) => ({
//       tuitionMaster: work.tuitionMaster.username || 'N/A',
//       month: work.month.name || 'N/A',
//       examType: examTypeMap[work.exam] || 'N/A',
//       // batch: work.batch.year || 'N/A',
//       deadline: work.deadline ? work.deadline.deadline || 'N/A' : 'N/A',
//       // questions_count: work.deadline.count,

// Build the response object
// 		const examInfo = examcreator.work.map((work) => ({
// 			tuitionMaster: work.tuitionMaster.username || "N/A",
// 			month: work.month.name || "N/A",
// 			examType: examTypeMap[work.exam] || "N/A",
// 			// batch: work.batch.year || 'N/A',
// 			deadline: work.deadline ? work.deadline.deadline || "N/A" : "N/A",
// 			// questions_count: work.deadline.count,
// 		}));

// 		res.status(200).json(examInfo);
// 	} catch (error) {
// 		console.error("Error in getExamDetails:", error);
// 		res.status(500).json({ error: "Failed to fetch exam information" });
// 	}
// };

const uploadQuestion = async (req, res) => {
	try {
		console.log(req.body);

		const examID = req.body.examID;
		const questionNo = req.body.questionNo;
		const questionImage = req.body.questionImage;
		const explanationImage = req.body.explanationImage;
		const answer = req.body.answer;
		const lesson = req.body.selectedValue;
		const documentId = req.body.documentId;

		const newQuestion = new Production({
			question_number: questionNo,
			questionURL: questionImage,
			explanationURL: explanationImage,
			answer,
			lesson,
			editorContent: documentId,
		});
		const savedQuestion = await newQuestion.save();

		// save the production ID in the specific exam document
		Exam.findByIdAndUpdate(examID, {
			$push: { production: savedQuestion._id },
		}).then(() => {
			res.status(200).json("Updated Exam Successfully");
		});
	} catch (error) {
		res.status(500).json({ error: "Failed to Update the exam" });
	}
};

const loadQuestions = async (req, res) => {
	try {
		const examID = req.query.id;
		var questionSet = [];
		// console.log(examID);
		const exam = await Exam.findOne({ _id: examID });
		// console.log(exam);
		const questionIDArr = exam.production;
		for (let i = 0; i < questionIDArr.length; i++) {
			const questionID = questionIDArr[i].toString();
			const questionDetails = await Production.findById({
				_id: questionID,
			});
			questionSet.push(questionDetails);
		}

		res.status(200).json(questionSet);
	} catch (error) {
		res.status(500).json({ error: "Failed to load the questions" });
	}
};

const getResource = async (req, res) => {
	try {
		const examID = req.query.id;
		const exam = await Exam.findOne({ _id: examID });
		const resourceID = exam.resources;
		const resource = await Resources.findOne({ _id: resourceID });

		res.status(200).json(resource);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
// const getCurrentOrdersDetails = async (req, res) => {
//   try {
//     console.log(req.user.id);
//     const examcreator = await Examcreator.find({ user: req.user.id })

//       .populate({
//         path: 'work',
//         populate: [
//           { path: 'tuitionMaster', model: User },
//           { path: 'batch', model: Batch },
//           { path: 'month', model: Month },
//           { path: 'exam', model: Exam },
//           { path: 'deadline', model: Resources },
//           { path: 'completedOn', model: Resources },
//         ]

//       })

//       .exec();
//       console.log("da");
//     if (!examcreator) {
//       return res.status(404).json({ message: 'exam creator not found' });
//     }
//     console.log("da");
//     const examInfo = examcreator.work.map((work) => {
//       // Output the values for debugging
//       console.log('Tuition Master:', work.tuitionMaster.username);
//       // console.log('Batch:', work.batch);
//       console.log('Month:', work.month.name);

//       console.log("da");
//       return {
//         tuitionMaster: work.tuitionMaster.username, // Placeholder value
//         month: work.month.name,
//         exam: work.exam.type,

//         // Add other properties you want to include
//       };
//     });

//     res.status(200).json(examInfo);

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }

// }

// const getCurrentOrdersDetails = async (req, res) => {
//   try {
//     console.log(req.user.id);

//     // Simulated examcreator data with static work array
//     const staticExamcreator = {
//       user: req.user.id,
//       work: [
//         {
//           tuitionMaster: {
//             username: 'JohnDoe'
//           },
//           batch: 'StaticBatch',
//           month: {
//             name: 'January'
//           },
//           exam: {
//             type: 'StaticExam'
//           }
//         },
//         // Add more static work items here
//       ]
//     };

//     // Map over the static work array
//     const examInfo = staticExamcreator.work.map((work) => {
//       console.log('Tuition Master:', work.tuitionMaster.username);
//       console.log('Batch:', work.batch);
//       console.log('Month:', work.month.name);

//       return {
//         tuitionMaster: work.tuitionMaster.username,
//         month: work.month.name,
//         exam: work.exam.type

//       };
//     });

//     // Simulate the successful response
//     res.status(200).json(examInfo);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const getCurrentOrdersDetails = async(req, res) => {
//   try {
//     console.log(req.user.id);
//     const examcreator = await Examcreator.findOne({ user: req.user.id })
//     .populate({
//       path: 'work',
//       populate: [
//         { path: 'tuitionMaster', model: 'TuitionMaster' },
//         { path: 'batch', model: 'Batch' },
//         { path: 'month', model: 'Month' }
//       ]
//     })
//     .exec((err, document) => {
//       if (err) {
//         // handle error
//       } else {
//         console.log(document.work[0].tuitionMaster);
//         console.log(document.work[0].batch);
//         console.log(document.work[0].month);
//       }
//     });
//         // .populate('work.tuitionMaster')
//         // .populate('work.month')
//         // .populate('work.exam')
//         // .exec();
//     if (!examcreator) {
//         return res.status(404).json({ message: 'exam creator not found' });
//     }

//     //  const tuitionMaterName = User.user.username;
//     //  const month = Month.user.name;
//     //  const examType = Exam.user.type;
//     //  const dueDate = "aaaa";

//     const examInfo = examcreator.work.map((work) => ({
//       tuitionMaster: work.tuitionMaster.username, // Assuming username is the property name
//       month: work.month.name, // Assuming name is the property name
//       exam: work.exam.type, // Assuming type is the property name
//       // Add other properties you want to include
//     }));
//     res.status(200).json(examInfo);

//     // res.status(200).json({ tuitionMaterName, month, examType, dueDate });
// } catch (error) {
//     res.status(500).json({ error: error.message });
// }
// }
module.exports = {
	// login,
	getCurrentOrdersDetails,
	getHeaderInfo,
	uploadQuestion,
	getResource,
	// getExamDetails,
	loadQuestions,
	getSubjectsDetails,
};
