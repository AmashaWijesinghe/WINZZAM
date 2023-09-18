// import "../style.css";
// // import "bootstrap/dist/css/bootstrap.min.css";

// const ExamProgress = () => {
// 	return (
// 		<div>
// 			<div className="tableTitle">
// 				<h2>Exams</h2>
// 				{/* <h5>Month</h5>
// 				<h5>Status</h5> */}
// 			</div>
// 			<div>
// 				<table>
// 					<thead>
// 						<tr>
// 							<th>Tuition Master</th>
// 							<th>Month</th>
// 							<th>Exam</th>
// 							<th>Progress</th>
// 							<th>Due Date</th>
// 							<th>View</th>
// 						</tr>
// 					</thead>
// 					<tr>
// 						<td>Akila Premadasa</td>
// 						<td>January</td>
// 						<td>MCQ - 1</td>
// 						<td>4/5</td>
// 						<td>2023/04/26</td>
// 						<td>
// 							<button className="viewBtn">View</button>
// 						</td>
// 					</tr>
// 				</table>
// 			</div>
// 		</div>
// 	);
// };

// export default ExamProgress;

import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
// import "./css/ec_oders.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Cookies from "js-cookie";
import Examdetails from "./Examdetails";




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
  width: 90%;
`;
const Ec2_grid = styled.h3`
  text-align: center;
`;
const Insight_second = styled.div`
  margin-top: 1rem;
`;
const Bdy = styled.tbody`
  /* display: grid; */
  display: table-row-group;
`;
const ExamProgress = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <Insight_second className="d-flex px-1 py-3">
      <Ectable className="w-100 p-3 bg-light border-5 rounded-4 shadow-sm ">
        <h2 className="text-info fw-medium m-3 text-start ">Exams</h2>
		<div className="details_Month-Progress">

		</div>
        <Tble className="order table table-hover">
          <thead className="head">
            <tr>
              <Headth>#</Headth>
              <Headth>Tuition Master</Headth>
              <Headth>Month</Headth>
              <Headth>Exam</Headth>
              <Headth>Progress</Headth>
              <Headth>Due Date</Headth>
              <Headth>
                <NavLink className="border-0 bg-transparent custom-transition text-decoration-none">
                  View all{" "}
                </NavLink>
              </Headth>
            </tr>
          </thead>
          
          <Bdy>
           

            <tr>
              <Bdyth>01</Bdyth>
              <Bdyth>Janaka Abeywardhana</Bdyth>
              <Bdyth>March</Bdyth>
              <Bdyth>MCQ-1</Bdyth>
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
              <Bdyth>
              <button
                  className="border-0 text-light rounded-3 px-3 text-decoration-none py-1 bg-info"
                  onClick={openModal} // Open the modal when the button is clicked
                >
                  View
                </button>
              </Bdyth>
            </tr>
            <tr>
              <Bdyth>02</Bdyth>
              <Bdyth>Amith Pussella</Bdyth>
              <Bdyth>June</Bdyth>
              <Bdyth>Essay</Bdyth>
              <Bdyth>
                <Progress className="mt-2">
                  <Progressbar
                    className="w-0 "
                    role="progressbar"
                  ></Progressbar>
                </Progress>
              </Bdyth>
              <Bdyth>22/06</Bdyth>
              <Bdyth>
                <NavLink className="border-0 text-light rounded-3 px-3 text-decoration-none py-1">
                  View{" "}
                </NavLink>
              </Bdyth>
            </tr>
            <tr>
              <Bdyth>03</Bdyth>
              <Bdyth>Nilantha Jyasekara</Bdyth>
              <Bdyth>April</Bdyth>
              <Bdyth>MCQ-1</Bdyth>
              <Bdyth>
                <Progress className=" mt-2">
                  <Progressbar className="w-0" role="progressbar"></Progressbar>
                </Progress>
              </Bdyth>
              <Bdyth>23/09</Bdyth>
              <Bdyth>
                <NavLink className="border-0 text-light rounded-3 px-3 text-decoration-none py-1">
                  View{" "}
                </NavLink>
              </Bdyth>
            </tr>
            <tr>
              <Bdyth>04</Bdyth>
              <Bdyth>Janaka Bandara</Bdyth>
              <Bdyth>August</Bdyth>
              <Bdyth>MCQ-1</Bdyth>
              <Bdyth>
                <Progress className="mt-2">
                  <Progressbar className="w-0" role="progressbar"></Progressbar>
                </Progress>
              </Bdyth>
              <Bdyth>23/10</Bdyth>
              <Bdyth>
                <NavLink className="border-0 text-light rounded-3 px-3 text-decoration-none py-1">
                  View{" "}
                </NavLink>
              </Bdyth>
            </tr>
            <tr>
              <Bdyth>05</Bdyth>
              <Bdyth>Milinda Sandaruwan</Bdyth>
              <Bdyth>December</Bdyth>
              <Bdyth>Eassy</Bdyth>
              <Bdyth>
                <Progress className="mt-2">
                  <Progressbar className="w-0" role="progressbar"></Progressbar>
                </Progress>
              </Bdyth>
              <Bdyth>23/08</Bdyth>
              <Bdyth>
                <NavLink className="border-0 text-light rounded-3 px-3 text-decoration-none py-1">
                  View{" "}
                </NavLink>
              </Bdyth>
            </tr>
          </Bdy>
        </Tble>
      </Ectable>
      <Examdetails isOpen={isModalOpen} onClose={closeModal} />
    </Insight_second>
  );
};

export default ExamProgress;

