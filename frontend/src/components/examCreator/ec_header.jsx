import React from 'react';
import "./css/ec_header.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { BsBell } from 'react-icons/bs';
import profile from "../../assets/profile.png";
import Cookies from "js-cookie";
const { useState, useEffect } = require("react");


const Ex_header = (props) => {

  const token = Cookies.get("token");
  console.log(token);
	const [items, setItems] = useState();
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: "Bearer " + token,
			},
		};
		// async function fetchData() {
		// 	const response = await fetch(
		// 		"api/exam_creator/header_info",
		// 		options
		// 	);

		// 	const json = await response.json();
		// 	setItems(json.data);
    //   console.log(items);
		// }

    async function fetchData() {
      try {
        const response = await fetch("/api/exam_creator/header_info", options);
        // console.log("Fetch URL:", "/api/exam_creator/header_info");
        console.log(response);
        if (!response.ok) {
          console.error("API request failed with status:", response.status)
          throw new Error("Network response was not ok");
        }
    
        const json = await response.json();
        setItems(json.data);
        console.log(json.data);
        // console.log(items.username);

        // console.log("items.username:", json.data.username);
        // console.log("items.userRole:", json.data.userRole);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
		fetchData();
    
	}, []);

  // useEffect(() => {
  //   // Log the values whenever 'items' updates
  //   if (items) {
  //     console.log("items.username:", items.username);
  //     console.log("items.userRole:", items.userRole);
  //   }
  // }, [items]);
  
  // Retrieve user data from localStorage
// const userJSON = localStorage.getItem("user");
// let username = "";
// let userRole = ""; // Initialize username variable

// if (userJSON) {
//   // Parse JSON string to object
//   const user = JSON.parse(userJSON);
//   username = user.username;
//   userRole = user.userRole;
//   console.log(user);

// } else {
//   // Handle the case where user data is not available
//   console.log("User data not found.");
// }


  return (
    <div className='custom-header bg-light d-flex align-items-center justify-content-between'>
    <div className="right">
        <h1 className='name fw-medium d-inline-flex px-5'>Hello, {items && items.username}</h1>
    </div>
    <div className="mx-auto pb-5">
      <h1 className='fw-bold text-info'>Dashboard</h1>
    </div>
    <div className="left d-flex px-3">
        <div className="notification px-1 d-flex align-items-center justify-content-center">
            <BsBell></BsBell>
        </div>
        <div className="ecprofile d-flex align-items-center justify-content-center flex-row">
          <div className="profile-photo px-1 m-2">
            <img src={profile} alt="" style={{ height: "50px", width: "50px" }} />
          </div>
          <div className="info d-flex align-items-center justify-content-center">
            <div className="name fw-medium">
                <small className='role'>{items && items.username}</small>
                <p className='text-info'>{items && items.userRole}</p>
                
            </div>
           
            

          </div>
        </div>
    </div>
</div>

  )
}

export default Ex_header