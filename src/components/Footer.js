import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: var(--green);
  border-top: solid 4px var(--dark-green);
  border-bottom: solid 4px var(--dark-green);
  justify-content: center;
  display: flex;
  align-items: center;
  p {
    font-size: 2rem;  
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
  <FooterStyles>
    <p>© Lindsay VanSomeren {year}</p>
  </FooterStyles>
)};

export default Footer;