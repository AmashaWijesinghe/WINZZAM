import React, { useState, useEffect } from "react";
import "./ProfCForm.css";
import storage from "../../../firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const PersonalDetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [nicCopy, setNicCopy] = useState(null);
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileDescription, setProfileDescription] = useState("");
  const [yearofexperience, setyearofexperience] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [subject, setSubject] = useState("");

  const [subjectOptions, setSubjectOptions] = useState([]);

  useEffect(() => {
    // Fetch subjects from the database
    fetch("/api/common/subject")
      .then((response) => response.json())
      .then((data) => {
        // Update subjectOptions state with the fetched subjects
        setSubjectOptions(data.subjects);
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });
  }, []); // Run only once when component mounts

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {};
    formData.firstname = firstName;
    formData.lastName = lastName;
    formData.gender = gender;
    formData.degree = degreeName;
    formData.subject = subject;
    formData.NIC_Path = nicCopy;
    formData.phoneNumber = phone;
    formData.profilePicture = profilePicture;
    formData.profileDescription = profileDescription;
    formData.years_of_experience = yearofexperience;

    // Initialize state to store subject options

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGEyZDljOGViOGY5YzNkNGIxNGZjNiIsInVzZXJSb2xlIjoic3R1ZGVudCIsImlhdCI6MTY5MjAyMDEyNSwiZXhwIjoxNjkzODM0NTI1fQ.QsoitXh4P18G_InIRNsD5t8Mu2KQPJv5icAF7KSSLFQ";

    const requestOptions = {
      method: "POST",
      headers: {
        token: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    console.log(formData);
    try {
      const response = await fetch(
        "/api/tuition_master/register",
        requestOptions
      );
      const data = await response.json();
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // 'file' comes from the Blob or File API

  // ... Firebase initialization and other code ...

  const handleFileChange = async (event, setter, folder) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];

      try {
        // Create a storage reference for the file
        const storageRef = ref(storage, `winzzam/${folder}`);
        uploadBytes(storageRef, file).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            setter(downloadURL);
          });
        });
      } catch (error) {
        console.error("Error uploading file:", error.message);
      }
    }

    // ... rest of the component ...
  };

  return (
    <form id="personal-details-form" onSubmit={handleSubmit}>
      <div className="profile-completion-container">
        <div className="profile-picture-upload" style={{ textAlign: "center" }}>
          {/* Display the uploaded profile picture if available */}
          {!profilePicture && (
            <label
              htmlFor="profile-picture-input"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-camera" style={{ fontSize: "48px" }}></i>
              <span>Click to Upload</span>
              <input
                id="profile-picture-input"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleFileChange(e, setProfilePicture, "profile_pic")
                }
                style={{ display: "none" }}
              />
            </label>
          )}
          {/* Display the uploaded profile picture if available */}
          {profilePicture && (
            <div
              className="profile-picture-circle"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <img
                src={profilePicture}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}
        </div>

      </div>

      <div className="personal-details-form-container">
        <div className="personal-details-form">
          <label>
            First Name:
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </label>
          <label>
            Phone Number:
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Upload your NIC copy:
            <div className="file-upload">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setNicCopy, "nic")}
              />
              <i className="fa fa-upload"></i>
              <div className="selected-file-name"></div>
            </div>
          </label>
          <label>
            Upload a Profile Picture:
            <div className="file-upload">
              <input
                type="file"
                onChange={(e) =>
                  handleFileChange(e, setProfilePicture, "profile_pic")
                }
              />
              <i className="fa fa-upload"></i>
            </div>
          </label>
          <label>
            Name of the degree:
            <input
              type="text"
              placeholder="Name of the Degree"
              value={degreeName}
              onChange={(e) => setDegreeName(e.target.value)}
            />
          </label>
          <label>
            Subject:
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              {subjectOptions.map((option) => (

                <option key={option.id} value={option.id}>
                  {option._id}
                </option>
              ))}
            </select>
          </label>
          <label>
            Years of experience:
            <input
              type="number"
              placeholder="Years of experience"
              value={yearofexperience}
              onChange={(e) => setyearofexperience(e.target.value)}
            />
          </label>
          <label className="label-with-textarea">
            Profile Description:
            <textarea
              placeholder="Profile Description"
              value={profileDescription}
              onChange={(e) => setProfileDescription(e.target.value)}
              rows={5} // You can adjust the number of rows as needed
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;
