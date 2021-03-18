import styled from 'styled-components';

const ClientsStyles = styled.section`
  background: #49997026;
  text-align: center;
  padding: 7rem 0;
  h2 {
    color: var(--green);
    text-transform: uppercase;
    font-size: 4.5rem;
    font-weight: 900;
    line-height: 4.5rem;
  }
  p {
    font-size: 2rem;
    margin-bottom: 6rem;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
  }
  .image {
    max-width: 100%;
  }
  @media (max-width: 900px) {
    .images {
      grid-template-columns: repeat(2, 1fr);
    }
    .image {
      justify-self: center;
    }
  }
  @media (max-width: 500px) {
    .images {
      grid-template-columns: 1fr;
    }
  }
`;

export default ClientsStyles;