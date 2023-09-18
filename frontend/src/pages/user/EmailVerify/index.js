import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// Import your success image if needed

import styles from "./styles.module.css";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {

        console.log(param.id,param.token)
        const url = `/api/users/${param.id}/verify/${param.token}`;
        const response = await fetch(url);

        console.log(response)

        if (response.ok) {
          // HTTP status code 200-299 indicates success
          const data = await response.json();
          console.log(data);
          setValidUrl(true);
        } else {
          // Handle error cases here
          console.log(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, []);

  return (
    <div>
      {validUrl ? (
        <div className={styles.container}>
          {/* <img src={success} alt="success_img" className={styles.success_img} /> */}
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className={styles.green_btn}>Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
};

export default EmailVerify;
