const { get } = require("mongoose");
const Student = require("../models/studentModel");
const mongoose = require("mongoose");


const TuitionMaster = require('../models/tutionMasterModel');
// const User = require('../models/userModel');
const Feedback = require('../models/Service/feedbackModel');
const Batch = require('../models/Service/batchModel');
const Month = require('../models/Service/monthModel');

async function getTuitionMastersByMonth(req, res) {
  try {
    // Fetch all tuition masters with their related data
    const tuitionMasters = await TuitionMaster.find()
      .populate('user', 'firstName lastName profilePicture')
      .populate('subject', 'name')
    //   .populate('feedback', 'currRating reviewCount')
      .populate({
        path: 'batches',
        model: 'Batch',
        populate: {
          path: 'months',
          model: 'Month',
          select: 'name fee order',
        },
      });

    // Organize the data by months
    const monthlyData = [];

    tuitionMasters.forEach((tuitionMaster) => {
      tuitionMaster.batches.forEach((batch) => {
        batch.months.forEach((month) => {
        //   if (!monthlyData[month.name]) {
        //     monthlyData[month.name] = [];
        //   }

          monthlyData.push({
            title: tuitionMaster.user.firstName + ' ' + tuitionMaster.user.lastName ,
			month : month.name,
            img: tuitionMaster.user.profilePicture,
            degree: tuitionMaster.degree,
            subject: tuitionMaster.subject.name,
            // rate: tuitionMaster.feedback.currRating,
            // reviewCount: tuitionMaster.feedback.reviewCount,
            batchYear: batch.year,
            monthOrder: month.order,
			newPrice : month.fee,
			month_id : month._id
          });
        });
      });
    });
    // Send the organized data
	res.status(200).json(monthlyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}





//get all the available paper classes for this month...




//get all students
const getStudents = async (req, res) => {
	const students = await Student.find({}).sort({ createdAt: -1 });

	res.status(200).json({ students });
};

//get a single student
const getStudent = async (req, res) => {
	const { id } = req.params;
	//check the type of id to stop crashing the app
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Student not found" });
	}
	const student = await Student.findById(id);

	if (!student) {
		return res.status(404).json({ error: "Student not found" });
	}

	res.status(200).json({ student });
};

//update a student
const updateStudent = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Student not found" });
	}

	const student = await Student.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!student) {
		return res.status(404).json({ error: "Student not found" });
	}

	res.status(200).json(student);
};

const getAllStudentMonths = async (req,res)=>{
  try {
    const userId = req.user._id;
    console.log(userId);

    // Find the student document by userID
    const student = await Student.findOne({ userID: userId })
      .populate({
        path: 'joinedClasses',
        populate: {
          path: 'exams',
          populate :{
            path: 'scheduledDates'
          }
        },
      })
      .exec();

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Prepare the response JSON
    const responseData = {
      student,
    };

    console.log(responseData);

    // Send the JSON response to the frontend
    res.json(responseData);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}

module.exports = {
	getStudents,
	getStudent,
	updateStudent,
	getTuitionMastersByMonth,
  getAllStudentMonths
};



