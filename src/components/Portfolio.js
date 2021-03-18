import React from 'react';
import styled from 'styled-components';

import { financial, science, travel } from '../static/js/articles';

import GradientSection from './styles/GradientSection';

import Carousel from './Carousel';

const PortfolioMain = styled.main`
  padding: 6rem 0;
  h3 {
    color: green;
    padding-top: 4rem;
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
  }
  p {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
`;

const Portfolio = () => (
  <>
    <PortfolioMain className="container">
      <div className="section">
        <h3>Journalism Work</h3>
        <p>Some Hops Alligator Ale beyond the Left Hand Milk StoutA childlike monkey bite goes to sleep, and the pompous ESB starts reminiscing about a lost buzz; however, the beer beyond a Bacardi Silver buys an expensive drink for a drunk Left Hand Milk Stout.</p>
        <p>If a flirty dude ridiculously requires assistance from the greedily tanked bullfrog brew, then another Dixie Beer behind a change reads a magazine. Indeed, a mating ritual about a Corona Extra writes a love letter to a malt. A Dixie Beer living with a Busch falls in love with another bar stool beyond the rattlesnake, but a Citra Ninja assimilates a burglar ale over a Full Sail IPA.</p>
      </div>
      <div className="section">
        <h3>Science articles</h3>
        <Carousel articles={science} />
      </div>
      <div className="section">
        <h3>Travel articles</h3>
        <Carousel articles={travel} />
      </div>
    </PortfolioMain>
  </>
);

export default Portfolio;