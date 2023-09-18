import React, { useState, useEffect } from 'react';
import NewExam from "../AddExamForm"
import styles from './ExamPage.module.css'; // Import the CSS module
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ExamCard = ({ exam }) => (

  <div className={styles.examCard}>
    <div className={styles.examTitleContainer}>
      <div className={styles.examTitle}>
        <h3 className={styles.cardTitle}>{exam.number}.
          {exam.type === 0 ? 'MCQ' : exam.type === 1 ? 'Essay' : 'Unknown Type'}
        </h3>
        <button className={styles.sendUpdatesButton}>Send Updates</button>
      </div>
    </div>
    <div className={styles.examContent}>
      <div className={styles.exammain}>
        <h3 className={styles.durationTitle}>Duration: {exam.duration}</h3>
        <h3 className={styles.durationTitle}>Question Count: {exam.resources.count}</h3>
      </div>
      <h3 className={styles.durationTitle}>Resources</h3>
      <div className={styles.examResources}>
        <div className={styles.iconAndText}>
          <FontAwesomeIcon icon={faUpload} />
          <p><a href={exam.resources.questionURL}>Questions</a></p>
        </div>
        <div className={styles.iconAndText}>
          <FontAwesomeIcon icon={faUpload} /><p><a href={exam.resources.explanationURL}>Explanation</a></p>
        </div>
      </div>
      <h3 className={styles.durationTitle}>Exam Dates and Times</h3>
      {exam['scheduledDates'].map((date) => {
        if (date.type === "Paper") {
          return (
            <div className={styles.examDates} key={date.date}>
              <p>Date: {date.date.slice(0, 10)}</p>
              <p>Time: {date.time}</p>
            </div>
          );
        }
        return null; // Return null for non-'Paper' dates, or omit this line if you want to skip them.
      })}

      <h3 className={styles.durationTitle}>Discussion Dates and Times</h3>
      {exam['scheduledDates'].map((date) => {
        if (date.type === "Discussion") {
          return (
            <div className={styles.examDates} key={date.date}>
              <p>Date: {date.date.slice(0, 10)}</p>
              <p>Time: {date.time}</p>
            </div>
          );
        }
        return null; // Return null for non-'Paper' dates, or omit this line if you want to skip them.
      })}
      <div className={styles.exammain}>
        <h3 className={styles.durationTitle}>Progress</h3>
        <div className={styles.progressText}>
          {(exam.production.length / parseInt(exam.resources.count)) * 100}%
        </div>
      </div>
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${(exam.production.length / parseInt(exam.resources.count)) * 100}%` }}
        ></div>
      </div>
    </div>
  </div>
);


const ExamList = ({ exams }) => (
  <div className={styles.examList}>
    <div className={styles.cardGrid}>
      {exams.map((exam) => (
        <ExamCard key={exam.id} exam={exam} />
      ))}
    </div>
  </div>
);

const ExamComponent = ({ selectedMonth }) => {
  const [exams, setExams] = useState(null);
  const [showExam, setShowExam] = useState(false);


  useEffect(() => {
    // Fetch additional data for the month from the backend when the component mounts

    fetch(`/api/tuition_master/getexams/${selectedMonth}`, {
      method: "GET",
      headers: {
        // Add any necessary headers here
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setExams(data.exams);
        console.log(data.exams);
      })
      .catch((error) => {
        console.error(`Error fetching month details for :`, error);
      });
  }, [showExam]);


  const handleAddExam = () => {
    setShowExam(true);
  };

  const onClose = () => {
    setShowExam(false)
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.addButton}
        onClick={handleAddExam}
      >
        Add Exam
      </button>
      {exams && <ExamList exams={exams} />}
      {showExam && <NewExam onClose={onClose} selectedMonth={selectedMonth} setShowExam={setShowExam} />}
    </div>
  );
};

export default ExamComponent;
