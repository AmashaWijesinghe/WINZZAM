import React from "react";
 // You can create a CSS file for styling
 import "./pending.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faHourglass} from '@fortawesome/free-solid-svg-icons';
 import { useNavigate } from "react-router-dom";

const PendingPage = ({ setIsLoggedin}) => {

  return (
    <div className="pending-container">
      <div className="pending-content">
        <FontAwesomeIcon
          icon={faHourglass}
          className="pending-icon"
        />
        <h2 className="pending-heading">Please Wait</h2>
        <p className="pending-message">
          Your profile registration is being processed. Please wait for
          approval.
        </p>

        <button className="pending-button" 
                onClick={() => {
                  setIsLoggedin(4)
              }}>Go in
        </button>
      </div>
    </div>
  );
};

export default PendingPage;

