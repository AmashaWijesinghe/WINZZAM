import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./css/ec_oders.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Cookies from "js-cookie";

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
const Insight_first = styled.div`
  margin-top: 7rem;
`;
const Bdy = styled.tbody`
  /* display: grid; */
  display: table-row-group;
`;
const Ec_table = () => {
  const token = Cookies.get("token");
  console.log(token);
  const [examInfo, setExamInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: "Bearer " + token,
      },
    };
    const fetchExamInfo = async () => {
      try {
        const response = await fetch("/api/exam_creator/exam_info", options);
        
        if (!response.ok) {
          throw new Error("Failed to fetch exam information");
        }
        const data = await response.json();
        console.log(data);
        setExamInfo(data);
       
      } catch (error) {
        console.error("Error fetching exam information:", error);
        setError(error.message);
      }
    };

    fetchExamInfo();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const mapTypeToName = (type) => {
    return type === 0 ? "MCQ" : type === 1 ? "Essay" : "N/A";
  };
  const progressValue = 75;
  return (
    <Insight_first className="d-flex px-1 py-3">
      <Ectable className="w-75 p-3 bg-light border-5 rounded-4 shadow-sm ">
        <h2 className="text-info fw-medium m-3 ">Recent Orders</h2>
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
          {examInfo.map((exam, index) => (
  <tr key={index}>
    <Bdyth>{index + 1}</Bdyth>
    <Bdyth>{exam[0].firstName + ' ' + exam[0].lastName}</Bdyth>
    <Bdyth>{exam[3].name}</Bdyth> {/* Access month */}
    <Bdyth>{mapTypeToName(exam[1].type)}</Bdyth>
    <Bdyth>
      <Progress className="progress mt-2">
        <Progressbar
          className="progress-bar w-0"
          role="progressbar"
        ></Progressbar>
      </Progress>
    </Bdyth>
      {exam[2] && exam[2].deadline && (
    <Bdyth>{exam[2].deadline.split('T')[0]}</Bdyth>
      )}

    {/* <Bdyth>{exam[2].deadline.split('T')[0]}</Bdyth> */}
    <Bdyth>
      <NavLink
        to={`/ExamCreator/orderTyping/${exam[4].exam}`}
        className="border-0 text-light rounded-3 px-3 text-decoration-none py-1"
      >
        View
      </NavLink>
    </Bdyth>
  </tr>
))}


            {/* <tr>
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
            </tr> */}
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
    </Insight_first>
  );
};

export default Ec_table;
