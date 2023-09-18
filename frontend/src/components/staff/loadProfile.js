import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function LoadProfile(props) {

    const navigate = useNavigate();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [nicCopy, setNicCopy] = useState(null);
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileDescription, setProfileDescription] = useState("");
  const [yearofexperience, setyearofexperience] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [subject, setSubject] = useState("");
  const [id, setID] = useState("");

  const { state } = useLocation();
  const token = Cookies.get("token");

  const handleSubmit = async (e) => {
    const data = { userID: id };

    const response = await fetch("http://localhost:8800/api/staff/updateProfileCompletionStatus", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("error")
    }
    if (response.ok) {
      if (json.status === 400) {
        console.log(json.message);
      } else if (json.status === 200) {
        navigate("/Staff/Dashboard", { state: { data } });
      }
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: "Bearer " + token,
          },
        };
        const response = await fetch(
          "/api/staff/registrationInfo?userRole=" +
            state.role +
            "&userID=" +
            state.profileID,
          options
        );

        const json = await response.json();
        setLastName(json.user.lastName);
        setFirstName(json.user.firstName);
        setGender(json.gender === 0 ? "Male" : "Female");
        setNicCopy(json.NIC_Path);
        setPhone(json.user.phone);
        setProfilePicture(json.user.profilePicture);
        setProfileDescription(json.description);
        setyearofexperience(json.years_of_experience);
        setDegreeName(json.degree);
        setID(json.user._id);
        //setSubject(json.subjects.Name);
      
        console.log(id);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const profilePictureUrl = profilePicture; // Replace with actual URL
  const profileData = [
    { label: "First Name", value: firstName },
    { label: "Last Name", value: lastName },
    { label: "Gender", value: gender },
    { label: "NIC Copy", value: nicCopy },
    { label: "Phone", value: phone },
    { label: "Profile Description", value: profileDescription },
    { label: "Years of Experience", value: yearofexperience },
    { label: "Degree", value: degreeName },
    { label: "Subject", value: "physics" },
  ];

  const profilePictureStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "20px auto",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const profileDataContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const profileDataItemStyle = {
    flex: "1 1 calc(50% - 20px)",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    background: "#f5f5f5",
    margin: "10px",
  };

  const approveButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <img src={profilePictureUrl} alt="Profile" style={profilePictureStyle} />
      <div style={profileDataContainerStyle}>
        {profileData.map((item, index) => (
          <div key={index} style={profileDataItemStyle}>
            <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
              {item.label}
            </div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} style={approveButtonStyle}>Approve Member</button>
    </div>
  );
}

export default LoadProfile;
