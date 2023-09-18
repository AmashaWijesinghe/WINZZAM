import React, { useState, useEffect } from 'react';
import styles from './StudentProfile.module.css'; // Import the CSS module for styling
import Exam from '../exam/main';
import profile from "../../../src/assets/profile.png";
import { Navigate, useNavigate } from "react-router-dom";

const StudentProfile = ({ token }) => {
    const [selectedMonth, setselectedMonth] = useState(null);
    const [classes, setstudentDetails] = useState([]);
    const [selectedExam, setselectedExam] = useState(null);


    const navigate = useNavigate();

    const handleExamClick = (examId) => {
        // Navigate to the new route with the examId as a parameter
        navigate(`/mcqexam/${examId}`);
    };


    const handleViewClick = (student) => {
        setselectedMonth(student);
        setselectedExam(null);
    };



    useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: {
                token: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        };

        // Use the relative URL to make the request to your Express server
        fetch('/api/student/getallstudentmonths/', requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setstudentDetails(data.student.joinedClasses);
            })
            .catch((error) => {
                console.error('Fetch Error:', error);
            });
    }, []);

    return (
        <div /* className={styles['main-container']} */>
            <div className={styles['student-profile-container']}>

                <h2>Registered Classes</h2>
                <div className={styles['student-list-overflowYScroll']}>
                    {classes.length > 0 ? (
                        <div className={styles['student-list-container']}>
                            {classes.map((classObj, index) => (
                                <div className={styles['student-card']} key={index}>
                                    <div className={`${styles.profilePhoto}`}>
                                        <img src={profile} alt="" style={{ height: "30px", width: "30px" }} />
                                        <h2 className={styles.studentCardTitle}>Charitha Dissanayake</h2>
                                    </div>
                                    <h2 className={styles.studentCardContent}>{classObj.name}</h2>
                                    <div className={styles['StudentCardButtonContainer']}>
                                        <button className={styles['StudentCardButton']} onClick={() => handleViewClick(classObj)}>View</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No classes available</p>
                    )}
                </div>
            </div>

            <div className={styles['student-details']}>
                {selectedMonth && (
                    <div className={styles['student-description']}>
                        <h2>{selectedMonth.name}</h2>
                        <p>{selectedMonth.exams.length}</p>
                        <div className={styles['studentexamList']}>
                            <div className={styles['studentcardGrid']}>
                                {selectedMonth.exams.length > 0 ? (
                                    selectedMonth.exams.map((examObj, index) => (
                                        <div className={styles.studentexamCard}>
                                            <div className={styles.studentexamTitleContainer}>
                                                <div className={styles.studentexamTitle}>
                                                    <div key={index}>
                                                        <h2 className={styles.studentCardTitle}>{examObj.number}</h2>

                                                        <div className={styles['StudentCardButtonContainer']}>
                                                            <button className={styles['StudentCardButton']} onClick={() => handleExamClick(examObj._id)}>Open</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No classes available</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {selectedExam && (
                    <div className={styles['another-component']}>
                        <Exam exam_id={selectedExam} token={token} />
                        <p>This is another component based on selectedExam.{selectedExam}</p>
                    </div>
                )}
            </div>
        </div>
    );


};

export default StudentProfile;
