import React from 'react';
import styled from 'styled-components';

const StyledSubmitButton = styled.div`
  position: fixed;
  bottom: 20px; /* Adjust the bottom position as needed */
  right: 20px; /* Adjust the right position as needed */
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
    cursor: pointer;
  }

  & button {
    color: #fff;
    font-size: 16px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const SubmitButton = ({ onClick }) => {
  return (
    <StyledSubmitButton>
      <button onClick={onClick}>Submit</button>
    </StyledSubmitButton>
  );
};

export default SubmitButton;
