import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import image from "../Images/iamge_Piotr.jpg";
import videoBackground from "../Images/video3.mp4";


const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 100px 5%;
  color: #fff;
  overflow: hidden;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
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

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px; 
  width: 100%;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  max-width: 500px;
  margin-right: 40px; 

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 18px;
    color: #ccc;
    margin-bottom: 40px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(90deg, #ff6b00 0%, #ffb100 100%);
  color: #000;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 107, 0, 0.6);
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    filter: grayscale(0.2);
    border-radius: 16px;
    box-shadow: 0 0 30px rgba(255, 107, 0, 0.3);
  }
`;

const Section = styled.section<{ dark?: boolean }>`
  background-color: ${({ dark }) => (dark ? "#0f0f0f" : "#fff")};
  color: ${({ dark }) => (dark ? "#fff" : "#000")};
  padding: 80px 5%;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroContainer>
        <Video autoPlay loop muted playsInline>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <Overlay />

        <ContentWrapper>
          <TextBlock>
            <h1>Trenuj z Mistrzem</h1>
            <p>
              Ponad 30 lat doświadczenia w kickboxingu — jako zawodnik, mistrz świata i trener.
              Rozpocznij swoją sportową przygodę już dziś.
            </p>
            <CTAButton>Umów się na trening</CTAButton>
          </TextBlock>

          <HeroImageWrapper>
            <img src={image} alt="Piotr Siegoczyński w akcji" />
          </HeroImageWrapper>
        </ContentWrapper>
      </HeroContainer>

      <Section>
        <SectionTitle>Moja droga do mistrzostwa</SectionTitle>
        <SectionContent>
          <p>
            Karierę sportową rozpocząłem w latach 80., a moje pierwsze sukcesy przyszły szybko – zarówno na arenie krajowej, jak i międzynarodowej.
            W ciągu lat zdobyłem tytuły mistrza Polski, Europy i świata w kickboxingu.
          </p>
          <p>
            Dziś, oprócz własnych treningów, dzielę się doświadczeniem z innymi – jako trener, mentor i ambasador zdrowego stylu życia.
            Uczę nie tylko techniki walki, ale także odwagi, pokory i konsekwencji.
          </p>
        </SectionContent>
      </Section>

      <Section dark>
        <SectionTitle>O mnie</SectionTitle>
        <SectionContent>
          <p>
            Nazywam się Piotr Siegoczyński. Kickboxing to nie tylko moja pasja — to całe moje życie.
            Od ponad 30 lat jestem związany ze sportami walki – jako zawodnik, reprezentant Polski, a obecnie także trener i mentor.
          </p>
          <p>
            Na swoim koncie mam m.in. tytuł Mistrza Świata WAKO, wielokrotne Mistrzostwo Polski oraz udział w międzynarodowych galach i turniejach.
            Dziś dzielę się zdobytym doświadczeniem z kolejnymi pokoleniami sportowców, ucząc ich, że w drodze do sukcesu nie ma dróg na skróty — są tylko trening, konsekwencja i wiara w siebie.
          </p>
        </SectionContent>
      </Section>
    </>
  );
};

export default AboutPage;
