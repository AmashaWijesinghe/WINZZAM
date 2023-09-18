import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { MdAlignVerticalBottom } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ec_sidebar.css";
// import styled from 'styled-components';
import UseNavLinkHandler from "../../hooks/examCreator/ec_useState";






const EcSidebar = () => {
  const { activeLink, handleNavLinkClick } = UseNavLinkHandler();

  return (
    <>
      <div
        className="ex_sidebar fs-5 font-family-poppins position-fixed"
        style={{ height: "100vh" }}
      >
        <div className=" px-5 m-2">
          <img src={logo} alt="" style={{ height: "100px", width: "100px" }} />
        </div>
        <div className="ecsidebar d-flex flex-column bg-light mx-4 fs-5">
          <NavLink
            to="/ExamCreator/dashboard"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/ExamCreator/dashboard" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/ExamCreator/dashboard")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <RxDashboard />
            </span>
            <h3
              className={`fw-medium mt-2 ${
                activeLink === "/ExamCreator/dashboard" ? "text-primary" : ""
              }`}
            >
              Dashboard
            </h3>
          </NavLink>

          <NavLink
            to="/ExamCreator/orders"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/ExamCreator/orders" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/ExamCreator/orders")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <MdAlignVerticalBottom />
            </span>
            <h3
              className={`fw-medium mt-2 ${
                activeLink === "/ExamCreator/orders" ? "text-primary" : ""
              }`}
            >
              Orders
            </h3>
          </NavLink>

          <NavLink
            to="/ExamCreator/notifications"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/ExamCreator/notifications" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/ExamCreator/notifications")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <BsCart3 />
            </span>
            <h3
              className={`fw-medium mt-2 ${
                activeLink === "/ExamCreator/notifications"
                  ? "text-primary"
                  : ""
              }`}
            >
              Notifications
            </h3>
          </NavLink>

          <NavLink
            to="/ExamCreator/payments"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/ExamCreator/payments" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/ExamCreator/payments")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <MdPayments />
            </span>
            <h3
              className={`fw-medium mt-2 ${
                activeLink === "/ExamCreator/payments" ? "text-primary" : ""
              }`}
            >
              Payments
            </h3>
          </NavLink>

          <NavLink
            to="/ExamCreator/settings"
            className={`d-flex p-2 rounded-3 mb-2  ${
              activeLink === "/ExamCreator/settings" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/ExamCreator/settings")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <ImStatsDots />
            </span>
            <h3
              className={`fw-medium mt-2 ${
                activeLink === "/ExamCreator/settings" ? "text-primary" : ""
              }`}
            >
              Settings
            </h3>
          </NavLink>

          <NavLink
            to="/ExamCreator/logout"
            className={`d-flex p-2 rounded-3 mb-2 ${
              activeLink === "/ExamCreator/logout" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/ExamCreator/logout")}
            style={{ textDecoration: "none", marginTop: "12rem" }}
          >
            <span className="icn pe-3">
              <LuLogOut />
            </span>
            <h3
              className={`fw-medium mt-2 ${
                activeLink === "/ExamCreator/logout" ? "text-primary" : ""
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

export default EcSidebar;