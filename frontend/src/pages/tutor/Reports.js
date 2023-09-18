import React from 'react'
import Sidebar from '../../components/tutor/Sidebar'  
import Topbar from '../../components/tutor/reports/TopbarReports'

const Reports = () => {
  return (
    <>
            <div className="container_main">
                <div class="container_sidebar">
                    <Sidebar />
                </div>
                <div>
                    <Topbar/>
                </div>
            </div>
        </>
  )
}

export default Reports