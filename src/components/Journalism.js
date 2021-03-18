import React from 'react';
import styled from 'styled-components';

import wyoming from '../static/images/Wyoming.jpg';
import tree from '../static/images/big-tree.jpg';
import field from '../static/images/4.JPG';
import { Title, SectionDivider } from './Home2';
import StoryLink from './StoryLink';
import { MainStyles } from './styles/MainStyles';

const Section = styled.div`
    background: var(--yellow);
    display: flex;
  }
  .sectionImage {
      display: block;
      max-width: 30vw;
      object-fit: scale-down;
  }


    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;

        .sectionImage {
            justify-self: center;
            align-self: center;
        }

        .gap {
            height: 50px;
        }
    }
`;

const Journalism = () => (
    <>
        <MainStyles className="journalism">
            <div className="container">
                <Section className="flexContainer reverse">
                    <img src={wyoming} className="sectionImage" alt="Wyoming landscape." />
                    <div className="gap" />
                    <div className="text">
                        <Title>Journalism Work</Title>
                        <p>I grew up fishing, hunting, and gardening in a big forest in northern Michigan. Later, I left home for Alaska, where I ran sled dog teams through snow-covered forests and trained to be a wildlife biologist.</p>
                        <p>From my earliest moments, the thing that’s driven me the most is a deep love of the land and the wild things that live on it.</p>
                        <p>I’m here to amplify that voice, and share those stories with the world.</p>
                    </div>
                </Section>
                <SectionDivider />
                <Section className="flexContainer reverse">
                    <img src={tree} className="sectionImage" alt="A very large tree." />
                    <div className="gap" />
                    <div className="text">
                        <Title>Wildlife & Environment Stories</Title>
                        <p>It’s easy to think of the environment as some token concern that we need to address along with all of the other problems in our world right now. Just a box to check, if you will.</p>
                        <p>It’s also easy to forget that we’re actually on a spaceship (Earth). We live our entire lives in just one small microcosm of what’s actually around us, even if we are active outdoors. All too often we’re separated from it, and we can’t relate with what we can’t see.</p>
                        <p>I want to bring those stories out. I want to show people the diversity of what’s around them so they can form connections, take action, and push for a better world. Here are some of the stories I’ve written that do that:</p>
                        <ul>
                            <StoryLink
                                url="https://www.sierraclub.org/sierra/citizen-science-done-safely"
                                title="Citizen Science Done Safely"
                                publisher="Sierra"
                            />
                            <StoryLink
                                url="https://untamedscience.com/biology/ecology/ecology-articles/western-wildfires/"
                                title="How the West Was Burned: A Tale of Wildfires and Ecosystems in the American West"
                                publisher="Untamed Science"
                            />
                        </ul>
                    </div>
                </Section>
                <SectionDivider />
                <Section className="flexContainer">
                    <img src={field} className="sectionImage" alt="Caribou in a field." />
                    <div className="gap" />
                    <div className="text">
                        <Title>Indigenous Stories</Title>
                        <p>I come from a line of Ojibwe fur trappers that traditionally ranged between Lake Superior and James Bay, from Brunswick House First Nation. We were disconnected after my grandmother passed away early on from tuberculosis, causing my mother to get caught up in the 60s scoop.</p>
                        <p>Reconnecting is slow, difficult work. One of the ways I’m hoping to learn more is by sharing the stories of other Indigenous people:</p>
                        <ul>
                            <StoryLink
                                url="https://onezero.medium.com/virtual-learning-is-helping-indigenous-languages-fight-off-extinction-cbeee45a1271"
                                title="A Surge in Online Learning Is Helping Revive Indigenous Languages"
                                publisher="Medium OneZero"
                            />
                        </ul>
                    </div>
                </Section>
            </div>
        </MainStyles>
    </>
);

export default Journalism;