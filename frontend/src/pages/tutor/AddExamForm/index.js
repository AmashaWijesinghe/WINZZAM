// ... (imports and existing code)

import React, { useState } from 'react';
import styles from "./style.module.css";// Create this CSS file for styling the popup
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUpload, faCheck } from '@fortawesome/free-solid-svg-icons';

import storage from "../../../firebase";
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";


const ExamFormPopup = ({ onClose, selectedMonth, token, setShowExam }) => {
  const [type, setType] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [publishTime, setPublishTime] = useState(null);
  const [questionFile, setQuestionFile] = useState(null);
  const [explainFile, setexplainFile] = useState(null);
  //const [resourseFile, setresourseFile] = useState(null);
  const [duration, setDuration] = useState(null);
  const [qcount, setQcount] = useState(null);
  const [progress_q, setProgressquestion] = useState(0);
  const [progress_ex, setProgressexpalin] = useState(0);

  const [discustionDate, setdiscustionDate] = useState("");
  const [discustionTime, setdiscustionTime] = useState(null);

  // Discusiion date
  console.log('selected month', selectedMonth)

  const handleInputChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    handleFileChange(e, setQuestionFile, 'Question_Resourses',setProgressquestion);
  };

  const handleInputExplanChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    handleFileChange(e, setexplainFile, 'Explanation_Resourses',setProgressexpalin);
  };

  //

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {};
    formData.type = type;
    formData.publishDate = publishDate;
    formData.questionFile = questionFile;
    formData.explainFile = explainFile;
    formData.selectedMonth = selectedMonth;
    formData.duration = duration;
    formData.publishTime = publishTime;
    formData.qcount = qcount;
    formData.disDate = discustionDate;
    formData.disTime = discustionTime;
  

    // Initialize state to store subject options

    const requestOptions = {
      method: "POST",
      headers: {
        token: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(
        "/api/tuition_master/createexam",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
     
      if(data.message==1){
        alert("You cant create more than 6 exams.");
      }
      setShowExam(false);

    } catch (error) {
      
      //setShowExam(false);
      console.error("Error:", error.message);
    }
  };


  const handleFileChange = async (event, setter, folder,setProgress) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];

      try {
        // Create a storage reference for the file
        const storageRef = ref(storage, `winzzam/exam_resources/${folder}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get the upload progress as a percentage
            const progress_1 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress_1)
            // You can update your UI with the progress value here
          },
          (error) => {
            console.error("Error uploading file:", error.message);
          },
          () => {
            // Upload completed successfully
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setter(downloadURL);
              alert("File Uploaded Successfully");
            });
          }
        );
      } catch (error) {
        console.error("Error uploading file:", error.message);
      }
    }

    // ... rest of the component ...
  };




  return (
    <div className={styles['month-form-overlay']}>
      <div className={styles['month-form-container']}>
        <button className={styles['close-button']} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} /> {/* Use the imported FontAwesome icon */}
        </button>
        <div className={styles['scrollable-form']}>
          <h2>Create a Exam</h2>
          <form className={styles['form-container']} onSubmit={handleSubmit}>

            <div className={styles['inner-form-container']}>
              <div className={styles['left-container']}>
                <label className={styles.label} htmlFor="type">
                  Exam type
                </label>
                <select
                  id="type"
                  className={styles['input']}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Exam Type</option>
                  <option value="0">Mcq</option>
                  <option value="1">Essay</option>
                </select>

                <div>
                  <div>
                    <label className={styles['input']} htmlFor="fileInput">
                      <FontAwesomeIcon icon={faUpload} /> Question File
                    </label>
                    <input
                      className={styles['input_doc']}
                      id="fileInput"
                      type="file"
                      accept="application/pdf" // Accept only PDF files
                      onChange={handleInputChange}
                    />
                    {!questionFile && (
                      <div >
                        <progress className={styles['progress']} value={progress_q} max="100" />
                      </div>
                    )}
                  </div>
                  {questionFile && (
                    <div className={styles['success']}>
                      <FontAwesomeIcon icon={faCheck} /> Uploaded {/* Display the selected file name */}
                    </div>
                  )}
                </div>
                <div>
                </div>
                <label className={styles.label} htmlFor="examdate">
                  Starting Date
                </label>
                <input
                  id='examdate'
                  className={styles['input']}
                  type="Date"
                  placeholder="Publish date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                />
                 <label className={styles.label} htmlFor="examtime">
                  Starting Time
                </label>
                <input
                  className={styles['input']}
                  type="Time"
                  placeholder="Publish Time"
                  value={publishTime}
                  onChange={(e) => setPublishTime(e.target.value)}
                />
                
                <label className={styles.label} htmlFor="count">
                      Question Count
                </label>
                <input
                  id = 'count'
                  className={styles['input']}
                  type="text"
                  placeholder="Question Count"
                  value={qcount}
                  onChange={(e) => setQcount(e.target.value)}
                />
              </div>
              <div className={styles['right-container']}>
                <label className={styles.label} htmlFor="type">
                  Exam Duration
                </label>
                <select
                  className={styles['input']}
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="">Exam Duration</option>
                  <option value="1 hour">1 Hour</option>
                  <option value="2 hour">2 Hour</option>
                  <option value="3 hour">3 Hour</option>
                </select>
                <div>
                  <div>
                    <label className={styles['input']} htmlFor="fileeInput">
                      <FontAwesomeIcon icon={faUpload} /> Explanation File
                    </label>
                    <input
                      className={styles['input_doc']}
                      id="fileeInput"
                      type="file"
                      accept="application/pdf" // Accept only PDF files
                      onChange={handleInputExplanChange}
                    />
                    {!explainFile && (
                      <div>
                        <progress className={styles['progress']} value={progress_ex} max="100" />
                      </div>
                    )}
                  </div>
                  {questionFile && (
                    <div className={styles['success']}>
                      <FontAwesomeIcon icon={faCheck} /> Uploaded {/* Display the selected file name */}
                    </div>
                  )}
                </div>
                <label className={styles.label} htmlFor="disdate">
                    Discussion Date
                </label>
                <input
                  id='disdate'
                  className={styles['input']}
                  type="Date"
                  placeholder="Publish date"
                  value={discustionDate}
                  onChange={(e) => setdiscustionDate(e.target.value)}
                />
              
                <label className={styles.label} htmlFor="disdate">
                  Discussion Time
                </label>
                <input
                  className={styles['input']}
                  type="Time"
                  placeholder="Publish Time"
                  value={discustionTime}
                  onChange={(e) => setdiscustionTime(e.target.value)}
                />
              </div>

            </div>
            <div className={styles['submit-container']}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExamFormPopup;
