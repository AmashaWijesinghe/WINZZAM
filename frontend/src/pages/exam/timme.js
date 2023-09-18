import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(0, 123, 255, 0.8); /* Clearer background with alpha transparency */
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  font-size: 18px;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: fixed; /* Stick to the screen */
  top: 20px; /* Adjust the top position as needed */
  right: 20px; /* Adjust the right position as needed */
`;

const Timer = ({timeLeft,setTimeLeft}) => {
 // 2 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <TimerContainer>
      {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </TimerContainer>
  );
};

export default Timer;
