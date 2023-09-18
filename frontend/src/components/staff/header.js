import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { BsBell } from 'react-icons/bs';
import profile from '../../assets/profile.png';
import './Staff_Header.css';



const Header = (props) => {
	const token = Cookies.get("token");
	const [items, setItems] = useState();
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
				"http://localhost:8800/api/staff/basics",
				options
			);

			const json = await response.json();
			setItems(json.data);
		}
		fetchData();
	}, []);

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
		// <div className="style-Header">
		// 	{/* <div className="cont">
		// 		<img className="logo" src={logo} alt="logo" />
		// 	</div> */}
		// 	<div className="headerName">
		// 		<h2>Hello, {items && items.firstName}</h2>
		// 	</div>
		// 	<div className="profileContainer">
		// 		<button type="button" className="">
		// 			<img
		// 				className="profileIcon"
		// 				src={items && items.profilePicture}
		// 			/>
		// 		</button>
		// 		<div className="staffRole">
		// 			<h5>{items && items.username}</h5>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Header;
