import styled from 'styled-components';

export const MainStyles = styled.main`
  display: flex;
  justify-content: center;
  background-color: var(--yellow);
  img {
    max-width: 100%;
    max-height: 100%;
    box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.7);
    height: auto;
    width: auto;
    object-fit: cover;
  }
  h2 {
    font-family: 'Anaktoria';
    font-size: 5rem;
    line-height: 6rem;
    span {
      display: block;
    }
  }
  p,
  .content-link {
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.4;
    margin: 3rem 0;
  }
  p:last-of-type {
    margin-bottom: 5rem;
  }
  .contianer {
    display: flex;
    justify-content: space-between;
  }
  .highlight {
    color: var(--green);
  }
  .gap {
    width: 20rem;
  }
  .content-links {
    display: flex;
    flex-direction: column;
  }
  .content-link {
    margin-left: 0.5rem;
    display: inline;
  }
  .content-link:hover {
    color: var(--green-bright);
  }
  .last  {
    margin: 0;
  }
  @media (max-width: 1080px) {
    padding: 4rem;
    gap: 4rem;
    background-size: contain;
    img {
      justify-self: center;
    }
    .message {
      justify-self: center;
    }
  }
  @media (max-width: 760px) {
    .message {
      padding: 0;
      margin: 0 auto;
    }
    .button {
      margin-right: 1rem;
    }
  }
  @media (max-width: 900px) {
      .flexContainer {
        flex-direction: column;
        align-items: center;
      }
      .gap {
          height: 10rem;
      }
  }
  @media (max-width: 480px) {
    background-image: none;
    .button {
      text-align: center;
      display: block;
      margin: 2rem 0;
    }
  }
  `;

export default MainStyles;