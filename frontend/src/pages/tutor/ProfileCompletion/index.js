import React, { useState, useEffect } from "react";
import storage from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from "./styles.module.css";
import { FaUpload } from 'react-icons/fa';


const ProfCompletion = ({ token }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [nicCopy, setNicCopy] = useState(null);
    const [phone, setPhone] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [profileDescription, setProfileDescription] = useState("");
    const [degreeName, setDegreeName] = useState("");
    const [subject, setSubject] = useState({});

    const [subjectOptions, setSubjectOptions] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        // Fetch subjects from the database
        fetch("/api/common/subject")
            .then((response) => response.json())
            .then((data) => {
                // Update subjectOptions state with the fetched subjects
                setSubjectOptions(data.subjects);
                console.log(data.subjects)
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
                "/api/tuition_master/register",
                requestOptions
            );
            const data = await response.json();
            window.location = "/";
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const handleInputChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        setSelectedFile(file); // Store the selected file in state
        handleFileChange(e, setNicCopy, 'nic');
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
                        alert("File Uploaded Successfully");
                    });
                });
            } catch (error) {
                console.error("Error uploading file:", error.message);
            }
        }

        // ... rest of the component ...
    };

    return (
        <div className={styles.register_container} >
            <form className={styles.register_form} id="personal-details-form" onSubmit={handleSubmit}>
                <div className={styles.profilepicture}>
                    <div className={styles.profilepicturecontainer}>
                        {!profilePicture && (
                            <label
                                htmlFor="profile-picture-input"
                                className={styles.uploadlabel}
                            >
                                <i className="fas fa-camera"></i>
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
                        {profilePicture && (
                            <div className={styles.profileimagecontainer}>
                                <img
                                    src={profilePicture}
                                    alt="Profile"
                                    className={styles.profileimage}
                                />
                            </div>
                        )}
                    </div>



                </div>
                <div  className={styles.fileUploadcontainer}>
                <div className={styles.fileUpload}>
                    <label className={styles.uploadIcon} htmlFor="fileInput">
                        <FaUpload />
                        Upload NIC Copy
                    </label>
                    <input
                        id="fileInput"
                        className={styles.inputupload}
                        type="file"
                        accept="application/pdf" // Accept only PDF files
                        onChange={handleInputChange}
                    />
                </div>
                {selectedFile && (
                        <div className={styles.selectedFileName}>
                            File Uploaded {/* Display the selected file name */}
                        </div>
                    )}
                </div>
                

                <div className={styles.profiledetails}>
                    <div className={styles.leftgroup}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <select
                            className={styles.input}
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                        </select>

                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Name of the Degree"
                            value={degreeName}
                            onChange={(e) => setDegreeName(e.target.value)}
                        />
                    </div>

                    <div className={styles.rightgroup}>

                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />


                        <select
                            className={styles.input}
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                        >
                            <option value="">Select Subject</option>
                            {subjectOptions.map((option) => (
                                <option key={option._id} value={option._id}>
                                    {option.Name}
                                </option>
                            ))}
                        </select>

                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <textarea
                    className={styles.inputtext}
                    placeholder="Profile Description"
                    value={profileDescription}
                    onChange={(e) => setProfileDescription(e.target.value)}
                    rows={5}
                >

                </textarea>
                <div className={styles.buttoncontainer}>
                    <button className={styles.submitbutton} type="submit">Submit</button>
                </div>

            </form>
        </div>

    );
};

export default ProfCompletion;

