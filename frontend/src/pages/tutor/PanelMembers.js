import Topbar from '../../components/tutor/panel_members/TopbarPanelMembers';
import UserCard from '../../components/tutor/common/UserCard';
import ProfileHeaderMember from '../../components/tutor/panel_members/ProfileHeaderMember';
import ButtonTrayMembers from '../../components/tutor/panel_members/ButtonTrayMembers';
import RecentTasks from '../../components/tutor/panel_members/RecentTasks';
import MonthlyPerformance from '../../components/tutor/panel_members/MonthlyPerformance';
import MonthlyEarnings from '../../components/tutor/panel_members/MonthlyEarnings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from '../../components/tutor/Sidebar';
import ProfileDetailsMember from '../../components/tutor/panel_members/ProfileDetailsMember';
import PerformanceCard from '../../components/tutor/common/PerformanceCard';
import { BiTimeFive } from "react-icons/bi";
import "../../components/tutor/panel_members/panel_members.css";

const PanelMembers = () => {
	const [searchInput, setSearchInput] = useState("");
	const [filteredResults, setFilteredResults] = useState([]);

	const [onArrival, setOnArrival] = useState(true);
	const [showDetails, setShowDetails] = useState(false);
	const [showProfileDetails, setShowProfileDetails] = useState(false);
	const [selectedMember, setSelectedMember] = useState(null);
	const [myPanel, setMyPanel] = useState([]);

	// const handleClick = (panelMember) => () => {
	// 	setSelectedMember(panelMember);
	// 	setOnArrival(false);
	// 	setShowDetails(true);
	// };

	const handleClose = () => {
		setShowDetails(false);
		setShowProfileDetails(false);
		setOnArrival(true);
	};

	const handleClick = (panelMember) => () => {
		setSelectedMember(panelMember);
		setOnArrival(false)
		setShowDetails(true)
		setShowProfileDetails(false)
	}

	const handleClickProfileBack = () => {
		setShowDetails(showProfileDetails);
		setShowProfileDetails(!showProfileDetails);
	};

	// useEffect(() => {
	//     const fetchPanelMembers = async () => {
	//         const response = await fetch('/api/panel_member')
	//         const json = await response.json()

	//         if (response.ok) {
	//             dispatch({ type: 'SET_PANEL_MEMBERS', payload: json.panelMembers })

	//             const filterResults = json.panelMembers.filter(panelMember =>
	//                 Array.isArray(panelMember.assignedTo) && panelMember.assignedTo.length > 0
	//             );

	//             setMyPanel(filterResults)
	//         }
	//     }
	//     fetchPanelMembers()
	// }, [dispatch])

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("/api/panel_member");

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const json = await response.json();

				const filterResults = json.panelMembers.filter((panelMember) =>
					Array.isArray(panelMember.assignedTo)
				);

				setMyPanel(filterResults);
			} catch (error) {
				console.error(
					"There was a problem with the fetch operation: ",
					error
				);
			}
		}
		fetchData();
	}, []);

	// const filterResults = json.panelMembers.filter(panelMember =>
	//     // console.log(panelMember.user.firstName)
	//     Array.isArray(panelMember.assignedTo) 
	// );

	setMyPanel(json.panelMembers)


	{/* {showDetails && selectedMember && (
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

									<ButtonTrayMembers /> */}

	// useEffect(() => {
	//     myPanel && setFilteredResults(
	//         myPanel.filter((panelMember) => {
	//             return panelMember.user.firstName.toLowerCase().includes(searchInput.toLowerCase()) || panelMember.user.lastName.toLowerCase().includes(searchInput.toLowerCase())
	//         })
	//     )
	// }, [searchInput, myPanel]);

	const holdMember = async (panelMember) => {
		const data = { member: panelMember._id, tuitionMaster: '64d805381bca6b471afc7a15' };
		const response = await fetch(
			"/api/panel_member/hold_member",
			{
				method: "PATCH",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);


		if (response.ok) {
			window.location.reload();
		}
	};

	return (


		<div className="container_main">
			<div class="container_sidebar">
				<Sidebar />
			</div>
			<div>
				<Topbar
					memberCount={myPanel.length}
				/>
				<nav class="nav_a" aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><Link to="/TutorDashboard">Dashboard</Link></li>
						<li class="breadcrumb-item active" aria-current="page">Panel Members</li>
					</ol>
				</nav>
				<div className="main_conatiner_pm">

					{/* {showProfileDetails && selectedMember && (
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
									/> */}

					<div class="container d-flex justify-content-center">
						<div class="card">
							<div class="input-group mb-3">
								<input type="text" class="form-control" placeholder='Search here...' value={searchInput} onChange={event => setSearchInput(event.target.value)} />
								<div class="input-group-append"><button class="btn btn-primary search"><FontAwesomeIcon icon={faSearch} /></button></div>
							</div>
							<span class="text">{myPanel.length} Panel Members</span>
							<div className='cards_list_pm'>
								{myPanel && myPanel.map((panelMember) => {

									return (
										<UserCard
											key={panelMember._id}
											userRole='Panel Member'
											userName={panelMember.user ? panelMember.user.firstName + ' ' + panelMember.user.lastName : ''}
											userImage='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg'
											handleClick={handleClick(panelMember)}
										/>
									);

								})}
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
										<h5 class="card-user-name-pm-x"><b>Recent Activities</b></h5>
										<p class="card-sub-title-pm">Paper Marking Process</p>
									</div>
								</div>
							</div>
							<div className="earnings_pm">

								<h5 class="card-user-name-pm">Exam Details</h5>
								<div className='exam_details_bar_pm'>

									<p className="sub-title-pm">Exam ID - #32153</p>
									<p className="sub-title-pm">Exam No - 1</p>
									<p className="sub-title-pm">Type - Essay</p>
									<p className="sub-title-pm">Total Papers - 100</p>
								</div>
								<div className='marking_progress_pm'>
									<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
										<div class="progress-bar w-75"></div>
									</div>
									<div className="progress_detail_bar_pm">
										<p className="text">Overall Marking Progress</p>
										<p className='sub-title-pm'>85%</p>
									</div>

								</div>
								<div className="dates_bar_pm">
									<div className='fl'>
										<h5 class="sub-title-pm">2023/08/12</h5>
										<p class="text">Exam Date</p>
									</div>
									<div className='fl'>
										<h5 class="sub-title-pm">2023/08/17 <span className="deadline_days_remaining_pm"><span className='BiTimeFive'><BiTimeFive /></span><span className='space_pm'></span>5 Days left</span></h5>
										<p class="text">Paper Marking Deadline</p>
									</div>
									<div className='fl'>
										<h5 class="sub-title-pm">2023/08/19</h5>
										<p class="text">Discussion Date</p>
									</div>
								</div>


							</div>
							<div className="earnings_pm">

								<h5 class="card-user-name-pm">Assigned Panel Members</h5>
								<div className='performance_cards_list'>

									{myPanel && myPanel.map((panelMember) => {

										return (
											<PerformanceCard
												key={panelMember._id}
												userName={panelMember.user ? panelMember.user.firstName + ' ' + panelMember.user.lastName : ''}
												userImage='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg'

											/>
										);

									})}


								</div>

							</div>


						</>
					)}


					{showDetails && selectedMember && (
						<>
							<ProfileHeaderMember
								userName={selectedMember.user.firstName + ' ' + selectedMember.user.lastName}
								userRole='Panel Member'
								userImage='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg'
								currentStatus={selectedMember.holdBy.length === 0 ? 'Active' : 'On Hold'}
								registeredDate={selectedMember.user.registeredDate}
								handleClickProfile={handleClickProfile(selectedMember)}
								handleClose={handleClose}
							/>

							<ButtonTrayMembers
								panelMember={selectedMember}
								holdFunction={holdMember(selectedMember)}
								removeFunction=''
								buttonStatus={selectedMember.holdBy.length === 0 ? 1 : 0}
								holdButtonText={selectedMember.holdBy.length === 0 ? 'Hold' : 'Unhold'}
							/>

							<RecentTasks
								task={selectedMember.work}
							/>

							<MonthlyPerformance />

							<MonthlyEarnings />
						</>
					)}

					{showProfileDetails && selectedMember && (
						<>
							<ProfileHeaderMember
								userName={selectedMember.user.firstName + ' ' + selectedMember.user.lastName}
								userRole='Panel Member'
								userImage='https://demo.awaikenthemes.com/html-preview/ulaunch/elements/images/team-square-4.jpg'
								currentStatus={selectedMember.holdBy.length === 0 ? 'Active' : 'On Hold'}
								registeredDate={selectedMember.user.registeredDate}
								handleClickProfile={handleClickProfile(selectedMember)}
								handleClose={handleClose}
							/>




							<ProfileDetailsMember
								member={selectedMember}
								handleClickProfileBack={handleClickProfileBack}
							/>
						</>
					)}



				</div>

			</div>
		</div>
      

    )
}

export default PanelMembers;
