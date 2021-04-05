import React from 'react';
import styled from 'styled-components';
import { BaseLink } from '../common';
import { List } from '../../styles';

const Container = styled.nav`
  display: block;
  background-color: var(--clr-white-1);
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 99;
  box-shadow: 0 1em 0.25em 0 var(--clr-transparent-1);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Links = styled.ul`
  ${List};
`;

const Link = styled(BaseLink)`
  color: var(--clr-black-1);
  padding: 1em 0 1em 1em;
  font-weight: bolder;
  transition: background-color 0.2s linear, padding-left 0.2s linear;

  &:hover {
    background-color: var(--clr-yellow-2);
    padding-left: 2em;
  }

  &:active {
    background-color: var(--clr-yellow-3);
  }
`;

const Dropdown = () => (
  <Container aria-label="hamburger menu">
    <Links>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Links>
  </Container>
);

export default Dropdown;
