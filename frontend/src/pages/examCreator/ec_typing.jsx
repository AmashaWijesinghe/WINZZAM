// pages/HomePage.js
import React from "react";
import Sidebar from "../../components/examCreator/ec_sidebar";
import "bootstrap/dist/css/bootstrap.min.css";


const typing = () => {
  return (
    <>
      <div className="row  bg-secondary bg-opacity-10">
        <div className="d-flex flex-column bg-light col-sm-2">
          <Sidebar></Sidebar>
        </div>
        <div className="main col-sm-10">
          <div className="header"></div>
          <div className="insight"></div>
        </div>
      </div>
    </>
  );
};

export default typing;
