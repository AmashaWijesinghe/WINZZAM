import React, { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./css/ec_typing.css";
import styled from "styled-components";
import { io } from "socket.io-client";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { useNavigate, useLocation } from "react-router-dom";
import storage from "../../firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const Typing_area = styled.div`
  /* margin-right: 5rem; */
  min-height: 5in;

  > div:first-child {
    margin-left: 0.5rem;
    background-color: rgba(51, 189, 254, 0.2);
    border-radius: 0.4rem;
    margin-top: 1rem;
  }
  /* Apply styles to the second child element */
div:nth-child(2) {
  height: 90%;
}

  > div {
    border: none !important;
  }
`;

const Add_new = styled.div`
  position: relative;
  left: 2rem;
`;
const Submit_btn = styled.div`
  position: relative;
  left: 10rem;
`;
const Last_section = styled.div`
  
`
const Question_upload = styled.div`
  position: relative;
  left: 4rem;
`
const Answer_upload = styled.div`
  position: relative;
  left: 6rem;
`

const TextEditor = () => {

  const [question_number, setQuestionNumber] = useState("");
  const [questionURL, setquestionURL] = useState(null);
  const [explanationURL, setexplanationURL] = useState(null);
  const [answer, setAnswer] = useState("");
  const [lesson, setLesson] = useState("");

  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const [activeTab, setActiveTab] = useState("question");


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {};
    formData.question_number = question_number;
    formData.questionURL = questionURL;
    formData.explanationURL = explanationURL;
    formData.answer = answer;
    formData.lesson = lesson;
   



    const requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(
        "/api/exam_creator/question",
       
        requestOptions
      );
      

    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const handleQuestionUploads = async (event, setter, folder) => {
    if (event.target.files[0]) {
      const file = event.target.files[0];

      try {
        const storageRef = ref(storage, `winzzam/${folder}`);
        uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            setter(downloadURL);
            alert("File Uploaded Successfully");
          });
        });
      } catch (error) {
        console.error("Error uploading file:", error.message);
      }
    }

  
  };

  useEffect(() => {
    const s = io("http://localhost:4000");
    setSocket(s);

    return () => {
      // socket.disconnect()
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta) => {
      quill.updateContents(delta);
    };

    socket.on("receive-changes", handler);
    return () => {
      socket.off("receive-changes", handler);
    };
  }, [socket, quill]);
  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };

    quill.on("text-change", handler);
    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);
  // Create a ref using the useRef hook to store a reference to the wrapper div.
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    setQuill(q);
  }, []);

  // Use the useEffect hook to initialize and clean up the Quill instance.
  // useEffect(() => {
  //   // Create a new `div` element that will be used as the container for the Quill editor.
  //   const editor = document.createElement('div');

  //   // Append the editor div as a child to the wrapper div using the ref.
  //   wrapperRef.current.append(editor);

  //   // Initialize Quill by passing the editor div as the container and specifying the theme as 'snow'.
  //   new Quill(editor, { theme: 'snow' });

  //   // The `useEffect` cleanup function will run when the component is unmounted.
  //   // It clears the content of the wrapper div to remove the Quill editor.
  //   return () => {
  //     wrapperRef.current.innerHTML = '';
  //   };
  // }, []); // The empty dependency array ensures the effect runs only once after the initial render.

  // Render the wrapper div that will hold the Quill editor.
  return (
    <>
    
      {/* Create tabs for "Question" and "Explanation" */}
      <Nav variant="tabs" defaultActiveKey={activeTab}>
        <Nav.Item>
          <Nav.Link
            eventKey="question"
            onSelect={() => setActiveTab("question")}
          >
            Question
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="explanation"
            onSelect={() => setActiveTab("explanation")}
          >
            Explanation
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === "question" && (
        <Typing_area
          className="container_second shadow-lg bg-light m-2 px-2"
          ref={wrapperRef}
        ></Typing_area>
      )}

      {activeTab === "explanation" && (
        <Typing_area
          className="container_second shadow-lg bg-light m-2 px-2"
          ref={wrapperRef}
        >
          {/* Your Quill editor for the explanation goes here */}
        </Typing_area>
      )}
<form id="question_form" onSubmit={handleSubmit}>
  <div className="new d-flex flex-row">
  <input type="text" id="question-number" value={question_number} onChange={(e) => setQuestionNumber(e.target.value)} placeholder="Enter question number" />

  <input type="text" id="answer"  value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Enter answer number" />


  </div>
  <label>
            <select
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
             
            >
              <option value="">Lessoons</option>
              <option value="0">L-1</option>
              <option value="1">L-2</option>
            </select>
            </label>
      {/* <div className="d-flex justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" value={lesson} onChange={(e) => setLesson(e.target.value)} >
            Lessons
          </Dropdown.Toggle>

          <Dropdown.Menu> */}
            {/* Add your dropdown menu items here */}
            {/* <Dropdown.Item>Lesson 1</Dropdown.Item>
            <Dropdown.Item>Lesson 2</Dropdown.Item>
            <Dropdown.Item>Lesson 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div> */}
<Last_section className="d-flex flex-row">
      
      <Add_new>
        <div className="d-flex justify-content-start mt-3 btn-class align-items-end ">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>You can further edit the question.</Tooltip>}
          >
            <button
              type="button"
              className="btn btn-info text-light px-4 rounded-4 py-1"
            >
              Save
            </button>
          </OverlayTrigger>
        </div>
      </Add_new>
      <Question_upload>
        {/* <input type="text" placeholder="Question upload" /> */}
      <label>
            <div className="file-upload d-flex justify-content-start mt-3 btn-class align-items-end">
              <input
                type="file"
                onChange={(e) => handleQuestionUploads(e, setquestionURL, "question")}
              />
              <i className="fa fa-upload"></i>
              <div className="selected-file-name"></div>
            </div>
          </label>
        {/* <div className="d-flex justify-content-start mt-3 btn-class align-items-end ">
          <OverlayTrigger
            placement="right"
            // overlay={<Tooltip>You can further edit the question.</Tooltip>}
          >
            <button
              type="button"
              className="btn btn-info text-light px-4 rounded-4 py-1"
            >
              Question Upload
            </button>
          </OverlayTrigger>
        </div> */}
      </Question_upload>
      <Answer_upload>
        {/* <input type="text" placeholder="Answer Upload" /> */}
      <label>

            <div className="file-upload d-flex justify-content-start mt-3 btn-class align-items-end">
              <input
                type="file"
                onChange={(e) => handleQuestionUploads(e, setexplanationURL, "nic")}
              />
              <i className="fa fa-upload"></i>
              <div className="selected-file-name"></div>
            </div>
          </label>
        {/* <div className="d-flex justify-content-start mt-3 btn-class align-items-end ">
          <OverlayTrigger
            placement="right"
            // overlay={<Tooltip>You can further edit the question.</Tooltip>}
          >
            <button
              type="button"
              className="btn btn-info text-light px-4 rounded-4 py-1"
            >
              Answer Upload
            </button>
          </OverlayTrigger>
        </div> */}
      </Answer_upload>
      <Submit_btn>
        <div className="d-flex justify-content-start mt-3 btn-class align-items-end ">
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip>
                After click on submit button, you cannot make any modifications.
              </Tooltip>
            }
          >
            <button
              type="submit"
              className="btn btn-info text-light px-4 rounded-4 py-1"
            >
              Submit
            </button>
          </OverlayTrigger>
        </div>
      </Submit_btn>
      
      </Last_section>
      
      {/* <div className='container_second' ref={wrapperRef}></div> */}
      </form>
    </>
  );
};

export default TextEditor;
