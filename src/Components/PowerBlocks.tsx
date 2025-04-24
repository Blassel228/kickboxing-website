import React from 'react';
import styled from 'styled-components';


export const PowerBlocksContainer = styled.div`
  position: relative;
  top: 40%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px; 
  z-index: 5;
`;

export const PowerBlock = styled.div`
  background: linear-gradient(145deg, #1e1e1e, #2a2a2a);
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;
  width: 250px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const PowerBlockTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #ff6432;
  margin-bottom: 10px;
`;

export const PowerBlockDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #ffffff;
  line-height: 1.5;
`;

const PowerBlocks = () => {
  return (
    <>
      <PowerBlocksContainer>
        <PowerBlock>
          <PowerBlockTitle>Mistrz świata</PowerBlockTitle>
          <PowerBlockDescription>
            Uznanie na arenie międzynarodowej.
          </PowerBlockDescription>
        </PowerBlock>

        <PowerBlock>
          <PowerBlockTitle>Mentor i trener</PowerBlockTitle>
          <PowerBlockDescription>
            Wiedza i doświadczenie przekazywane dalej.
          </PowerBlockDescription>
        </PowerBlock>

        <PowerBlock>
          <PowerBlockTitle>Ponad 30 lat w kickboxingu</PowerBlockTitle>
          <PowerBlockDescription>
            Dedykacja i pasja do sportu walki.
          </PowerBlockDescription>
        </PowerBlock>
      </PowerBlocksContainer>
    </>
  );
};

export default PowerBlocks;