import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import profile from '../../assets/master.jpeg';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const ModalOverlay = styled.div`
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  background: rgb(119,136,153, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  max-height:80vh;
`;
const Content_exam = styled.div`
  
`;
const Head_viewdetails = styled.div`
  gap: 5rem;
`;
const Prop_viewdetails = styled.div`
  
`;

const Neww = styled.div`
 width: 94%;
`;
const Name = styled.h2`
  margin-top: 1.5rem
`;
const New_order = styled.div`
flex: "0 0 25%";
    min-width: 25%;

    &:hover {
    box-shadow: none !important;
  }
`;
const EcprofileImg = styled.img`
    width: 70px;
    height: 80px;
    
`;
const Btn_class = styled.div`
    padding-left: 11rem;
    padding-bottom: 1rem;
`;
const Btn_class_button = styled.button`
background: linear-gradient(to right, rgba(0,149,217,0.7), rgba(0,190,228,0.5));
`;
const Ee = styled.h3`
font-weight: 500;
text-align:left;
   
`;
const Dt_view = styled.div`
gap: 10rem;
    
`;

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

const Updates_view = styled.div`

   margin-left:1rem 
`;
const Examdetails = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <div className="exam_main">
        <div className="thme d-flex justify-content-between">
        <h2 className="text-info">Exam Details</h2>
            <button className="border-0 " onClick={onClose}><AiOutlineCloseCircle/></button>
        </div>
            
            <Content_exam className="d-flex m-2 flex-column">

                <Head_viewdetails className="d-flex flex-row">
                    <div className="ex_id m-2 ">
                        <h3>Exam ID - #32123 </h3>
                    </div>
                    <div className="mn m-2">
                        <h3>Month - January</h3>
                    </div>
                    <div className="tp m-2">
                        <h3>Type - MCQ</h3>
                    </div>
                    <div className="ex_no m-2">
                        <h3>Exam No - 1</h3>
                    </div>
                </Head_viewdetails>



                                <Prop_viewdetails className="d-flex flex-row ">
                                <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-3">
                        <div className="details d-flex w-100">
                        <div className="ecprofile p-2 py-4">
                            <EcprofileImg src={profile} alt="" className="rounded-3 border border-black p-1" />
                        </div>
                        <div className="info align-items-start justify-content-center py-4">
                            <h3 className="tuition_master text-info">Tuition Master</h3>
                            <Ee>Janaka Abeywardhana</Ee>
                            
                        </div>
                        </div>
                        <Btn_class className="align-items-end justify-content-end ">
                        <btn_class_button type="button" className="btn btn-info text-light px-4 rounded-4 py-1 ">Message</btn_class_button>
                        </Btn_class>
                    </New_order>
                    <New_order className="card d-flex   m-4 px-1 shadow-lg border-light rounded-3">
                        <div className="details d-flex w-100">
                        <div className="ecprofile p-2 py-4">
                            <EcprofileImg src={profile} alt="" className="rounded-3 border border-black p-1" />
                        </div>
                        <div className="info align-items-start justify-content-center py-4">
                            <h3 className="tuition_master text-info">Exam Creator</h3>
                            <Ee>Charitha Disannayake</Ee>
                            
                        </div>
                        </div>
                        <Btn_class className="align-items-end justify-content-end ">
                        <btn_class_button type="button" className="btn btn-info text-light px-4 rounded-4 py-1 ">Message</btn_class_button>
                        </Btn_class>
                    </New_order>
                    
                                </Prop_viewdetails>

                    
                    <Dt_view className="d-flex flex-row justify-content-start align-items-center m-2">
                            <div className="ex_id ">
                                <h3>Published Date</h3>
                                <h3>02/09/2023 </h3>
                            </div>
                            <div className="mn">
                                <h3>Production Deadline </h3>
                                <h3>10/10/2023</h3>
                            </div>
                            <div className="tp">
                                <h3>Sheduled Date</h3>
                                <h3>18/10/2023 </h3>
                            </div>
                              
                    </Dt_view>

                    <Updates_view className="card rounded-2 shadow-sm">
                        <h2 className="text-info fw-medium text-start mx-2">Updates</h2>
                        <div className="d-flex flex-column  h-75">
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
                    </Updates_view>

            </Content_exam>
        </div>
        
      </ModalContent>
    </ModalOverlay>
  );
};

export default Examdetails;
