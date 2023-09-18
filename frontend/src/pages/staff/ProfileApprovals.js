import Header from "../../components/staff/header";
import { useNavigate, useLocation } from "react-router-dom";
import "../../components/style.css";
import Navbar from "../../components/staff/Navbar";
import LoadProfile from "../../components/staff/loadProfile";

function ProfileApprovals() {
	const navigate = useNavigate();
	const { state } = useLocation();
	// console.log(state);
	const userID = state.profileID;
	const userRole = state.role;

	return (
		<>
			<div>
				<Header />
			</div>
			<div className="rowContainer">
				<div className="navBarContainer">
					<Navbar name="Profiles" icons="faBorderAll" />
				</div>
				<div className="profile">
					<LoadProfile user={userID} role={userRole} />
				</div>
				
			</div>
		</>
	);
}

export default ProfileApprovals;
