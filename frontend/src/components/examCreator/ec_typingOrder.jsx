import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { useState, useEffect } from "react";
// import "./css/ec_oders.css";
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";



const Orderdetail = styled.div`
   margin-right: 5rem;
`;
const Orderdetai2 = styled.div`
    position: relative;
    right: -3rem;
`;

const Nmm = styled.div`
    margin-right: 5rem;
`;
const Reports = styled.div`
    position: relative;
    left: 32rem;
`;



const Ec_details = (
//     {
//     tuitionMaster,
//     examType,
//     month,
//     questions_count,
//     type,
//     ex_no,
//     startdate,
//     deadline,
//   }
  ) => {

    const [examInfo, setExamInfo] = useState([]);
useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // token: "Bearer " + token,
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
        const pathname = window.location.pathname; 
        const parts = pathname.split('/');
        const examId = parts[parts.length - 1]
        console.log(examId);
        // setExamInfo(data);
        const filteredArrays = data.filter((array) => {

            return array.some((item) => item.exam === examId);
          });
          
          console.log(filteredArrays);
          setExamInfo(filteredArrays);
       
      } catch (error) {
        console.error("Error fetching exam information:", error);
        // setError(error.message);
      }
    };

    fetchExamInfo();
  }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
  const mapTypeToName = (type) => {
    return type === 0 ? "MCQ" : type === 1 ? "Essay" : "N/A";
  };

    // const { id } = useParams();
    // console.log(id);
    //   const [tuitionMaster, setTuitionMaster] = useState(null);
    //   const [examType, setExamType] = useState("");
    //   const [month, setMonth] = useState("");
    //   const [questions_count, setCounts] = useState("");
    //   const [type, setType] = useState("");
    //   const [ex_no, setNo] = useState("");
    //   const [startdate, setStartdate] = useState("");
    //   const [deadline, setDeadline] = useState("");
      
      // Add more state variables for other details
    
  return (
    <>
      {examInfo.map((exam, index) => (
        <div className="d-flex px-1 py-3 align-items-start justify-content-center" key={index}>
          <Orderdetail className="d-grid m-3">
            <Nmm>
              <h3 className="text-info">Tution Master</h3>
              <h3 className="fw-bold">{exam[0].firstName} {exam[0].lastName}</h3>
            </Nmm>
            <div className="tp">
              <h3 className="text-info">Exam Type</h3>
              <h3 className="fw-bold">{mapTypeToName(exam[1].type)}</h3>
            </div>
          </Orderdetail>
          <Orderdetail className="2 d-grid m-3">
            <div className="mon">
              <h3 className="text-info">Month</h3>
              <h3 className="fw-bold">{exam[3].name}</h3>
            </div>
            <Nmm>
              <h3 className="text-info">Exam No</h3>
              <h3 className="fw-bold">{exam[1].number}</h3>
            </Nmm>
          </Orderdetail>
          <Orderdetail className="3 d-grid m-3">
            <div className="qq">
              <h3 className="text-info">No of questions</h3>
              <h3 className="fw-bold">{exam[2].count}</h3>
            </div>
          </Orderdetail>
          <Orderdetai2 className="mx-5 my-3 px-5">
            <div className="dates d-flex m-3 justify-content-between">
              <Nmm>
                <h3 className="text-info">Start Date</h3>
                <h3 className="fw-bold">{exam[2].startDate.split('T')[0]}</h3>
              </Nmm>
              <div className="tp">
                <h3 className="text-info">Deadline</h3>
                <h3 className="fw-bold">{exam[2].deadline.split('T')[0]}</h3>
              </div>
            </div>
            <Reports>
              <div className="btn-class align-items-end justify-content-end">
                <button type="button" className="btn btn-info text-light px-4 rounded-4 py-1">Report Problem</button>
              </div>
            </Reports>
          </Orderdetai2>
        </div>
      ))}
      
  </>
  );
};

export default Ec_details;