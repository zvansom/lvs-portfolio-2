import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styled404 = styled.div`
  height: 75vh;
  text-align: center;
  padding: 6rem;
  h2 {
    margin: 4rem;
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
  }
  p:last-of-type {
    margin-bottom: 8rem;
  }
`;

const FourOhFour = () => (
  <Styled404 className="container">
    <h2>Uh oh!</h2>
    <p>We couldn't find the page you were looking for.</p>
    <p>Try one of these links instead.</p>
    <Link to="/" className="button">Home</Link>
    <Link to="/about" className="button">About Me</Link>
    <Link to="/portfolio" className="button">Portfolio</Link>
    <Link to="/services" className="button">Services</Link>
    <Link to="/contact" className="button">Contact Me</Link>
  </Styled404>
);

export default FourOhFour;
