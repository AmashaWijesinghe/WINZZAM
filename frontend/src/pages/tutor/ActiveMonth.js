import Topbar from "../../components/tutor/active_month/TopbarActiveMonth";
import Exams from "../../components/tutor/active_month/Exams";
import Students from "../../components/tutor/active_month/Students";
import Overview from "../../components/tutor/active_month/Overview";
import { Link } from "react-router-dom";
import Sidebar from "../../components/tutor/Sidebar";
import "../../components/tutor/active_month/active_month.css";
import { useState } from "react";


const ActiveMonth = () => {

    const [viewExam, setViewExam] = useState(false);
    const [viewLoading, setViewLoading] = useState(true);  

    return (
        <div className="container_main">
            <div class="container_sidebar">
                <Sidebar />
            </div>
            <div>
                <div className="active_month">
                    <Topbar
                        monthName="July"
                        registeredStudents="218"
                        examsCount="04"
                    />
                    <nav class="nav_a" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/TutorDashboard">Dashboard</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Active Month</li>
                        </ol>
                    </nav>
                    <Exams
                        setViewExam={setViewExam}
                        setViewLoading={setViewLoading} 
                    />
                    <div class="bottom_container_am">
                        <Students
                            studentsCount="218"
                            viewExam={viewExam}
                            viewLoading={viewLoading}
                        />
                        <Overview
                            viewExam={viewExam}
                            viewLoading={viewLoading}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ActiveMonth;

