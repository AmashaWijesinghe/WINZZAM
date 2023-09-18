
import './Dashboard.css'
import Navbar from '../../components/tutor/Navbar';
import Sidebar from '../../components/tutor/Sidebar';
import Topbar from '../../components/tutor/Topbar';
import Exams from '../../components/tutor/Exams'
import Earnings from '../../components/tutor/Earnings';
import Notifications from '../../components/tutor/Notifications'
import Search from '../../components/tutor/Search';
import ShowMonths from '../../components/tutor/ShowMonths';
import { Link } from 'react-router-dom'; 
import NewBatch from "../../components/tutor/NewBatch";
import NewMonth from "../../components/tutor/NewMonth";
import React, { useState } from "react";
import Cookies from 'js-cookie'; // Import the Cookies library
import MonthCard from '../../components/tutor/MonthCard';
import ExamComponent from "../tutor/ExamPage"
import "bootstrap/dist/css/bootstrap.min.css";

//done
/*  */
const Dashboard = () => {
	const [isBatchFormOpen, setIsBatchFormOpen] = useState(false);
  const [IsMonthClick , setIsMonthClick] =  useState(false);

  const [selectedMonth , setSelectedMonth] = useState(null);
  const [defaultBatch, setDefaultBatch] = useState(null);

	const toggleBatchForm = () => {
		setIsBatchFormOpen(!isBatchFormOpen);
	};

	const [isMonthFormOpen, setIsMonthFormOpen] = useState(false);
  const [selectedBatchId, setSelectedBatchId] = useState(null); // Initialize selectedBatchId
  const [monthsData, setMonthsData] = useState([]); // Initialize with an empty array

  console.log('se',selectedMonth); 

	const toggleMonthForm = () => {
/*     setSelectedBatchId(); // Set selectedBatchId when opening the form
 */		setIsMonthFormOpen(!isMonthFormOpen);
	};



  return (
    <>
      <div className="row  bg-secondary bg-opacity-10">
        <div className='d-flex flex-column bg-light col-sm-2'>
          <Sidebar/>
        </div>
        <div className="main col-sm-10">
          <div className="header">
            <Navbar onBatchFormToggle={toggleBatchForm}/>
          </div>
          {
    IsMonthClick ? (
    // Content to render when IsMonthClick is true
    <div className="insight">
      <ExamComponent selectedMonth={selectedMonth}/>
    </div>
  ) : (
    // Content to render when IsMonthClick is false
    <div className="insight">
            <div className="box">
              <Topbar
                monthName="July"
                registeredStudents="218"
                examsCount="04"
              />
              <Exams />
              <Earnings
                earnings='100,000'
              />
             
            </div>
            <div className="noti-box">
              <Notifications />
            </div>

            <div className="months">
              <Search onMonthFormToggle={toggleMonthForm} setSelectedBatchId={setSelectedBatchId}
              setMonthsData={setMonthsData}/>
               {selectedBatchId && <MonthCard  selectedBatchId={selectedBatchId} setIsMonthClick={setIsMonthClick} setSelectedMonth = {setSelectedMonth} /> }
            </div> 
          </div>
  )
}

        </div>

      </div>
	  {isBatchFormOpen && <NewBatch onClose={toggleBatchForm} />}
	  {isMonthFormOpen && (<NewMonth onClose={() => toggleMonthForm()} selectedBatchId={selectedBatchId} />
      )}
    </>

  )
}

export default Dashboard

