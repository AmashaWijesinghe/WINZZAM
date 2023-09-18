import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Timer from './timme';
import QuestionContainer from './question';
import SubmitButton from './submit';
import { useParams } from "react-router-dom";

const ExamPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const TimerContainer = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const QuestionContainerStyled = styled.div`
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubmitButtonStyled = styled.div`
  text-align: center;

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
`;

const QuestionStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .status-icon {
    margin-right: 10px;
    font-size: 20px;
  }

  .correct {
    background-color: green;
    color: white;
  }

  .incorrect {
    background-color: red;
    color: white;
  }
`;

const ScoreContainer = styled.div`
  margin-top: 20px;
`;

const ScoreBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.correct {
    background-color: green;
    color: white;
  }

  &.incorrect {
    background-color: red;
    color: white;
  }
`;

const Exam_main = ({token}) => {
  const [sampleQuestions, setSampleQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [userScore, setUserScore] = useState(null);
  const [updatedAnswers, setUpdatedAnswers] = useState(null);
  const [timeLeft, setTimeLeft] = useState(7200);

  const { exam_id } = useParams();
  console.log(exam_id)

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: {
          token: `Bearer ${token}`,
          "Content-Type": "application/json",
      }
  };
    // Fetch sample questions from your backend
    fetch(`/api/exam/${exam_id}`, requestOptions) // Update the API endpoint accordingly
      .then((response) => response.json())
      .then((data) => {
        setSampleQuestions(data.production);
        console.log(data.status, typeof(data.updatedAnswers))
        if(data.status === 2){
            setUserScore(data.score);
            setUpdatedAnswers(data.updatedAnswers);
            setTimeLeft(data.time);
        }
      } )
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  const handleAnswerChange = (questionId, q_number, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [q_number]: [selectedOption, questionId],
    }));
  };

  const scrollToQuestion = (questionNumber) => {
    const element = document.getElementById(`question_${questionNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    // Prevent further submissions
    if (userScore !== null) {
      return;
    }


    // Send user answers to your backend
    fetch('/api/exam/submitanswers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answers: userAnswers , time : timeLeft ,exam_id : exam_id}),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserScore(data.score);
        setUpdatedAnswers(data.updatedAnswers);
      })
      .catch((error) => {
        console.error('Error submitting answers:', error);
      });
  };

  const renderQuestionStatus = (questionNumber, isCorrect) => {
    return (
      <ScoreBox
        key={questionNumber}
        className={isCorrect ? 'correct' : 'incorrect'}
        onClick={() => scrollToQuestion(questionNumber)}
      >
        {questionNumber}
      </ScoreBox>
    );
  };

  return (
    <ExamPageContainer>
      <TimerContainer >
        <Timer timeLeft = {timeLeft} setTimeLeft = {setTimeLeft} />
      </TimerContainer>
      {userScore !== null ? (
        <div>
          <p>User Score: {userScore}</p>
          <ScoreContainer>
            <p>Question Status:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {Object.entries(updatedAnswers).map(([questionNumber, [selectedOption, _, isCorrect]]) => (
                console.log(questionNumber)
              ))}
            </div>
          </ScoreContainer>
        </div>
      ) : null}
      {sampleQuestions.length > 0 ? (
        <QuestionContainerStyled>
          {sampleQuestions.map((question) => (
            <QuestionContainer
              key={question._id}
              number={question.question_number}
              imageSrc={question.questionURL}
              onAnswerChange={(selectedOption) =>
                handleAnswerChange(question._id, question.question_number, selectedOption)
              }
              id={`question_${question.question_number}`}
            />
          ))}
        </QuestionContainerStyled>
      ) : (
        <p>Loading questions...</p>
      )}
      <SubmitButtonStyled>
        {userScore === null ? <SubmitButton onClick={handleSubmit} /> : null}
      </SubmitButtonStyled>
    </ExamPageContainer>
  );
};

export default Exam_main;
