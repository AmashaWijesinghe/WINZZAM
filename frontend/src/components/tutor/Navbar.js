import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import profile from "../../assets/profile.png";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = ({ onBatchFormToggle }) => {
  const [showBatchForm, setShowBatchForm] = useState(false);

  const handleCreateBatchClick = () => {
    setShowBatchForm(true);
    onBatchFormToggle(); // Notify the Dashboard component to show the form overlay
  };
  
  // Retrieve user data from localStorage
  const userJSON = localStorage.getItem("user");
  let username = "";
  let userRole = ""; // Initialize username variable

  if (userJSON) {
    // Parse JSON string to object
    const user = JSON.parse(userJSON);
    username = user.username;
    userRole = user.userRole;
  } else {
    // Handle the case where user data is not available
    console.log("User data not found.");
  }

  return (
    <div className={styles.customHeader}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={`${styles.name} fw-medium d-inline-flex px-5`}>Hello {username}</h1>
        </div>
        <div className={styles.center}>
          <button className={`btn btn-primary ${styles.pmZ}`} onClick={handleCreateBatchClick}>Create a New Batch</button>
        </div>
        <div className={styles.right}>
          <div className={`${styles.notification} px-1 d-flex align-items-center justify-content-center`}>
            <BsBell />
          </div>
          {/* <div className={styles.profile}>
            <div className={`${styles.profilePhoto} px-1 m-2`}>
              <img src={profile} alt="" style={{ height: "50px", width: "50px" }} />
            </div>
            <div className={`${styles.info} d-flex align-items-center justify-content-center`}>
              <div className={styles.name}>
                <small className={styles.role}>{username}</small>
                <p>{userRole}</p>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
