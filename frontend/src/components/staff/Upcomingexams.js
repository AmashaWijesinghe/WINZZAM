import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import profile from "../../assets/profile.png";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Cookies from "js-cookie";

const New_order = styled.div`
    width: 150%;
    margin-bottom: 20px; /* Add margin to space out the cards vertically */
    &:hover {
        box-shadow: none !important;
    }
`;
const Ee = styled.h2`
    font-weight: 500;
`;
const EcprofileImg = styled.img`
    width: 50px;
    height: 50px;
`;
const Btn_class = styled.div`
    padding-left: 9rem;
    padding-bottom: 1rem;
`;
const Bdyth = styled.td`
  height: 2.8rem;
  padding-right: 3rem;
  color: #444a6d;
  text-align: left;

  && a {
    background: linear-gradient(
      to right,
      rgba(0, 149, 217, 0.7),
      rgba(0, 190, 228, 0.5)
    );
  }
`;
const Headth = styled.th`
  && {
    color: #96a5b8;
  }
  font-weight: 400;

  &button:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);

    &&:a {
      color: #96a5b8;
    }
  }
`;

const Tble = styled.table`
  background-color: transparent;

  &:hover {
    box-shadow: none;
  }
`;
const Cards = styled.div`
  background: linear-gradient(45deg, #26baee, #5ddfff);
`;
const Progress = styled.div`
  width: 120px;
  max-height: 0.5rem;
`;
const Progressbar = styled.div`
  background-color: #33bdfe;
`;
const Ectable = styled.div`
  width: 100%;
`;
const Ec2_grid = styled.h3`
  text-align: center;
`;
const Insight_first = styled.div`
  margin-top: 7rem;
  /* width: 150%; */
`;
const Bdy = styled.tbody`
  /* display: grid; */
  display: table-row-group;
`;
const Cd_first = styled.div`
  justify-content: start;
  /* width:200px; */
  width:150%
`;
const Tb = styled.div`
  
  width:150%
`;


const progressValue = 75;

const Upcomingexams = () => {
  return (
    
    <Insight_first className="d-flex px-1 py-3 w-100">
      <Cd_first className="card d-grid ">
            <div className="main_view w-100">
            <New_order className="card d-flex m-4 px-1 shadow-lg border-light rounded-3">
            <div className="speccific_details d-flex flex-row">
            <div className="details d-flex w-50">
              <div className="ecprofile p-2 py-4">
                <EcprofileImg src={profile} alt="" className="rounded-3" />
              </div>
              <div className="info align-items-start justify-content-center py-4">
               
                <Ee>Janaka Abeywardhana</Ee>
                <h3 className="tuition_master text-info">Tuition Master</h3>
                
              </div>
            </div>
          
        <div className="subject mx-5 mt-3">
          <h2 className="fw-medium">Chemistry</h2>
          <h4 className="text-info">subject</h4>
        </div>
        <div className="reg_date mt-3">
        <h2 className="fw-medium">02/01/2023</h2>
        <h4 className="text-info">Registered Date</h4>
        </div>
            </div>
            <div class="dropdown mx-2 mb-2">
          <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown">
            Batch
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link 1</a></li>
            <li><a class="dropdown-item" href="#">Link 2</a></li>
            <li><a class="dropdown-item" href="#">Link 3</a></li>
          </ul>
        </div> 
          </New_order>
            </div>
            <Tb className=" d-flex px-2">
      <Ectable className="w-75 p-3 bg-light border-5 rounded-4 shadow-sm ">
        <h2 className="text-info fw-medium m-3 text-start ">Upcoming Exams</h2>
        <Tble className="order table table-hover">
          <thead className="head">
            <tr>
              <Headth>#</Headth>
              <Headth>Tuition Master</Headth>
              
              <Headth>Progress</Headth>
              <Headth>Due Date</Headth>
             
            </tr>
          </thead>
          
          <Bdy>
           

            <tr>
              <Bdyth>01</Bdyth>
              <Bdyth>Janaka Abeywardhana</Bdyth>
              
              <Bdyth>
                <div className="mt-2">
                  <Progressbar
                    className="progress-bar w-0"
                    role="progressbar"
                    // aria-valuenow={progressValue} // Set the value here
                    // aria-valuemin="0"
                    // aria-valuemax="100"
                  ></Progressbar>
                </div>
              </Bdyth>
              <Bdyth>23/09</Bdyth>
             
            </tr>
            <tr>
              <Bdyth>02</Bdyth>
              <Bdyth>Amith Pussella</Bdyth>
             
              <Bdyth>
                <Progress className="mt-2">
                  <Progressbar
                    className="w-0 "
                    role="progressbar"
                  ></Progressbar>
                </Progress>
              </Bdyth>
              <Bdyth>22/06</Bdyth>
              
            </tr>
            <tr>
              <Bdyth>03</Bdyth>
              <Bdyth>Nilantha Jyasekara</Bdyth>
             
              <Bdyth>
                <Progress className=" mt-2">
                  <Progressbar className="w-0" role="progressbar"></Progressbar>
                </Progress>
              </Bdyth>
              <Bdyth>23/09</Bdyth>
             
            </tr>
            <tr>
              <Bdyth>04</Bdyth>
              <Bdyth>Janaka Bandara</Bdyth>
             
              <Bdyth>
                <Progress className="mt-2">
                  <Progressbar className="w-0" role="progressbar"></Progressbar>
                </Progress>
              </Bdyth>
              <Bdyth>23/10</Bdyth>
              
            </tr>
            <tr>
              <Bdyth>05</Bdyth>
              <Bdyth>Milinda Sandaruwan</Bdyth>
            
              <Bdyth>
                <Progress className="mt-2">
                  <Progressbar className="w-0" role="progressbar"></Progressbar>
                </Progress>
              </Bdyth>
              <Bdyth>23/08</Bdyth>
             
            </tr>
          </Bdy>
        </Tble>
      </Ectable>
      <div className="cards d-grid">
        <Cards className="ongoing card align-items-center justify-content-center m-4 px-5 rounded-4 border-0 text-light">
          <h2 className="ec-grid text-light">115</h2>
          <Ec2_grid>Ongoing work</Ec2_grid>
        </Cards>
        <Cards className="completed card align-items-center justify-content-center m-4 px-5 rounded-4 border-0 text-light">
          <h2 className="ec-grid text-light  align-start">15</h2>
          <Ec2_grid>Completed work</Ec2_grid>
        </Cards>
      </div>
      </Tb>
      </Cd_first>
     
    </Insight_first>
  );
};



  

export default Upcomingexams
