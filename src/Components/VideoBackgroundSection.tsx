import React from 'react';
import styled from 'styled-components';
import video1 from "../Images/video1.mp4";
import video2 from "../Images/video2.mp4";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const VideoBackground = styled.div`
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ArrowWrapper = styled.div`
  border: 6px solid orange;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content; 
  height: fit-content; 
  margin: 0 auto; 

  @media (max-width: 470px) {
    padding: 3px;
    border-width: 4px;
  }
`;

const Column = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; 

  @media (max-width: 768px) {
    padding-top: 56.25%; 
  }

  @media (max-width: 470px) {
    padding-top: 75%;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: white;

  @media (max-width: 470px) {
    padding: 10px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 470px) {
    font-size: 24px; 
    margin-bottom: 10px;
  }
`;

const VideoBackgroundSection = () => {
  return (
    <VideoBackground>
      <Column>
        <Video autoPlay loop muted playsInline>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <Overlay />
        <Content>
          <SectionTitle>BEGINNERS</SectionTitle>
          <ArrowWrapper>
            <FaArrowLeft style={{ color: 'orange', fontSize: '24px' }} />
          </ArrowWrapper>
        </Content>
      </Column>

      <Column>
        <Video autoPlay loop muted playsInline>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <Overlay />
        <Content>
          <SectionTitle>PROFESSIONALS</SectionTitle>
          <ArrowWrapper>
            <FaArrowRight style={{ color: 'orange', fontSize: '24px' }} />
          </ArrowWrapper>
        </Content>
      </Column>
    </VideoBackground>
  );
};

export default VideoBackgroundSection;