import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: 'Anaktoria';
  font-size: 3.6rem;
  margin: 0;
  font-weight: 300;
  padding: 0;

  &:hover {
    color: #fffacd;
  }
`;

const Logo = () => (
  <H1>Lindsay VanSomeren</H1>
);

export default Logo;