import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import videoBackground from "../Images/video_achievements2.mp4";
import Header from "../Components/Header.tsx";

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100vh;
  padding: 60px 5%;
  overflow: hidden;
  background-color: #000;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  object-fit: cover;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ff6b00;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  line-height: 1.6;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AchievementsContainer = styled.main`
  background-color: #000;
  padding: 80px 5%;
  color: #fff;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #ff6b00;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 470px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(255, 107, 0, 0.5);
  }
`;

const AchievementDetails = styled.div`
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #ff6b00;
  }

  p {
    font-size: 14px;
    color: #ccc;
  }
`;

const AchievementsPage = () => {
  return (
    <>
      <Header />
      <HeroSection>
        <Video autoPlay loop muted playsInline aria-label="Background Video">
          <source src={videoBackground} type="video/mp4" />
          Twoja przeglądarka nie obsługuje tagu wideo.
        </Video>
        <Overlay />
        <HeroContent>
          <HeroTitle>Najważniejsze sukcesy</HeroTitle>
          <HeroSubtitle>
            Przez lata zdobyłem tytuły na arenie krajowej i międzynarodowej.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <AchievementsContainer>
        <SectionTitle>Moje osiągnięcia</SectionTitle>
        <AchievementGrid>
          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AchievementDetails>
              <h3>Mistrz Świata WAKO (Full Contact)</h3>
              <p>2010</p>
            </AchievementDetails>
          </AchievementCard>

          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AchievementDetails>
              <h3>Mistrz Europy</h3>
              <p>2012</p>
            </AchievementDetails>
          </AchievementCard>

          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AchievementDetails>
              <h3>10x Mistrz Polski w Kickboxingu</h3>
            </AchievementDetails>
          </AchievementCard>

          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AchievementDetails>
              <h3>Reprezentant Polski</h3>
              <p>Na mistrzostwach świata i Europy</p>
            </AchievementDetails>
          </AchievementCard>

          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <AchievementDetails>
              <h3>Wicemistrz Europy</h3>
              <p>2015</p>
            </AchievementDetails>
          </AchievementCard>

          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <AchievementDetails>
              <h3>Laureat plebiscytu "Najlepszy sportowiec roku"</h3>
              <p>2018</p>
            </AchievementDetails>
          </AchievementCard>

         <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <AchievementDetails>
              <h3>Trener i sędzia międzynarodowy</h3>
              <p>Uprawnienia do prowadzenia zawodów międzynarodowych</p>
              <p>Certyfikat FIFA i WAKO</p>
            </AchievementDetails>
          </AchievementCard>

          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <AchievementDetails>
              <h3>Odznaczony przez Ministerstwo Sportu</h3>
              <p>Za zasługi dla polskiego sportu – 2020</p>
            </AchievementDetails>
          </AchievementCard>

          {/* New Card for Piotr Siegoczyński */}
          <AchievementCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <AchievementDetails>
              <h3>Piotr Siegoczyński – Osiągnięcie Specjalne</h3>
              <p>Nagroda za wybitne osiągnięcia w dziedzinie sportu i edukacji – 2023</p>
            </AchievementDetails>
          </AchievementCard>
        </AchievementGrid>
      </AchievementsContainer>
    </>
  );
};

export default AchievementsPage;
