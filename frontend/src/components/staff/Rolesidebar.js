import React from "react";
import profile from "../../assets/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';

const Neww = styled.div`
 width: 100%;
`;
const Name = styled.h4`
  /* margin-top: 1.5rem;
  height: 100%; */
`;
const New_order = styled.div`
    width: 88%;
    margin-bottom: 20px; /* Add margin to space out the cards vertically */
    &:hover {
        box-shadow: none !important;
    }
`;

const EcprofileImg = styled.img`
    width: 50px;
    height: 50px;
`;
const Btn_class = styled.div`
    padding-left: 9rem;
    padding-bottom: 1rem;
`;
const Btn_class_button = styled.button`
    background: linear-gradient(to right, rgba(0,149,217,0.7), rgba(0,190,228,0.5));
`;
const Ee = styled.h2`
    font-weight: 500;
`;

const Rolesidebar = () => {
  return (
    <Neww className="new card border-0 mx-1 rounded-4 shadow-sm d-flex flex-column">
    <Name className="mx-4 text-muted fw-medium text-start pt-2 ">Search Bar</Name>
    <div className="d-flex mx-4 " role="search">
        <input className="border-2 rounded-3 w-75 bg-opacity-25 bg-info" type="text" placeholder="Search here"/>
            {/* <button className="btn btn-outline-success" type="submit">Search here</button> */}
    </div>

    <div className="d-flex flex-column  "> 
 


    <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-3">
      <div className="details d-flex w-100">
        <div className="ecprofile p-2 py-4">
          <EcprofileImg src={profile} alt="" className="rounded-3" />
        </div>
        <div className="info align-items-start justify-content-center py-4">
          <h3 className="tuition_master text-info">Tuition Master</h3>
          <Ee>Janaka Abeywardhana</Ee>
          
        </div>
      </div>
      <Btn_class className="align-items-end justify-content-end ">
        <btn_class_button type="button" className="btn btn-info text-light px-4 rounded-4 py-1 ">View</btn_class_button>
      </Btn_class>
    </New_order>

    <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-3">
      <div className="details d-flex w-100">
        <div className="ecprofile p-2 py-4">
          <EcprofileImg src={profile} alt="" className="rounded-3" />
        </div>
        <div className="info align-items-start justify-content-center py-4">
          <h3 className="tuition_master text-info">Tuition Master</h3>
          <Ee>Janaka Abeywardhana</Ee>
          
        </div>
      </div>
      <Btn_class className="align-items-end justify-content-end ">
        <btn_class_button type="button" className="btn btn-info text-light px-4 rounded-4 py-1 ">View</btn_class_button>
      </Btn_class>
    </New_order>

    <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-3">
      <div className="details d-flex w-100">
        <div className="ecprofile p-2 py-4">
          <EcprofileImg src={profile} alt="" className="rounded-3" />
        </div>
        <div className="info align-items-start justify-content-center py-4">
          <h3 className="tuition_master text-info">Tuition Master</h3>
          <Ee>Janaka Abeywardhana</Ee>
          
        </div>
      </div>
      <Btn_class className="align-items-end justify-content-end ">
        <btn_class_button type="button" className="btn btn-info text-light px-4 rounded-4 py-1 ">View</btn_class_button>
      </Btn_class>
    </New_order>

    <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-3">
      <div className="details d-flex w-100">
        <div className="ecprofile p-2 py-4">
          <EcprofileImg src={profile} alt="" className="rounded-3" />
        </div>
        <div className="info align-items-start justify-content-center py-4">
          <h3 className="tuition_master text-info">Tuition Master</h3>
          <Ee>Janaka Abeywardhana</Ee>
          
        </div>
      </div>
      <Btn_class className="align-items-end justify-content-end ">
        <btn_class_button type="button" className="btn btn-info text-light px-4 rounded-4 py-1 ">View</btn_class_button>
      </Btn_class>
    </New_order>

    <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-3">
      <div className="details d-flex w-100">
        <div className="ecprofile p-2 py-4">
          <EcprofileImg src={profile} alt="" className="rounded-3" />
        </div>
        <div className="info align-items-start justify-content-center py-4">
          <h3 className="tuition_master text-info">Tuition Master</h3>
          <Ee>Janaka Abeywardhana</Ee>
         
        </div>
      </div>
      <Btn_class className="align-items-end justify-content-end ">
        <btn_class_button type="button" className="btn btn-info text-light px-4 rounded-4 py-1 ">View</btn_class_button>
      </Btn_class>
    </New_order>


    

    
   

   
    </div>
  </Neww>
);
};

export default Rolesidebar;
