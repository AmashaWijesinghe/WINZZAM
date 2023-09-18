
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import profile from "../../assets/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/ec_newOrders.css";
import styled from 'styled-components';


	
	// return (
	// 	<div
	// 		className={
	// 			location.pathname === "/Staff/ViewApprovals"
	// 				? "newArrivals"
	// 				: "cont"
	// 		}
	// 	>
	// 		{items &&
	// 			items.map((data) => (
	// 				<form
	// 					className="profileForm"
	// 					onSubmit={handleSubmit(data._id, data.userRole)}
	// 				>
	// 					<div className="profile">
	// 						<div key={data._id}>
	// 							<img
	// 								className="profileIcon"
	// 								src={data.profilePicture}
	// 								alt=""
	// 							></img>
	// 							<p>{data.userRole}</p>
	// 							<h3 className="profileName">
	// 								{data.firstName || 'DIHAN' + " " + data.lastName}
	// 							</h3>
	// 							<button type="submit" className="viewBtn">
	// 								View
	// 							</button>
	// 						</div>
	// 					</div>
	// 				</form>
	// 			))}
	// 	</div>
	// );


const Neww = styled.div`
 width: 94%;
`;
const Name = styled.h2`
  margin-top: 1.5rem
`;
const New_order = styled.div`
height:20vh;
flex: "0 0 25%";
    min-width: 25%;

    &:hover {
    box-shadow: none !important;
  }
`;
const EcprofileImg = styled.img`
    width: 50px;
    height: 50px;
`;
const Btn_class = styled.div`
    padding-left: 11rem;
    padding-bottom: 1rem;
`;
const Btn_class_button = styled.button`
background: linear-gradient(to right, rgba(0,149,217,0.7), rgba(0,190,228,0.5));
`;
const Ee = styled.h2`
font-weight: 500;
text-align:left;
   
`;
const Month = (props) => {

	const [items, setItems] = useState();
	const navigate = useNavigate();
	const [userRole, setUserRole] = useState();
	const location = useLocation();
	const token = Cookies.get("token");
	// console.log(location.pathname);

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: "Bearer " + token,
			},
		};
		async function fetchData() {
			const response = await fetch(
				"http://localhost:8800/api/staff/newRegistrations",
				options
			);

			const json = await response.json();
			setItems(json.data);
		}
		fetchData();
	}, []);

	// console.log(window.location.method);
	const handleSubmit = (userID, userRole) => (event) => {
		event.preventDefault();
		// console.log(userID);
		navigate("/Staff/ViewApprovals", {
			state: { profileID: userID, role: userRole },
		});
	};

  return (
    <Neww className="new card border-0 mx-2 rounded-4 shadow-sm d-flex flex-column">
      <Name className="mx-4 text-info fw-medium text-start ">Months</Name>
      <div className="d-flex flex-row overflow-x-auto w-100"> 
	  {items &&
				items.map((data) => (
					<form
						className="profileForm"
						onSubmit={handleSubmit(data._id, data.userRole)}
					>
      <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-4 bg-info">
        <div className="details d-flex w-100">
          <div className="ecprofile p-2 py-4">
            <EcprofileImg src={data.profilePicture} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
            <h3 className="tuition_master text-info">{data.userRole}</h3>
            <Ee>{data.firstName || 'DIHAN' + " " + data.lastName}</Ee>
            /* <h3 className="text-muted">Due Date - 12/02</h3> */
          </div>
        </div>
        <Btn_class className="align-items-end justify-content-end ">
          <btn_class_button type="button" className="btn btn-info text-light px-4 rounded-4 py-1 ">View</btn_class_button>
        </Btn_class>
      </New_order>
	  </form>
	  ))}


      <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-4 bg-info">
        <div className="details d-flex w-100">
          <div className="ecprofile p-2 py-4">
            <EcprofileImg src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center  py-4">
          <Ee className="text-light">March</Ee>


            <h3 className="tuition_master text-light">20</h3>
            <h2 className="text-light fw-medium">Active Month</h2>
           
            
          </div>
        </div>
       
      </New_order>

      <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-4 bg-info">
        <div className="details d-flex w-100">
          <div className="ecprofile p-2 py-4">
            <EcprofileImg src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
          <Ee className="text-light">January</Ee>

            <h3 className="tuition_master  text-light">100</h3>
           
            
          </div>
        </div>
       
      </New_order>

      <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-4 bg-info">
        <div className="details d-flex w-100">
          <div className="ecprofile p-2 py-4">
            <EcprofileImg src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
          <Ee className="text-light">Febuary</Ee>

            <h3 className="tuition_master text-light">150</h3>
           
            
          </div>
        </div>
      
      </New_order>

      <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-4 bg-info">
        <div className="details d-flex w-100">
          <div className="ecprofile p-2 py-4">
            <EcprofileImg src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
          <Ee className="text-light">April</Ee>
            <h3 className="tuition_master text-light">120</h3>
           
            
          </div>
        </div>
       
      </New_order>

      <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-4 bg-info">
        <div className="details d-flex w-100">
          <div className="ecprofile p-2 py-4">
            <EcprofileImg src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
            <h3 className="tuition_master text-light">160</h3>
           
           
          </div>
        </div>
        
      </New_order>


      

      
     

     
      </div>
    </Neww>
  );
};

export default Month;