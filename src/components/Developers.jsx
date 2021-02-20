import React from 'react';
import styled from 'styled-components';
import { Link, LinkIcon, Card, List } from './common';

const Main = styled.main`
  padding: 2em;
`;

const Lists = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;

  & > article {
    margin-right: 4em;
  }

  & > article:last-child {
    margin-right: 0;
  }
`;

const Footer = styled.section`
  background-color: var(--clr-blue-5);
  border-radius: 0 0 10px 10px;
  padding: 2em;
  margin: 0 0.25em 0.25em 0.25em;
`;

const Name = styled.h1`
  color: var(--clr-blue-4);
  font-size: calc(var(--font-size-base) * 0.85);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1em;
`;

const LinksList = ({ name, links }) => (
  <article>
    <Name>{name}</Name>
    <List rowGap='0.5em'>
      {links.map((link, index) => (
        <li key={index + 1}>
          <Link {...link} />
        </li>
      ))}
    </List>
  </article>
);

const Developers = ({ information }) => (
  <article>
    <Main>
      <List>
        {information.main.links.map((link, index) => (
          <li key={index + 1}>
            <LinkIcon {...link} />
          </li>
        ))}
      </List>

      <Lists>
        {information.main.lists.map((list, index) => (
          <LinksList key={index + 1} {...list} />
        ))}
      </Lists>
    </Main>

    <Footer>
      <List columns='2' columnGap='4em' rowGap='1em'>
        {information.footer.links.map((link, index) => (
          <li key={index + 1}>
            <LinkIcon {...link} />
          </li>
        ))}
      </List>
    </Footer>
  </article>
);

export default Developers;
