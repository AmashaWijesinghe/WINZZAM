import React from "react";
import styles from "./styles.module.css"; // Import your CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';

const PendingPage = () => {
  return (
    <div className={styles.pendingcontainer}>
      <div className={styles.pendingContent}>
        <FontAwesomeIcon
          icon={faHourglass}
          className={styles.pendingicon}
        />
        <h2 className={styles.pendingheading}>Please Wait</h2>
        <p className={styles.pendingmessage}>
          Your profile registration is being processed. Please wait for
          approval.
        </p>
        <button
          className={styles.pendingbutton}
          onClick={() => {
            
          }}
        >
          Go in
        </button>
      </div>
    </div>
  );
};

export default PendingPage;
