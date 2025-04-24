import React from "react";
import styled from "styled-components";
import Header from "../Components/Header.tsx";
import image1 from "../Images/image2_4-pica.png";
import image2 from "../Images/image2_3-pica.png";
import image3 from "../Images/image2_3.jpeg";
import image4 from "../Images/image2_4.jpeg";
import image5 from "../Images/image2_5.jpeg";
import image6 from "../Images/image2_6.jpeg";
import backgroundImage from "../Images/image3_2.jpeg";
import { motion } from "framer-motion";

const GalleryPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0e0e0e;
  color: #f0f0f0;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  padding: 8rem 2rem 2rem 2rem;
`;

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

const BackgroundImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
`;

const BackgroundTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const BackgroundSubtitle = styled.p`
  font-size: 24px;
  margin: 10px 0 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const HeaderText = styled.h1`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: #ffa500;
  margin-bottom: 0.5rem;
`;

const SubHaslo = styled.p`
  font-size: 22px;
  color: #ffffffcc;
  text-align: center;
  margin: 0 20px 40px;
  max-width: 700px;
  font-style: italic;
  border-left: 4px solid #ffa500;
  padding-left: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 800px;
  color: #cccccc;
  margin-bottom: 40px;
`;

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  border: 2px solid white;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease;

  ${ImageWrapper}:hover & {
    background-size: 120%;
  }
`;

const GalleryPage = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <>
      <Header />
      <Container>
        <BackgroundImageText>
          <BackgroundTitle>Moje sportowe chwile</BackgroundTitle>
          <BackgroundSubtitle>„Na ringu i poza nim – moje sportowe życie w kadrach”</BackgroundSubtitle>
        </BackgroundImageText>
      </Container>

      <GalleryPageWrapper>
        <Description>
          Zapraszam do obejrzenia zdjęć z zawodów, treningów oraz spotkań ze sportowcami, dziennikarzami i fanami.
        </Description>
        <ImageSection>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ position: "relative" }}
            >
                <ImageWrapper>
                  <Image style={{ backgroundImage: `url(${image})` }} />
                </ImageWrapper>
              </motion.div>
            ))}
        </ImageSection>
      </GalleryPageWrapper>
    </>
  );
};

export default GalleryPage;