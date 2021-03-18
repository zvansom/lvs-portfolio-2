import styled from 'styled-components';

const GradientSection = styled.section`
  background: linear-gradient(45deg, #3cb778, #1bb6c4);
  color: white;
  padding: 10rem;
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-size: 4rem;
    line-height: 4rem;
    
  }
  h3 {
    font-size: 3rem;
    line-height: 3.5rem;
  }
  h3:first-of-type {
    margin-top: 4rem;
  }
  h3:last-of-type {
    margin-bottom: 4rem;
  }
  p {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  .social-media {
    max-width: 250px;
    display: flex;
    justify-content: space-around;
    margin: 4rem auto;
  }
  .button {
    margin: 4rem auto;
  }
  @media (max-width: 600px) {
    padding: 10rem 0;
    a {
      margin-left: 1rem;
    }
  }
`;

export default GradientSection