import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import useGlobalContext from '../hooks/useGlobalContext';

const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75em 5%;
  }
`;

const NavbarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3em 5% 1em 5%;

  @media screen and (min-width: 576px) {
    padding: 1.5em 5% 1em 5%;
  }

  @media screen and (min-width: 992px) {
    padding: 0;
  }
`;

const HamburguerBtn = styled.button`
  background-color: #ffffff25;
  border: none;
  font-size: var(--font-size-navbar);
  padding: 0.5em 1em;
  border-radius: 10px;
  color: var(--clr-white-1);
  transition: background-color 0.2s linear;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ffffff50;
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Brand = styled.a`
  text-decoration: none;
  color: var(--clr-white-1);
  font-weight: bold;
  font-size: calc(var(--font-size-navbar) * 1.75);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
  }
`;

const NavbarMenu = styled.ul`
  list-style: none;
  display: none;

  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > li:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--clr-white-1);
  font-weight: bold;
  transition: opacity 0.2s linear;
  padding: 0.75em 2em;
  font-size: var(--font-size-navbar);

  &:hover {
    opacity: 0.5;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: var(--clr-white-1);
  font-weight: bold;
  transition: opacity 0.2s linear;
  padding: 0.75em 2em;
  font-size: var(--font-size-navbar);

  &:hover {
    opacity: 0.5;
  }
`;

const NavbarEnd = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
  }
`;

const LoginBtn = styled.a`
  text-decoration: none;
  background-color: #ffffff25;
  color: var(--clr-white-1);
  font-weight: bold;
  padding: 0.4em 1em 0.5em 1em;
  border-radius: 20px;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #ffffff50;
  }
`;

const getCenterCoord = (element, offset) => {
  const elementCoords = element.getBoundingClientRect();
  const elementCenterCoord = (elementCoords.left + elementCoords.right + offset) / 2;
  return elementCenterCoord;
};

const Navbar = () => {
  const {
    setIsSidebarMounted,
    setIsSubmenuMounted,
    setSubmenuTargetCenterCoord,
    windowWidth,
  } = useGlobalContext();
  const [currentMenuItem, setCurrentMenuItem] = useState(null);

  const openSubmenu = (event) => {
    if (event.target.id === 'menu-button') {
      setSubmenuTargetCenterCoord(getCenterCoord(event.target, -6));
      setIsSubmenuMounted(true);
      setCurrentMenuItem(event.target);
    }
  };

  const closeSubmenu = (event) => {
    if (event.target.id !== 'menu-button') {
      setIsSubmenuMounted(false);
    }
  };

  useEffect(() => {
    if (currentMenuItem) {
      setSubmenuTargetCenterCoord(getCenterCoord(currentMenuItem, -6));
    }
  }, [currentMenuItem, setSubmenuTargetCenterCoord, windowWidth]);

  return (
    <Container onMouseOver={closeSubmenu}>
      <NavbarHeader>
        <Brand href='/'>stripe</Brand>
        <HamburguerBtn aria-label='hamburguer button' onClick={() => setIsSidebarMounted(true)}>
          <FaBars />
        </HamburguerBtn>
      </NavbarHeader>

      <NavbarMenu>
        <li>
          <MenuButton id='menu-button' onMouseOver={openSubmenu}>
            Productos
          </MenuButton>
        </li>
        <li>
          <MenuButton id='menu-button' onMouseOver={openSubmenu}>
            Desarrolladores
          </MenuButton>
        </li>
        <li>
          <MenuButton id='menu-button' onMouseOver={openSubmenu}>
            Empresa
          </MenuButton>
        </li>
        <li>
          <MenuLink href='/'>Tarifas</MenuLink>
        </li>
      </NavbarMenu>

      <NavbarEnd>
        <LoginBtn href='/'>Iniciar sesión</LoginBtn>
      </NavbarEnd>
    </Container>
  );
};

export default Navbar;
