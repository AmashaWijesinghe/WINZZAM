// ... (imports and existing code)

import React, { useState } from 'react';
import styles from './NewMonth.module.css'; // Import the CSS module
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const MonthFormPopup = ({ onClose, selectedBatchId }) => {
  /* const initialPaper = {
    month: '',
    fee: '',
    publishDate: ''
  }; */

  const [month, setMonth] = useState(null);
  const [fee, setFee] = useState(null);
  const [publishDate, setDate] = useState(null);
  /* const handleAddPaper = () => {
    if (papers.length < 8) {
      const lastPaper = papers[papers.length - 1];
      const newPaper = {
        ...initialPaper,
        month: lastPaper.month,
      fee: lastPaper.fee,
      /*   paperType: papers.paperType, // Use previous paper's type
        examDate: papers.examDate, // Use previous paper's exam date
        discussionDate: papers.discussionDate, // Use previous paper's discussion date
        markingDeadline: papers.markingDeadline, */ // Use previous paper's marking deadline
     /* };
      setPapers([...papers, newPaper]);
    }
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create an array to store the month data
      const monthsData = {
        name: month,
        fee: fee,
        date: publishDate,
        batchId: selectedBatchId, // Send the selected batch ID
      };

      console.log(monthsData)
      
      // Send a POST request to your backend API
      const response = await fetch("/api/tuition_master/createmonth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(monthsData), // Send the array of month data
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        onClose();
      } else {
        console.error("Failed to create months");
        // Handle the error case here
      }
    } catch (error) {
      console.error("Error creating months:", error);
      // Handle any network or other errors here
    }
  };

 /*  const handleChange = (index, field, value) => {
    const updatedPapers = [...papers];
    updatedPapers[index][field] = value;
    setPapers(updatedPapers);
  }; */


  return (
    <div className={styles['month-form-overlay']}>
      <div className={styles['month-form-container']}>
        <button className={styles['close-button']} onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className={styles['scrollable-form']}>
          <form onSubmit={handleSubmit}>
            <h2 className={styles['form-heading']}>Create New Month</h2>
            <div className={styles['paper-container']}>
              <label className={styles['form-label']}>
                Select Month:
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className={styles['form-select']}
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </label>
              <label className={styles['form-label']}>
                Monthly Fee (Rs.):
                <input
                  type="number"
                  value={fee}
                  onChange={(e) => setFee(e.target.value)}
                  className={styles['form-input']}
                />
              </label>
              <label className={styles['form-label']}>
                Select the date you want to publish month:
                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) => setDate(e.target.value)}
                  className={styles['form-input']}
                />
              </label>
            </div>
            <button className={`${styles['btn']} ${styles['btn-primary']} ${styles['pm-z']}`} type="submit">
              Add Month
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default MonthFormPopup;
