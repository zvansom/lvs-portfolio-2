import styled from 'styled-components';

const SkillsStyles = styled.section`
  background: linear-gradient(45deg, #3cb778, #1bb6c4);
  color: white;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10rem;
  }
  .skill {
    padding: 5rem;
    text-align: center;
    h2 {
      margin-top: 2rem;
      text-transform: uppercase;
      font-weight: 900;
    }
    p {
      line-height: 1.5rem;
    }
  }
  .skill:first-of-type {
    border-right: 2px solid white;
  }
  @media (max-width: 900px) {
    .container {
      grid-template-columns: 1fr;
    }
    .skill:first-of-type {
      border-right: none;
    }
    .skill:last-of-type {
      border-top: 2px solid white;
    }
  }
  @media (max-width: 500px) {
    .container {
      padding: 0;
    }
  }
`;

export default SkillsStyles;