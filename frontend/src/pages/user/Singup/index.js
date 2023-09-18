import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userRole: "", // Initialize userRole as an empty string
  });

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/users";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (response.ok) {
        setMsg(res.message);
      } else {
        setError(res.message);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during signup.");
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            {/* Dropdown Select for User Role */}
            <select
              name="userRole"
              onChange={handleChange}
              value={data.userRole}
              required
              className={styles.input}
            >
              <option value="">Select User Role</option>
              <option value="Tuition Master">Tuition Master</option>
              <option value="Student">Student</option>
              <option value="Panel Member">Panel Member</option>
              <option value="Exam Creator">Exam Creator</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            {msg && <div className={styles.success_msg}>{msg}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
