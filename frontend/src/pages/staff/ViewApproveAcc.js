
import ClientBase from "../../components/staff/ClientBase";
import Upcomingexams from "../../components/staff/Upcomingexams";
import NewRegistrations from "../../components/staff/NewRegistrations";
import Revenue from "../../components/staff/Revenue";
import Updates from "../../components/staff/Updates";
import RegAccHeader from "../../components/staff/RegAccHeader";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Month from "../../components/staff/Month";
import Rolesidebar from "../../components/staff/Rolesidebar";
import styled from 'styled-components';

const InsightStaff = styled.div`
 margin-top: 5rem;

`;
const Staff_report_btn = styled.div`
 margin-top:9rem;

`;
const Sideview = styled.div`
 margin-top:6rem;

`;
const Widthchange = styled.div`
  /* max-width: 30px; */
  grid-template-columns: 20rem auto;

`;
const Last  = styled.div`
  width: 150%;
  height: 150%;

`;

const ViewApproveAcc = () => {
  return (
    <>
    <Widthchange className="row  bg-secondary bg-opacity-10 d-grid ">
      <Sideview className="d-flex flex-column w-100 ">
      <Rolesidebar></Rolesidebar>
      </Sideview>
      <div className="main col-sm-10 w-100" >
        <div className="fixed-top">
        {<RegAccHeader />}
        </div>
         <InsightStaff> 
         <Upcomingexams/>
         <div className="first_content d-flex flex-row">
            <Month></Month>
         {/* <cardContainer className="w-75 p-3 d-flex">
             <ClientBase role="Tuition Masters" />
            <ClientBase role="Students" />
            <ClientBase role="Panel Members" />
            <ClientBase role="Exam Creators" />
          </cardContainer>
         <Staff_report_btn className=" bg-info h-75 px-2 py-1 rounded-4 mx-2 justify-content-center">
            
            <NavLink
                to="/"
                className="border-0 text-light rounded-3 px-3 text-decoration-none py-1"
              >
                Report Problem
            </NavLink>
         </Staff_report_btn> */}
          </div>
          

          <Last className=" my-4 mx-1 border-0 d-flex gap-4">
          <Revenue />
          
          </Last>
        </InsightStaff>
      </div>
    </Widthchange>
  </>
  )
}

export default ViewApproveAcc