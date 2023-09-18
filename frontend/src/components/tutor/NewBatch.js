
import React, { useState } from 'react';
// Create this CSS file for styling the popup
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cookies from "js-cookie";
import styles from './NewBatch.module.css'; 

const BatchFormPopup = ({ onClose }) => {
  // Handle form submission logic here
  const [year, setYear] = useState('');
  const [fee, setFee] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const batchData = {
        year,
        fee,
      };
      const token = Cookies.get("token");
      console.log(token); 
      // Send a POST request to your backend API
      const response = await fetch("/api/tuition_master/createbatch", {
        method: "POST",
        headers: {
          token: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(batchData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        onClose(); // Close the form
      } else {
        console.error("Failed to create batch");
        // Handle the error case here
      }
    } catch (error) {
      console.error("Error creating batch:", error);
      // Handle any network or other errors here
    }
  };

  return (
    <div className={styles["batch-form-overlay"]}> {/* Use the CSS module class */}
      <div className={styles["batch-form-container"]}> {/* Use the CSS module class */}
        <button className={styles["close-button"]} onClick={onClose}>
          <i className="fas fa-times"></i> {/* FontAwesome close icon */}
        </button>
        <form onSubmit={handleSubmit}>
          {/* BsXCircle */}
          <h2>Create New Batch</h2>
          <label className={styles["form-label"]}> {/* Use the CSS module class */}
            <h4>Year</h4>
            <input
              className={styles["batch-form-input"]} 
              name="Year"
              onChange={(e) => setYear(e.target.value)}
            />
          </label>
          <label className={styles["form-label"]}> {/* Use the CSS module class */}
            <h4>Fee</h4>
            <input
              className={styles["batch-form-input-n"]} 
              type="number"
              name="fee"
              onChange={(e) => setFee(e.target.value)}
            />
          </label>
          {/* Add more form fields as needed */}
          <button
            className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["pm-z"]}`} 
            type="submit"
          >
            Create Batch
          </button>
        </form>
      </div>
    </div>
  );
};

export default BatchFormPopup;

