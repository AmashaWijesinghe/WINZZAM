import React from 'react';
import styled from 'styled-components';

const CustomRadio = styled.input`
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 50%;
  color: #000;
  background-color: #fff;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }

  &:checked {
    border: 2px solid #007bff;
    background-color: #007bff;
    color: #fff;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  margin-left:15px;
`;

const QuestionContainered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0px 0px 10px 0px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
`;

const QuestionContainer = ({ number, imageSrc, onAnswerChange }) => {
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    onAnswerChange(selectedOption);
  };

  return (
    <QuestionContainered>
      <img
        src={imageSrc}
        alt={`Question ${number}`}
        width="100%"
        height="auto"
        style={{ borderRadius: "10px" }}
      />

      <OptionContainer>
        {[1, 2, 3, 4, 5].map((optionNumber) => (
          <div key={optionNumber} className="option"  style={{  width: "50px" ,display:'grid',gridTemplateColumns: '1fr 2fr' , marginRight:'30px'  }} >
             {optionNumber}<CustomRadio
              type="radio"
              name={`question_${number}`}
              id={`option_${optionNumber}`}
              value={optionNumber}
              onChange={handleOptionChange}
            />
           
          </div>
        ))}
      </OptionContainer>
    </QuestionContainered>
  );
};

export default QuestionContainer;
