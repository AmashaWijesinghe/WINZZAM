import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsPhoneFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import UseNavLinkHandler from "../../hooks/useState";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
	const location = useLocation();
	const { activeLink, handleNavLinkClick } = UseNavLinkHandler();

	const activePathsPM = ["/panel_members", "/add_panel_members"];
	const activePathsDB = ["/TutorDashboard", "/view_active_month"];

	return (
		<>
			<div
				className="ex_sidebar fs-5 font-family-poppins"
				style={{ height: "100vh" }}
			>
				<div className=" px-5 m-2">
					<img
						src={logo}
						alt=""
						style={{ height: "100px", width: "100px" }}
					/>
				</div>
				<div className="sidebar d-flex flex-column mx-4 fs-5">
					<NavLink
						// to="/TutorDashboard"
						to="/dashboard"
						className={`d-flex p-2 rounded-3 mb-2 ${
							activePathsDB.some(
								(path) => path === location.pathname
							)
								? "active"
								: ""
						}`}
						// onClick={() => handleNavLinkClick("/")}
						style={{ textDecoration: "none" }}
					>
						<span className="icn pe-3">
							<RxDashboard />
						</span>
						<h3 className={`fw-medium mt-2`}>Dashboard</h3>
					</NavLink>

					<NavLink
						// to="/panel_members"
						to="/panel_memeber"
						className={`d-flex p-2 rounded-3 mb-2 ${
							activePathsPM.some(
								(path) => path === location.pathname
							)
								? "active"
								: ""
						}`}
						style={{ textDecoration: "none" }}
					>
						<span className="icn pe-3">
							<BsFillPersonCheckFill />
						</span>
						<h3 className={`fw-medium mt-2 `}>Paper marking</h3>
					</NavLink>

					<NavLink
						// to="/students"
						to="/discussion"
						className={`d-flex p-2 rounded-3 mb-2 ${
							activeLink === "/students" ? "active" : ""
						}`}
						onClick={() =>
							handleNavLinkClick("/ExamCreator/notifications")
						}
						style={{ textDecoration: "none" }}
					>
						<span className="icn pe-3">
							<BsPeopleFill />
						</span>
						<h3
							className={`fw-medium mt-2 ${
								activeLink === "/ExamCreator/notifications"
									? "text-primary"
									: ""
							}`}
						>
							Discussion
						</h3>
					</NavLink>

					<NavLink
						// to="/tickets"
						to="/notifications"
						className={`d-flex p-2 rounded-3 mb-2 ${
							activeLink === "/ExamCreator/payments"
								? "active"
								: ""
						}`}
						onClick={() =>
							handleNavLinkClick("/ExamCreator/payments")
						}
						style={{ textDecoration: "none" }}
					>
						<span className="icn pe-3">
							<BsPhoneFill />
						</span>
						<h3
							className={`fw-medium mt-2 ${
								activeLink === "/ExamCreator/payments"
									? "text-primary"
									: ""
							}`}
						>
							Notifications
						</h3>
					</NavLink>

					<NavLink
						// to="/stats"
						to="/myprofile"
						className={`d-flex p-2 rounded-3 mb-2  ${
							activeLink === "/ExamCreator/settings"
								? "active"
								: ""
						}`}
						onClick={() =>
							handleNavLinkClick("/ExamCreator/settings")
						}
						style={{ textDecoration: "none" }}
					>
						<span className="icn pe-3">
							<ImStatsDots />
						</span>
						<h3
							className={`fw-medium mt-2 ${
								activeLink === "/ExamCreator/settings"
									? "text-primary"
									: ""
							}`}
						>
							Profile
						</h3>
					</NavLink>

					<NavLink
						to="/settings"
						className={`d-flex p-2 rounded-3 mb-2  ${
							activeLink === "/ExamCreator/settings"
								? "active"
								: ""
						}`}
						onClick={() =>
							handleNavLinkClick("/ExamCreator/settings")
						}
						style={{ textDecoration: "none" }}
					>
						<span className="icn pe-3">
							<BsFillGearFill />
						</span>
						<h3
							className={`fw-medium mt-2 ${
								activeLink === "/ExamCreator/settings"
									? "text-primary"
									: ""
							}`}
						>
							Settings
						</h3>
					</NavLink>

					<NavLink
						to="/Tutor/logout"
						className={`d-flex p-2 rounded-3 mb-2 ${
							activeLink === "/ExamCreator/logout" ? "active" : ""
						}`}
						onClick={() =>
							handleNavLinkClick("/ExamCreator/logout")
						}
						style={{ textDecoration: "none", marginTop: "4rem" }}
					>
						<span className="icn pe-3">
							<LuLogOut />
						</span>
						<h3
							className={`fw-medium mt-2 ${
								activeLink === "/ExamCreator/logout"
									? "text-primary"
									: ""
							}`}
						>
							Log out
						</h3>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
