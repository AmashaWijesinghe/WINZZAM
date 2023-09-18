
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { MdAlignVerticalBottom } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";
import './Staff_Navbar.css';

import styled from 'styled-components';
import UseNavLinkHandler from "../../hooks/examCreator/ec_useState";


const Sh3 = styled.h3`
	font-size: 0.87rem;
`;

const Sp = styled.p`
	color: var(--color-dark-variant);
	font-size: 0.8rem;
`;

const Slogout = styled.div`
	margin-bottom: 12rem;
`;


const Navbar = () => {
  const { activeLink, handleNavLinkClick } = UseNavLinkHandler();

  return (
    <>
      <div
        className="staff_sidebar fs-5 font-family-poppins position-fixed"
        style={{ height: "100vh", width:"17vw" }}
      >
        <div className=" px-5 m-2">
          <img src={logo} alt="" style={{ height: "100px", width: "100px" }} />
        </div>
        <div className="staffsidebar d-flex flex-column bg-light mx-4 fs-5">
          <NavLink
            to="/Staff/dashboard"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/Staff/dashboard" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/Staff/dashboard")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <RxDashboard />
            </span>
            <Sh3
              className={`fw-medium mt-2 ${
                activeLink === "/Staff/dashboard" ? "text-primary" : ""
              }`}
            >
              Dashboard
            </Sh3>
          </NavLink>

          <NavLink
            to="/Staff/orders"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/Staff/orders" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/Staff/orders")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <MdAlignVerticalBottom />
            </span>
            <Sh3
              className={`fw-medium mt-2 ${
                activeLink === "/Staff/orders" ? "text-primary" : ""
              }`}
            >
              Profile Approvals
            </Sh3>
          </NavLink>

          <NavLink
            to="/Staff/notifications"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/Staff/notifications" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/Staff/notifications")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <BsCart3 />
            </span>
            <Sh3
              className={`fw-medium mt-2 ${
                activeLink === "/Staff/notifications"
                  ? "text-primary"
                  : ""
              }`}
            >
              Handle Payements
            </Sh3>
          </NavLink>

          <NavLink
            to="/Staff/payments"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/Staff/payments" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/Staff/payments")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <MdPayments />
            </span>
            <Sh3
              className={`fw-medium mt-2 ${
                activeLink === "/Staff/payments" ? "text-primary" : ""
              }`}
            >
             Exam Progress
            </Sh3>
          </NavLink>

          {/* <NavLink
            to="/Staff/settings"
            className={`d-flex p-2 rounded-3 mb-2  ${
              activeLink === "/Staff/settings" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/Staff/settings")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <ImStatsDots />
            </span>
            <h3
              className={`fw-medium mt-2 ${
                activeLink === "/Staff/settings" ? "text-primary" : ""
              }`}
            >
              Settings
            </h3>
          </NavLink> */}

          <NavLink
            to="/Staff/logout"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/Staff/logout" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/Staff/logout")}
            style={{ textDecoration: "none", marginTop: "12rem" }}
          >
            <span className="icn pe-3">
              <LuLogOut />
            </span>
            <Sh3
              className={`fw-medium mt-2 ${
                activeLink === "/Staff/logout" ? "text-primary" : ""
              }`}
            >
              Log out
            </Sh3>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;