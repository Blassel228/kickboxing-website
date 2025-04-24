import React from "react";
import styled from "styled-components";
import image1 from "../Images/image2_4-pica.png";
import image2 from "../Images/image2_3.jpeg";
import image3 from "../Images/image2_5.jpeg";
import image4 from "../Images/image2_4.jpeg";
import Header from "../Components/Header.tsx";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Segoe UI', sans-serif;
  background-color: #1a1a1a;
  color: #fff;
`;

const Section = styled.section`
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    background-color: #333;
    transform: scale(1.02);
  }

  @media (max-width: 1025px) {
    max-height: 100rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 150px;
  }
  @media (max-width: 540px) {
    height: 250px;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const Address = styled.a`
  background-color: #ff6b00;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65c00;
  }
`;

const WelcomeSection = styled.section`
  display: flex;
  height: 30rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const WelcomeImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
  }
`;

const WelcomeText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 9rem;
  background: linear-gradient(to right, #ff6b00, #da6e2b);
  color: #000;
  text-align: justify;
  overflow-y: auto;
  flex-grow: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 1.5rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`;

const MediaPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <WelcomeSection>
          <WelcomeImage src={image2} alt="Piotr Siegoczyński" />
          <WelcomeText>
            <h2>Piotr Siegoczyński w mediach</h2>
            <p>
              Odkryj, co mówi świat o mojej karierze! Oto wybrane artykuły, wywiady i relacje z mediów,
              które opisują moje największe osiągnięcia, decydujące momenty oraz pasję do sportu.
              Poznajcie historię mojej drogi od początków do obecności na arenach międzynarodowych,
              a także spojrzenie dziennikarzy na moje sukcesy i postawę zawodnika.
              Sprawdźcie, co fani, eksperci i media mają do powiedzenia o moim stylu gry,
              motywacji i wpływie na świat sportu.
            </p>
          </WelcomeText>
        </WelcomeSection>
        <Container>
          <Section>
            <Card>
              <CardImage src={image1} alt="Article 1" />
              <CardContent>
                <h3>Wywiad w prasie</h3>
                <p>
                  Przeczytaj specjalny artykuł o mojej karierze i osiągnięciach w branży sportowej.
                </p>
                <Address href="https://www.polskieradio.pl/10/3961/artykul/1836137,jakie-czasy-czekaja-polski-kickboxing">
                  PRZEJDŹ DO ARTYKUŁU
                </Address>
              </CardContent>
            </Card>

            <Card>
              <CardImage src={image3} alt="Article 2" />
              <CardContent>
                <h3>Fragmenty z TVP Sport / Polsat Sport</h3>
                <p>
                  Obejrzyj relacje i reportaże z moich treningów oraz zawodów.
                </p>
                <Address href="https://www.facebook.com/pzkickboxing/posts/rozmowa-z-piotrem-siegoczy%C5%84skim-prezesem-polski-zwi%C4%85zek-kickboxingu-kolejny-milo/4150130078334666/">
                  OBEJRZYJ ARTYKUŁ
                </Address>
              </CardContent>
            </Card>

            <Card>
              <CardImage src={image4} alt="Article 3" />
              <CardContent>
                <h3>Podcasty i artykuły branżowe</h3>
                <p>
                  Posłuchaj podcastów i przeczytaj artykuły, które omawiają moją działalność.
                </p>
                <Address href="https://www.youtube.com/watch?v=OjME-TqMTzI">
                  PODCASTY I ARTYKUŁY
                </Address>
              </CardContent>
            </Card>
          </Section>
        </Container>
      </PageWrapper>
    </>
  );
};

export default MediaPage;
