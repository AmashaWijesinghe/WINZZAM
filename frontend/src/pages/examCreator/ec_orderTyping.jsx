import React from "react";
// import TextEditor from "../../components/examCreator/ec_typingPage";
import "./ec_order.css";
import Ec_resourses from "../../components/examCreator/ec_resourses";
import Ec_details from "../../components/examCreator/ec_typingOrder";
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import TextEditor from "../textEditor/textEditor";

const Add_new = styled.div`
    position: relative;
    left: 34rem;
`;


const Ec_orderTyping = () => {

  const [showTextEditor, setShowTextEditor] = useState(false); 
  const [cards, setCards] = useState([]);
  const [id, setId] = useState(uuidV4());
  const [productionList,setProductionList] = useState([]); 
  const [imageUrl,setImageList] = useState();

  const handleAddNewClick = () => {
    setShowTextEditor(!showTextEditor);
  };

// const handleSaveClick = () => {
  
//   const newCard = {
//     // questionNumber: ex_no, 
//   };
//   setCards([...cards, newCard]);

//   // Reset the "showTextEditor" state to hide the text editor
//   setShowTextEditor(false);
// }

  const params = useParams();

  useEffect(() => {
    function fetchData() {
      try {
        fetch("/api/exam_creator/getResource?id="+params.id)
        .then((response) => response.json())
        .then((data) => {
  
          // console.log(data);
          setImageList((data.questionURL));
        });
      } catch (error) {
        console.error(
          "There was a problem with the fetch operation: ",
          error
        );
      }
    }
    fetchData();
  
    function fetchProductionDetails() {
      try {
        fetch("/api/exam_creator/getProductions?id="+params.id)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setProductionList(data);
          // console.log(productionList);
      });
      } catch (error) {
        console.error(
          "Can't fetch the data",
          error
        );
      }
    }
  
    fetchProductionDetails();
  }, []);

  return (
    <>
      <div className="row  bg-secondary bg-opacity-10">
        <div className="1aa d-flex justify-content-between">
     
          <Ec_details  
            ></Ec_details>
        </div>

        {/* <div className="d-flex flex-column bg-light col-sm-2">
          <div className="header"></div>
          {/* <Sidebar></Sidebar> */}
        {/* </div> */} 
        {/* <div className="main col-sm-10"> */}
          <div className="insight rounded-2 d-grid m-2 p-2">
            {/* <div className=" m-3 shadow-lg rounded-2 d-grid typing-card "> */}
              <div className=" m-2 card rounded-2 border-0">
                    <Ec_resourses imageUrl={imageUrl}></Ec_resourses>
              </div>
              <div className="mh-75 m-2 card rounded-2 border-0">
                <h2 className="text-info p-2">Toolbox</h2>
                <Add_new>
                  <div className="btn-class align-items-end justify-content-end my-2">
                    <button type="button" className="btn btn-info text-light px-4 rounded-4 py-1"  onClick={handleAddNewClick} >Add new</button>
                  </div>

                </Add_new>
               
                {showTextEditor && <TextEditor docID = {id}/>}
                   {/* Render cards */}
                   {cards.map((card, index) => (
              <div
                key={index}
                className="card m-2 border-0"
                onClick={() => {
                  // Handle click on the card (e.g., render the corresponding typing area)
                  console.log("Clicked on card:", card);
                }}
              >
                {/* Render card content */}
                <div className="card-body">
                  <h5 className="card-title">Question {card.questionNumber}</h5>
                  {/* Render other card information here */}
                </div>
              </div>
            ))}
              </div>
            {/* </div> */}
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Ec_orderTyping;