import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import GradientSection from './styles/GradientSection';

import profile from '../static/images/profile2.png';
import facebook from '../static/images/facebook.png';
import linkedin from '../static/images/linkedin.png';
import twitter from '../static/images/twitter.png';

const AboutMain = styled.main`
  padding: 7rem 0 10rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6rem;
  .image {
    text-align: center;
    .social-media {
      margin-top: 2rem;
      display: flex;
      justify-content: space-around;
    }
  }
  .about {
    p {
      font-size: 2rem;
      line-height: 2.5rem;
    }
    p:last-of-type {
      margin: 4rem 0 6rem;
    }
    h2 {
      color: var(--green);
      text-transform: uppercase;
      font-size: 4rem;
    }
    ul, li {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    .image {
      order: 1;
      margin-top: 5rem;
    }
  }
`;

const About = () => (
  <>
    <GradientSection>
      <h2>Not your average writer</h2>
      <p>I've had a lot of unique and weird experiences in life.</p>
      <p>I've been in the National Spelling Bee, I've lived in Alaska for 10 years, and I've helped train an Iditarod dogsled team and raise a herd of caribou.</p>
    </GradientSection>
    <AboutMain className="container">
      <div className="image">
        <img src={profile} alt="Lindsay VanSomeren" />
        <div className="social-media">
          <a href="https://www.facebook.com/lindsay.vansomeren" target="_blank" rel="noopener noreferrer"><img className="hover" src={facebook} alt="Lindsay VanSomeren Facebook" /></a>
          <a href="https://www.linkedin.com/in/lindsayvansomeren/" target="_blank" rel="noopener noreferrer"><img className="hover" src={linkedin} alt="Lindsay VanSomeren LinkedIn" /></a>
          <a href="https://twitter.com/Science_Finance" target="_blank" rel="noopener noreferrer"><img className="hover" src={twitter} alt="Lindsay VanSomeren Twitter" /></a>
        </div>
      </div>
      <div className="about">
        <p>I've spent my whole life reading and writing, and I have two degrees in <b>Wildlife Biology and Conservation.</b></p>

        <p>These experiences have all resulted in my own particular lens in which I view life.
        <br />
        <b>It's what brings the awesome sauce to your content.</b>
        </p>

        <h2>What I do</h2>

        <p>One of my greatest passions in life is learning. I've made it a personal value to never stop learning. Here is a sampling of some of the things I've learned to do:</p>

        <ul>
          <li>Spin yarn</li>
          <li>Paddle a canoe upriver</li>
          <li>Design knitting patterns</li>
          <li>Speak/read/write French</li>
          <li>Catch birds with mist nets</li>
          <li>Speed read and not comprehend anything</li>
        </ul>

        <p>If you'd like to see some of the things I've written, check out my portfolio.</p>

        <Link to="/portfolio" className="button">See full portfolio</Link>
        <Link to="/contact" className="button">Contact me</Link>
      </div>
    </AboutMain>
  </>
);

export default About;