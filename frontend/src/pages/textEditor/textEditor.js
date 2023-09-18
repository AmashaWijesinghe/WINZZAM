import { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
// import html2canvas from "html2canvas";
import "./textEditor.css";
import styled from "styled-components";
import storage from "../../firebase.js";
import { ref, uploadBytes, getDownloadURL , uploadBytesResumable} from "firebase/storage";
import htmlToImage, {toBlob} from 'html-to-image';
const RowContainer = styled.div``;

const SAVE_INTERVAL_MS = 2000;
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

export default function TextEditor(props) {
  const documentId = props.docID;
  const examID = useParams().id;
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const [questionNo, setQuestionNo] = useState(0);
  const [answer, setAnswer] = useState("");
  const [questionimage, setQuestionImage] = useState();
  const [dropdownValues, setDropdownValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const s = io("http://localhost:5000");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);


  useEffect(() => {
    if (socket == null || quill == null) return;

    socket.once("load-document", (document) => {
      // console.log("inside load-document");
      console.log(document.lesson);
      console.log(document);
      //socket is listening for the load-document event that is emitted by the server when the document is loaded.
      quill.setContents(document.queExplanation);
      setQuestionNo(document.questionNumber);
      setAnswer(document.answer);
      setSelectedValue(document.lesson);
      // const qNo = document.getElementById("qNo");
      // qNo.innerHTML(document.questionNumber);
      // const lesn = document.getElementById("lesson");
      // lesn.innerHTML(document.lesson);
      // const ans = document.getElementById("answer");
      // ans.innerHTML(document.answer);
      quill.enable();
    });

    socket.emit("get-document", documentId); //get the document from the given document id
  }, [socket, quill, documentId]);

  // useEffect(() => {
  // 	if (socket == null || quill == null) return;
  // 	const interval = setInterval(() => {
  // 		socket.emit("save-document", [
  // 			quill.getContents(),
  // 			"",
  // 			questionNo,
  // 			lesson,
  // 			answer,
  // 		]); //after every 2 seconds socket emits the save document event with the contents of the quill editor
  // 	}, SAVE_INTERVAL_MS);

  // 	return () => {
  // 		clearInterval(interval);
  // 	};
  // }, [socket, quill, questionNo, lesson, answer]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Replace this URL with the actual API endpoint you want to fetch from
    // const apiUrl = '/api/lessons';
    // Fetch data from the API
    const fetchSubjects = async () => {
      try {
        const apiUrl = `/api/exam_creator/subj_info/${examID}`;
        console.log(apiUrl); // Check the printed URL in the console

        const response = await fetch(
          `/api/exam_creator/subj_info/${examID}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exam information");
        }
        const data = await response.json();
        console.log(data);

        setDropdownValues(data);
      } catch (error) {
        console.error("Error fetching exam information:", error);
      }
    };

    fetchSubjects();
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    if (name === "qNo") {
      console.log("hello1");
      setQuestionNo(value);
    } else if (name === "answer") {
      console.log("hello2");
      setAnswer(value);
    }
  };

  const handleSave = async (e) => {
  
// Assuming you have the HTML content in editorContent
const editorContent = quill.container.firstChild; // Replace with your actual editor content

// Convert the HTML content to an image
toBlob(editorContent)
  .then(async (blob) => {
    // Now you have a PNG blob that you can upload
    const storageRef = ref(storage, `winzzam/production/${examID}/${questionNo}.png`);
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // Handle the upload progress and completion here if needed
    uploadTask.on('state_changed',
      (snapshot) => {
        // Upload progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle errors here
        console.error('Upload error:', error);
      },
      async() => {
        // Upload completed successfully
        console.log('Upload complete');
        console.log("Hello")
        const questionImage = await getDownloadURL(uploadTask.snapshot.ref);
        alert(questionImage);
        // Execute additional code after the upload is complete
        socket.emit("save-document", [
          quill.getContents(),
          "",
          questionNo,
          selectedValue,
          answer,
        ]);

        const explanationImage = "explanationURL"; // Replace with the actual URL

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            examID,
            questionNo,
            questionImage,
            explanationImage,
            answer,
            selectedValue,
            documentId,
          }),
        };

        const response = await fetch("/api/exam_creator/setQuestions", options);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.error("Failed to save questions.");
        }
      }
    );
  })
  .catch((error) => {
    // Handle the conversion error
    console.error('Conversion error:', error);
  });
}

      
    
  //   try {
  //     const editorContent = quill.container.firstChild;
  //     const dataUrl = await toPng(editorContent);
  //     setQuestionImage(dataUrl);
  
  //     const storageRef = ref(storage, `winzzam/production/${examID}/${questionNo}`);
  //     const uploadTask = uploadBytesResumable(storageRef, dataUrl);
  //     let questionImage;
  
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log(progress);
  //       },
  //       (error) => {
  //         console.error("Error uploading file:", error.message);
  //       },
  //       async () => {
  //         try {
  //           questionImage = await getDownloadURL(uploadTask.snapshot.ref);
  //           alert(questionImage);
  
  //         //   socket.emit("save-document", [
  //         //     quill.getContents(),
  //         //     "",
  //         //     questionNo,
  //         //     selectedValue,
  //         //     answer,
  //         //   ]);
  
  //         //   const explanationImage = "explanationURL"; // Replace with the actual URL
  //         //   // Replace with the actual URL
  
  //         //   const options = {
  //         //     method: "POST",
  //         //     headers: {
  //         //       "Content-Type": "application/json",
  //         //     },
  //         //     body: JSON.stringify({
  //         //       examID,
  //         //       questionNo,
  //         //       questionImage,
  //         //       explanationImage,
  //         //       answer,
  //         //       selectedValue,
  //         //       documentId,
  //         //     }),
  //         //   };
  
  //         //   const response = await fetch("/api/exam_creator/setQuestions", options);
  //         //   if (response.ok) {
  //         //     const data = await response.json();
  //         //     console.log(data);
  //         //   } else {
  //         //     console.error("Failed to save questions.");
  //         //   }
  
  //         //   // You may want to handle any further actions or redirects here.
  //         } catch (error) {
  //           console.error("An error occurred:", error);
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // };
  
  


  return (
    <div>
      <RowContainer className="rowContainer d-flex flex-row justify-content-between">
        <div className="q_section px-2">
          <label>Question Number: </label>
          <input
            type="number"
            name="qNo"
            id="qNo"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <select
            name="lesson"
            value={selectedValue}
            onChange={handleDropdownChange}
          >
            <option value="">Select a Lesson</option>
            {dropdownValues.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="a_section px-2">
          <label>Answer: </label>
          <input
            type="text"
            name="answer"
            id="answer"
            onChange={handleChange}
          ></input>
        </div>
      </RowContainer>
      <div className="editorCont" ref={wrapperRef}></div>
      <button
        type="button"
        className="btn btn-info text-light px-4 rounded-4 py-1 w-25 "
        onClick={handleSave} // Attach click handler to save the card
      >
        Save
      </button>
      {/* use the conditional statements to switch between the explanation and the question */}
    </div>
  );
            }
