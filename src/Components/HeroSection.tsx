import backgroundImage from '../Images/photo.jpg';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  position: relative;
  padding-top: 10rem; 
  width: 100%; 
  min-height: 100vh; 
  background: url(${backgroundImage}) center/cover no-repeat; 
  background-color: black;
  color: white;
  font-family: 'Helvetica Neue', sans-serif;

  @media (max-width: 1070px) {
    padding-top: 8rem; 
    min-height: 80vh; 
    
    background-position: top left;
  }

  @media (max-width: 470px) {
    padding-top: 5rem; 
    min-height: 50vh; 
    background-size: cover; 
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 30%;
  text-align: center;
  z-index: 5;

  @media (max-width: 768px) {
    top: 20%;
  }

  @media (max-width: 470px) {
    top: 15%; 
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  letter-spacing: 5px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 36px; 
  }

  @media (max-width: 470px) {
    font-size: 28px; 
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  margin-top: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 470px) {
    font-size: 16px; 
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 470px) {
    flex-direction: column; 
    align-items: center; 
    gap: 10px; 
  }
`;

export const ButtonPrimary = styled.button`
  background: black;
  color: white;
  padding: 18px 80px; 
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: transform 0.3s ease;
  min-width: 250px; 
  max-width: 400px; 
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 15px 60px; 
    font-size: 14px;
    min-width: 200px; 
    max-width: 350px; 
  }

  @media (max-width: 470px) {
    padding: 12px 40px; 
    font-size: 12px;
    min-width: 150px; 
    max-width: 300px; 
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background: #ff6432;
`;

const HeroSection = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>Piotr Siegoczyński</Title>
          <Subtitle>Mistrz nie rodzi się na ringu – mistrz rodzi się na treningu.</Subtitle>
          <ButtonGroup>
            <ButtonPrimary>Book Now</ButtonPrimary>
            <ButtonSecondary>Membership</ButtonSecondary>
          </ButtonGroup>
        </Content>
      </Container>
    </>
  );
};

export default HeroSection;