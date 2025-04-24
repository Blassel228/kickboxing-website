import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../Components/Header.tsx";

const OfferContainer = styled.div`
  padding: 60px 20px;
  background-color: #1a1a1a;
  color: #fff;
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center;
  transition: 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const PlanTitle = styled.h3`
  font-size: 24px;
  color: #ff6b00;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0 20px;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;

  li {
    margin: 10px 0;
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: #ff6b00;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e65c00;
  }
`;

const MoreContent = styled.div`
  margin-top: 80px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h4 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #ff6b00;
  }

  p {
    font-size: 18px;
    color: #ccc;
  }
`;

const TryClassSection = styled(motion.div)`
  margin-top: 100px;
  background-color: #292929;
  padding: 60px 20px;
  border-radius: 20px;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-size: 32px;
    color: #fff;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #ddd;
    margin-bottom: 30px;
  }
`;

const plans = [
  {
    title: "Beginner",
    price: "Free",
    features: [
      "Access to basic resources",
      "Limited support",
      "Community access",
      "Real life class in Warsaw",
    ],
  },
  {
    title: "Standard",
    price: "$9.99/month",
    features: [
      "All Beginner features",
      "Standard analytics",
      "Priority support",
      "Monthly updates",
    ],
  },
  {
    title: "Professional",
    price: "$29.99/month",
    features: [
      "All Standard features",
      "Custom integrations",
      "1-on-1 consulting",
      "Early access to new features",
    ],
  },
];

const OfferPage = () => {
  return (
    <>
      <Header />
      <OfferContainer>
        <Title>Wybierz swój plan</Title>
        <CardGrid>
          {plans.map((plan, i) => (
            <Card
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <PlanTitle>{plan.title}</PlanTitle>
              <Price>{plan.price}</Price>
              <Features>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </Features>
              <Button>Wybierz plan</Button>
            </Card>
          ))}
        </CardGrid>

        <MoreContent>
          <h4>Nie jesteś pewien, który plan wybrać?</h4>
          <p>
            Każdy plan został stworzony z myślą o innym poziomie użytkownika.
            Zacznij od darmowej wersji, a w każdej chwili możesz przejść na
            wyższy plan!
          </p>
        </MoreContent>

        <TryClassSection
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Spróbuj darmowej klasy już dziś!</h3>
          <p>
            Dołącz do naszej próbnej lekcji i przekonaj się, jak możemy pomóc Ci
            rozwinąć swoje umiejętności.
          </p>
          <Button>Weź udział w darmowej lekcji</Button>
        </TryClassSection>
      </OfferContainer>
    </>
  );
};

export default OfferPage;
