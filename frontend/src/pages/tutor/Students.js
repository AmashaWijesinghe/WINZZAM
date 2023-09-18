import React, { useState } from 'react'
import Sidebar from '../../components/tutor/Sidebar'
import Topbar from '../../components/tutor/students/TopbarStudents'
import StudentDetails from '../../components/tutor/students/StudentDetails'
import StudentStat from '../../components/tutor/students/StudentStat'
import ViewStudent from '../../components/tutor/students/ViewStudent'
import ViewStudentStats from '../../components/tutor/students/ViewStudentStats'
import { Link } from 'react-router-dom'

const Students = () => {

    const [overallView, setOverallView] = useState(true);
    const [viewStudent, setViewStudent] = useState(false);
    const handleViewButtonClick = () => {
        setOverallView(false);
        setViewStudent(true);
    }
    const handleClose = () => {
        setOverallView(true);
        setViewStudent(false);
    }

    return (
        <>
            <div className="h-screen grid grid-cols-[0.8fr_4.2fr]">
                <div >
                    <Sidebar />
                </div>
                <div>
                    <Topbar />

                    <nav class="flex ml-0" aria-label="Breadcrumb">
                        <ol class="inline-flex ml-10px pl-0">
                            <li class="inline-flex items-center text-sm font-medium text-light-grey hover:text-dark-blue ">
                                <Link to="/TutorDashboard" className='text-light-grey hover:text-dark-blue'>Dashboard</Link>
                            </li>
                            <li class="inline-flex items-center text-sm font-medium text-light-grey" aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-3 h-3 text-light-grey mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span>Students</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className='mx-10px my-10px h-max'>
                        {overallView && (
                            <>
                                <StudentDetails
                                    handleViewButtonClick={handleViewButtonClick}
                                />
                                <StudentStat />
                            </>
                        )}

                        {viewStudent && (
                            <>
                                <ViewStudent
                                    handleViewButtonClick={handleViewButtonClick}
                                    handleClose={handleClose}
                                />
                                <ViewStudentStats />
                            </>
                        )}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Students