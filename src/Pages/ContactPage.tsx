import React from "react";
import styled from "styled-components";
import Header from "../Components/Header.tsx";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const TeamMemberCard = styled.div`
  background-color: transparent;
  border-bottom: 1px solid #333;
  padding: 2rem 0;
  margin-bottom: 2rem;
`;

const MemberName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  font-weight: 600;
`;

const MemberRole = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #ff6b00;
  font-weight: 400;
`;

const MemberDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #ccc;
`;

const ContactSection = styled.div`
  margin-top: 1.5rem;
`;

const ContactTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #ff6b00;
  font-weight: 400;
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ContactLink = styled.a`
  color: #ff6b00;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #e65c00;
    text-decoration: underline;
  }

  &::before {
    content: "•";
    margin-right: 0.5rem;
  }
`;

const ContactPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Container>
          <Title>Contact</Title>
          <Subtitle>Feel free to contact Piotr Siegoczyński's business team</Subtitle>

          <TeamMemberCard>
            <MemberName>Alina Sikora</MemberName>
            <MemberRole>Partnership Manager</MemberRole>
            <MemberDescription>
              Piotr Siegoczyński's Partnership Manager since 2021. Responsible for business projects
              and the implementation of current sponsorship partnerships of Piotr, managing relations
              with current sponsors: ON, Rolex, Infosys, Visa, Porsche, Ostree, Tecnifibre, LEGO and
              Lancôme. Coordinates projects in the field of sponsorship and marketing.
            </MemberDescription>
            <ContactSection>
              <ContactTitle>Contact</ContactTitle>
              <ContactLinks>
                <ContactLink href="mailto:partnership@piotrsiegoczynski.com">Email</ContactLink>
                <ContactLink href="https://linkedin.com/in/alinaskora" target="_blank">LinkedIn</ContactLink>
              </ContactLinks>
            </ContactSection>
          </TeamMemberCard>

          <TeamMemberCard>
            <MemberName>Daria Sulgostowska</MemberName>
            <MemberRole>PR Manager</MemberRole>
            <MemberDescription>
              Piotr Siegoczyński's PR Manager since December 2022. Responsible for the entire area of
              communication, implementation of image projects with partners (ON, Rolex, Infosys, Visa,
              Porsche, Ostree, Tecnifibre, LEGO and Lancôme), media relations, charity and social initiatives.
            </MemberDescription>
            <ContactSection>
              <ContactTitle>Contact</ContactTitle>
              <ContactLinks>
                <ContactLink href="mailto:pr@piotrsiegoczynski.com">Email</ContactLink>
                <ContactLink href="https://linkedin.com/in/dariasulgostowska" target="_blank">LinkedIn</ContactLink>
              </ContactLinks>
            </ContactSection>
          </TeamMemberCard>

          <TeamMemberCard>
            <MemberName>Jules Mercier</MemberName>
            <MemberRole>Agent, IMG</MemberRole>
            <MemberDescription>
              Since 2022, an agent from the IMG agency who is responsible for relations with tournament
              organizers and global partners: ON, Tecnifibre, Infosys, VISA, as well as for logistical
              support of Piotr and the team during competitions.
            </MemberDescription>
            <ContactSection>
              <ContactTitle>Contact</ContactTitle>
              <ContactLinks>
                <ContactLink href="mailto:agent@piotrsiegoczynski.com">Email</ContactLink>
                <ContactLink href="https://linkedin.com/in/julesmercier" target="_blank">LinkedIn</ContactLink>
              </ContactLinks>
            </ContactSection>
          </TeamMemberCard>
        </Container>
      </PageWrapper>
    </>
  );
};

export default ContactPage;