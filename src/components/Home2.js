import classNames from "classnames";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Typewriter } from 'react-typewriting-effect'

// Component imports
import MainStyles from './styles/MainStyles';

// Image imports
import img1 from '../static/images/1.JPG';
import img4 from '../static/images/4.JPG';
import img5 from '../static/images/5.JPG';
import headshot from '../static/images/rsz_large_headshot.jpg';
import ladder from '../static/images/rsz_ladder.jpg';
import trap from '../static/images/rsz_trap.jpg';

export const Title = styled.h2`
    display: block;
    line-height: 6rem;
    font-weight: 900;
    margin-bottom: 1rem;
    font-size: 6rem;
`;

const Section = styled.div`
  padding: 6rem;
`;

export const SectionDivider = styled.div`
  height: 10rem;
`;

export const H2 = styled.h2`
  font-size: 6rem;
  line-height: 6rem;
  margin: 0;
  margin-top: -100px;
  font-weight: 900;
  letter-spacing: 1.5px;
  opacity: ${props => props.opacity};
  transition: all 0.1s ease-in-out;

  .subheader {
    font-size: 5rem;
  }
`;

const Parallax = styled.div`
    /* The image used */
    background-image: url(${props => props.img});

    /* Set a specific height */
    height: 75vh;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const TransparentOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.35);
`;

const scrollpoint = 350;

const Home2 = ({ animationCompleteCallback, isLoaded, animationComplete }) => {
  const [headerOpacity, setHeaderOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) { setHeaderOpacity(1); }
  }, [isLoaded]);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    let opacity;
    if (currentScroll <= scrollpoint) {
      opacity = 1 - currentScroll / scrollpoint;
    } else {
      opacity = 0;
    }
    setHeaderOpacity(opacity);
  };

  return (
    <>
        <Parallax img={img1}>
          <TransparentOverlay>
          {isLoaded && !animationComplete && (
            <div className="typewriterContainer">
              <Typewriter
                string="Hi, I'm Lindsay"
                delay={250}
                stopBlinkinOnComplete
                className="header"
                onComplete={() => { animationCompleteCallback() }}
              />
            </div>
            )}
            {animationComplete && (
                <H2 opacity={headerOpacity} className={classNames("header", {headerLoaded: isLoaded})}>
              Hi, I'm Lindsay</H2>
            )}
          </TransparentOverlay>
        </Parallax>
        <MainStyles>
          <div className="container">
            <Section className="flexContainer">
              <img src={headshot} alt="Lindsay VanSomeren Freelance Writer" />
              <div className="gap" />
              <div className="message">
                <p>I’m a freelance writer based in Kirkland, Washington.</p> 
                <p>I cover a lot of different things: money, wildlife, and the environment.</p>
                <p>If that seems like a weird mix, there’s a reason behind it...</p>
              </div>
            </Section>
          </div>
        </MainStyles>
        <Parallax img={img5} />
        <MainStyles>
          <div className="container">
            <Section className="flexContainer reverse">
              <img src={ladder} alt="Lindsay on a ladder outdoors" />
              <div className="gap" />
              <div className="message">
                <h2>Not your average writer</h2>
                <p>We all only get so much time on this earth. I want to make the most of it, and I have a lot of interests.</p>
                <p>I grew up in rural northern Michigan. Since then, I’ve lived in a lot of places: Colorado, Alaska, and now Washington state. Over the years I’ve also been lucky enough to do some pretty exciting things, like:</p>
                <ul>
                  <li>Train an Iditarod sled dog team</li>
                  <li>Participate in the National Spelling Bee</li>
                  <li>Capture and raise a herd of wild caribou calves</li>
                  <li>Work to reconnect with my family’s Ojibwe roots</li>
                  <li>Develop new lab tests for assessing forage quality for wildlife</li>
                </ul>
              </div>
            </Section>
          </div>
        </MainStyles>
        <Parallax img={img4} />
        <MainStyles>
          <div className="container">
            <Section className="flexContainer reverse sectionLast">
              <img src={trap} alt="Lindsay trapping fish" />
              <div className="gap" />
              <div className="message">
                <h2>Telling a new story</h2>
                <p>I use all of these experiences I’ve had to help me tell other stories — stories about people, the places they live, and what’s important to them. Ready to see some of my work?</p>
    
                <ul className="content-links">
                <li>See my 
                  <NavLink
                    className="content-link"
                    to="/journalism"
                  >
                    <b>journalism stories</b>
                  </NavLink>
                </li>
                <li>
                  See my
                  <NavLink
                    className="content-link"
                    to="/brand"
                  >
                    <b>brand work stories</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="content-link last"
                    to="/contact"
                  >
                    <b>Contact me</b>
                  </NavLink>
                </li>
                </ul>
              </div>
            </Section>
          </div>
        </MainStyles>
    </>
)};

export default Home2;
