import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }

  @media (max-width: 470px) {
    padding: 30px 5px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 470px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 25px;
  }

  @media (max-width: 470px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  color: white;
  background-color: #ff6432;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 25px;
  }

  @media (max-width: 470px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const HistorySection = () => {
  return (
    <Section>
      <Title>Poznaj moją historię</Title>
      <Description>Umów się na trening</Description>
      <Button>O mnie ➝</Button>
    </Section>
  );
};

export default HistorySection;