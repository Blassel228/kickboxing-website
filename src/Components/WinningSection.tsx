import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaChalkboardTeacher, FaClock, FaFlag } from 'react-icons/fa';

const WinningSection = styled.section`
  background-color: #ff5722; 
  padding: 50px 0;
  text-align: center;
`;

const WinningTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 600;
  color: #222;
  margin-bottom: 50px;

  @media (max-width: 768px) { 
    font-size: 36px; 
  }

  @media (max-width: 470px) { 
    font-size: 28px;
  }
`;

const WinningGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start; 
  gap: 30px;
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    gap: 20px; 
  }

  @media (max-width: 470px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

const WinningItem = styled.div`
  text-align: center;
  width: 200px;

  @media (max-width: 470px) {
    width: 100%; 
    max-width: 280px; 
  }
`;

const WinningIcon = styled.div`
  font-size: 64px; 
  color: #222;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 48px; 
  }

  @media (max-width: 470px) {
    font-size: 40px; 
  }
`;

const WinningLine = styled.hr`
  width: 50%;
  border: none;
  border-top: 2px solid #222;
  margin: 10px auto;
`;

const WinningDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #222;
  line-height: 1.5;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 13px;  
  }

  @media (max-width: 470px) {
    font-size: 12px;
  }
`;

const Winnings = () => {
  return (
    <WinningSection>
      <WinningTitle>wygrana</WinningTitle>
      <WinningGrid>
        <WinningItem>
          <WinningIcon>
            <FaTrophy />
          </WinningIcon>
          <WinningLine />
          <WinningDescription>Mistrz świata</WinningDescription>
        </WinningItem>

        <WinningItem>
          <WinningIcon>
            <FaChalkboardTeacher />
          </WinningIcon>
          <WinningLine />
          <WinningDescription>Mentor i trener</WinningDescription>
        </WinningItem>

        <WinningItem>
          <WinningIcon>
            <FaClock />
          </WinningIcon>
          <WinningLine />
          <WinningDescription>Ponad 30 lat w kickboxingu</WinningDescription>
        </WinningItem>

        <WinningItem>
          <WinningIcon>
            <FaFlag />
          </WinningIcon>
          <WinningLine />
          <WinningDescription>
            Pierwszy Polak, który zdobył tytuł Mistrza Świata w kickboxingu
          </WinningDescription>
        </WinningItem>
      </WinningGrid>
    </WinningSection>
  );
};

export default Winnings;
