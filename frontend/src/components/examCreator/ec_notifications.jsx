import React from "react";
// import './css/ec_salary.css';
import styled from 'styled-components';

const Card_viewContainer = styled.div`
  .card-view ::-webkit-scrollbar{
    width: 4px;
}
.card-view ::-webkit-scrollbar-thumb {
    background-color: #77c6ea;
    border-radius:8px ;
    -webkit-border-radius:8px ;
    -moz-border-radius:8px ;
    -ms-border-radius:8px ;
    -o-border-radius:8px ;
}
&:hover {
    box-shadow: none !important;
  }
`;
const Aa = styled.h2`
    text-align: start;
    font-weight: 500;
`;
const Btn_info = styled.button`
    padding-right: 2rem;
    padding-left: 2rem;
`;

const ec_notifications = () => {
  return (
    <Card_viewContainer className="card card-view p-3 card border-0 rounded-4 w-50 shadow-lg">
      <h2 className="text-info fw-medium">Recent Notifications</h2>
      <div className="d-flex flex-column overflow-y-auto h-75">
        <div className="new_order card d-flex flex-row  m-2  border-light rounded-4 p-2 bg-opacity-10 bg-info-subtle">
          <div className="info align-items-center justify-content-center py-1 px-2 w-75">
            <Aa>New work</Aa>
            <h3 className="text-muted">2 days ago</h3>
          </div>

          <div className="btn-class align-items-end justify-content-end mt-3 ">
            <Btn_info type="button" className="btn btn-info text-light rounded-4  py-1 ">
              View
            </Btn_info>
          </div>
        </div>

        <div className="new_order card d-flex flex-row  m-2 border-light rounded-4 p-2 bg-opacity-10 bg-info-subtle">
          <div className="info align-items-center justify-content-center py-1 w-75 px-2">
            <Aa>New work</Aa>
            <h3 className="text-muted">2 days ago</h3>
          </div>

          <div className="btn-class align-items-end justify-content-end mt-3 ">
            <Btn_info type="button" className="btn btn-info text-light rounded-4  py-1 ">
              View
            </Btn_info>
          </div>
        </div>
      </div>
    </Card_viewContainer>
  );
};

export default ec_notifications;