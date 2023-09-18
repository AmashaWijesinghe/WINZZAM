import Header from "../../components/staff/header";
import { useNavigate, useLocation } from "react-router-dom";
import "../../components/style.css";
import Navbar from "../../components/staff/Navbar";
import NewRegistrations from "../../components/staff/NewRegistrations";

import Topbar from "../../components/tutor/panel_members/TopbarPanelMembers";
import UserCard from "../../components/tutor/UserCard";
import ProfileHeaderMember from "../../components/tutor/panel_members/ProfileHeaderMember";
import ButtonTrayMembers from "../../components/tutor/panel_members/ButtonTrayMembers";
import RecentTasks from "../../components/tutor/panel_members/RecentTasks";
import MonthlyPerformance from "../../components/tutor/panel_members/MonthlyPerformance";
import MonthlyEarnings from "../../components/tutor/panel_members/MonthlyEarnings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../components/tutor/Sidebar";
import ProfileDetailsMember from "../../components/tutor/panel_members/ProfileDetailsMember";
import PerformanceCard from "../../components/tutor/PerformanceCard";
import { BiTimeFive } from "react-icons/bi";
import "../../components/tutor/panel_members/panel_members.css";

function ProfileApprovals() {
	const navigate = useNavigate();
	const { state } = useLocation();

	const userID = state.userID;

	const [searchInput, setSearchInput] = useState("");
	const [filteredResults, setFilteredResults] = useState([]);

	const [onArrival, setOnArrival] = useState(true);
	const [showDetails, setShowDetails] = useState(false);
	const [showProfileDetails, setShowProfileDetails] = useState(false);
	const [selectedMember, setSelectedMember] = useState(null);
	const [regList, setRegList] = useState([]);

	const handleClick = (newArrival) => () => {
		setSelectedMember(newArrival);
		setOnArrival(false);
		setShowDetails(true);
	};

	const handleClose = () => {
		setShowDetails(false);
		setShowProfileDetails(false);
		setOnArrival(true);
	};

	const handleClickProfile = (selectedMember) => () => {
		setOnArrival(false);
		setShowDetails(showProfileDetails);
		setShowProfileDetails(!showProfileDetails);
		setSelectedMember(selectedMember);
	};

	const handleClickProfileBack = () => {
		setShowDetails(showProfileDetails);
		setShowProfileDetails(!showProfileDetails);
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("/api/staff/newRegistrations");

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const json = await response.json();
				// console.log(json);

				// const filterResults = json.panelMembers.filter((panelMember) =>
				// 	Array.isArray(panelMember.assignedTo)
				// );

				setRegList(json.data);
			} catch (error) {
				console.error(
					"There was a problem with the fetch operation: ",
					error
				);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		setFilteredResults(
			regList.filter((newReg) => {
				console.log(newReg);
				return (
					newReg.firstName
						.toLowerCase()
						.includes(searchInput.toLowerCase()) ||
					newReg.lastName
						.toLowerCase()
						.includes(searchInput.toLowerCase())
				);
			})
		);
	}, [searchInput, regList]);

	console.log(userID);
	return (
		<>
			<div>
				<Header />
			</div>
			<div className="rowContainer">
				<div className="navBarContainer">
					<Navbar name="Profiles" icons="faBorderAll" />
				</div>
				{/* <div className="rowContainer">
				<div className="sidePanel">
					<h2>
						<center>New Registrations</center>
					</h2>
					<NewRegistrations />
					{/* <div className="cont">
						<h1>Profile</h1>
					</div> 
				</div> 
				<div className="colContainer">
					<div className="staffDetails">
						<h2></h2>
					</div>
				</div>
	</div> */}
				<div className="entryPara">
					<div className="main_conatiner_pm">
						<div className="left_side_pm">
							<div class="container d-flex justify-content-center">
								<div class="card">
									<div class="input-group mb-3">
										<input
											type="text"
											class="form-control"
											placeholder="Search here..."
											value={searchInput}
											onChange={(event) =>
												setSearchInput(
													event.target.value
												)
											}
										/>
										<div class="input-group-append">
											<button class="btn btn-primary search">
												<FontAwesomeIcon
													icon={faSearch}
												/>
											</button>
										</div>
									</div>
									<span class="text">
										{regList.length} New Registrations
									</span>
									<div className="cards_list_pm">
										{filteredResults &&
											filteredResults.map(
												(newProfile) => {
													return (
														<UserCard
															key={newProfile._id}
															userRole={
																newProfile.userRole
															}
															userName={
																newProfile
																	? newProfile.firstName +
																	  " " +
																	  newProfile.lastName
																	: ""
															}
															userImage={
																newProfile.profilePicture
															}
															handleClick={handleClick(
																newProfile
															)}
														/>
													);
												}
											)}
									</div>
								</div>
							</div>
						</div>
						<div className="right_side_pm">
							{onArrival && (
								<>
									<div class="card profile_card_top">
										<div class="card-body_top_member">
											<div>
												<h5 class="card-user-name-pm-x">
													<b>Profile Details</b>
												</h5>
											</div>
										</div>
									</div>
								</>
							)}

							{showDetails && selectedMember && (
								<>
									<ProfileHeaderMember
										userName={
											selectedMember.user.firstName +
											" " +
											selectedMember.user.lastName
										}
										userRole="Panel Member"
										userImage="https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg"
										subject={selectedMember.subject}
										registeredDate="12/01/2023"
										handleClickProfile={handleClickProfile(
											selectedMember
										)}
										handleClose={handleClose}
									/>
								</>
							)}

							{showProfileDetails && selectedMember && (
								<>
									<ProfileHeaderMember
										userName={
											selectedMember.user.firstName +
											" " +
											selectedMember.user.lastName
										}
										userRole="Panel Member"
										userImage="https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg"
										subject="Chemistry"
										registeredDate="12/01/2023"
										handleClickProfile={handleClickProfile}
										handleClose={handleClose}
									/>

									<div>
										<button
											class="btn btn-primary pm-b"
											onClick={handleClickProfileBack}
										>
											Back
										</button>
									</div>

									<ProfileDetailsMember />
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfileApprovals;
