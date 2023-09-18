import Navbar from "../../components/staff/Navbar";
import ClientBase from "../../components/staff/ClientBase";
import ExamProgress from "../../components/staff/ExamProgress";
import NewRegistrations from "../../components/staff/NewRegistrations";
import Revenue from "../../components/staff/Revenue";
import Updates from "../../components/staff/Updates";
import Header from "../../components/staff/header";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { NavLink } from "react-router-dom";
// import "../../components/style.css";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';

const InsightStaff = styled.div`
 margin-top: 5rem;

`;

const cardContainer = styled.div`
 height:200px;

`;
const Staff_report_btn = styled.div`
 margin-top:9rem

`;

function Dashboard() {
	const location = useLocation();
	return (
		<>
		<div className="row  bg-secondary bg-opacity-10 mw-100">
		  <div className="d-flex flex-column bg-light col-sm-2">
		  <Navbar />
		  </div>
		  <div className="main col-sm-10" >
			<div className="fixed-top">
			<Header />
			</div>
			 <InsightStaff> 
			 <div className="first_content d-flex flex-row">
			 <cardContainer className="w-75 p-3 d-flex">
		 		<ClientBase role="Tuition Masters" />
				<ClientBase role="Students" />
				<ClientBase role="Panel Members" />
				<ClientBase role="Exam Creators" />
		 	 </cardContainer>
			 <Staff_report_btn className=" bg-info h-75 px-2 py-1 rounded-4 mx-2 justify-content-center">
				
				<NavLink
                    to="/"
                    className="border-0 text-light rounded-3 px-3 text-decoration-none py-1"
                  >
                    Report Problem
                </NavLink>
			 </Staff_report_btn>
			  </div>
			  <ExamProgress/>
			  <NewRegistrations></NewRegistrations> 
			  <last className=" my-4 mx-1 border-0 d-flex gap-4">
			  <Revenue />
			  <Updates />
			  </last>
			</InsightStaff>
		  </div>
		</div>
	  </>
		// <div>
		// 	<div>
		// 		<Header />
		// 	</div>
		// 	<div className="body">
		// 		<div className="rowContainer">
		// 			<div className="navBarContainer">
		// 				<Navbar name="Dashboard" icons="faBorderAll" />
		// 				{/* <Navbar /> */}
		// 			</div>
		// 			<div className="colContainer">
		// 				<div className="cardContainer">
		// 					<ClientBase role="Tuition Masters" />
		// 					<ClientBase role="Students" />
		// 					<ClientBase role="Panel Members" />
		// 					<ClientBase role="Exam Creators" />
		// 				</div>
		// 				<div className="background">
		// 					<ExamProgress />
		// 				</div>
		// 				<div className="background">
		// 					<h3 className="tableTitle"> New Registrations</h3>
		// 					<div className="rowContainer">
		// 						<NewRegistrations />
		// 					</div>
		// 				</div>
		// 				<div className="rowContWithSpace">
		// 					<Revenue />
		// 					<Updates />
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default Dashboard;
