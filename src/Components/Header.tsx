import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import {routerKeys} from "../Constants/routerKeys.tsx";

const HeaderContainer = styled.header`
  background-color: #222;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 1060px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #222;
  width: 100%;
  padding: 20px 0;
  align-items: center;
  gap: 20px;
  z-index: 99;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff5722;
    transform: scale(1.1);
  }

  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

const Burger = styled.div`
  display: none;
  position: absolute;
  right: 20px;
  font-size: 28px;
  margin-top: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Burger onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </Burger>

      <NavWrapper>
        <NavLink href={routerKeys.homePage}>HOME</NavLink>
        <NavLink href={routerKeys.aboutPage}>O MNIE</NavLink>
        <NavLink href={routerKeys.achievementsPage}>OSIĄGNIĘCIA</NavLink>
        <NavLink href={routerKeys.galleryPage}>GALERIA</NavLink>
        <NavLink href={routerKeys.offerPage}>OFERTA</NavLink>
        <NavLink href={routerKeys.mediaPage}>W MEDIACH</NavLink>
        <NavLink href={routerKeys.contactPage}>KONTAKT</NavLink>
      </NavWrapper>

      <Nav isOpen={menuOpen}>
        <NavLink href={routerKeys.homePage}>HOME</NavLink>
        <NavLink href={routerKeys.aboutPage}>O MNIE</NavLink>
        <NavLink href={routerKeys.achievementsPage}>OSIĄGNIĘCIA</NavLink>
        <NavLink href={routerKeys.galleryPage}>GALERIA</NavLink>
        <NavLink href={routerKeys.offerPage}>OFERTA</NavLink>
        <NavLink href={routerKeys.mediaPage}>W MEDIACH</NavLink>
        <NavLink href={routerKeys.contactPage}>KONTAKT</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
