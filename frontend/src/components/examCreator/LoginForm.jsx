import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
// require('dotenv').config();

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Get the navigate function


  const handleSubmit = async (e) => {
    e.preventDefault();
    // const backendUrl = process.env.REACT_APP_BACKEND_URL;
    try {
      const userData = {
        username: username,
      };
  
      const response = await fetch('/ExamCreatorloginsample', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log("clicked")
      if (response.ok) {

        const data = await response.json();
        const { user } = data;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/ExamCreator/dashboard");
      } else {
        // Handle login error, display error message to the user, etc.
        console.log("Login failed");
      }
    } catch (error) {
      // Handle any other errors
      console.log(error);
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Add the closing parenthesis here
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
