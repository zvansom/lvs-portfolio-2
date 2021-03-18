import React from 'react';
import styled from 'styled-components';

import calc from '../static/images/calc.jpg';
import forbes from '../static/images/client-imgs/forbes.png';
import bi from '../static/images/client-imgs/bi.png';
import fico from '../static/images/client-imgs/fico-logo-blue-small.png';
import { MainStyles } from './styles/MainStyles';
import karma from '../static/images/client-imgs/karma.png';
import lt from '../static/images/client-imgs/LT_Logo_-_Gradient.png';
import balance from '../static/images/client-imgs/Thebalance-logo.png';
import StoryLink from './StoryLink';

import { Title, SectionDivider } from './Home2';

const Section = styled.div`
    background: var(--yellow);
    display: flex;
        .sectionImage {
            display: flex;
            flex-direction: column;
            width: 30vw;
            align-items: space-between;
            object-fit: scale-down;
            height: 100%;
            justify-content: center;

            img {
                height: calc(100% / 3);
                width: 100%;
                object-fit: contain;
                margin-bottom: 2rem;
                padding: 1rem;
            }
        }
    }
`;

const Brand = () => (
    <>
        <MainStyles className="brand">
            <div className="container">
                <Section className="flexContainer reverse">
                    <img src={calc} className="sectionImage" alt="Calculator and coins." />
                    <div className="gap" />
                    <div className="text">
                        <Title>Brand Work</Title>
                        <p>Like a lot of people, I used to struggle with money. Wildlife biology isn’t exactly a career known for its financial stability, and I crashed big time after graduating.</p>
                        <p>This inspired me to learn more about how to manage my money better. After all, money isn’t just a series of numbers — it’s a ticket to having more freedom.</p>
                        <p>Having enough money gives you options to do the things you want, whether that’s growing and harvesting your own food, donating to worthy causes, or reconnecting with lost family.</p>
                        <p>And that’s ultimately why I’m passionate about helping others learn how to manage their money better too.</p>
                    </div>
                </Section>
                <SectionDivider />
                <Section className="flexContainer">
                    <div className="sectionImage">
                        <img src={fico} alt="FICO" />
                        <img src={forbes} alt="Forbes" />
                        <img src={bi} alt="Business Insider" />
                    </div>
                    <div className="gap" />
                    <div className="text">
                        <Title>Personal Finance Stories</Title>
                        <p>Our society is not built in an intuitive, people-friendly way when it comes to money. There are also layers of emotions when it comes to finances: shame, pride, depression, and elation.</p>
                        <p>At its core, money is something human even if we’ve transformed it into something that’s not quite so easy to understand.</p>
                        <p>So, that’s what I do with my personal finance writing: I write plain-English explainers so people know how to manage their money. And I tell stories about what that means to people:</p>
                        <ul>
                            <StoryLink
                                url="https://www.myfico.com/credit-education/blog/how-expensive-are-dogs"
                                title="How Expensive Are Dogs, Really?"
                                publisher="FICO"
                            />
                            <StoryLink
                                url="https://www.fool.com/the-ascent/banks/articles/why-find-something-new-is-bad-advice/"
                                title='Why "FindSomething New" Is Bad Advice'
                                publisher="The Ascent"
                            />
                            <StoryLink
                                url="https://www.forbes.com/advisor/student-loans/student-loan-deferment/"
                                title="Student Loan Deferment: Is It Right For You?"
                                publisher="Forbes Advisor"
                            />
                            <StoryLink
                                url="https://blog.qubemoney.com/fun-money-budget-how-to-stop-money-fights/"
                                title="Fun Money Budgets: How to Stop Money Fights"
                                publisher="Qube Money"
                            />
                            <StoryLink
                                url="https://www.magnifymoney.com/blog/banking/cdfi/"
                                title="What is a Community Development Financial Institution (CDFI)?"
                                publisher="MagnifyMoney"
                            />
                            <StoryLink
                                url="https://www.businessinsider.com/personal-finance/mistakes-i-made-when-buying-my-first-home"
                                title="6 Mistakes I Made When Buying My First Home that Ended Up Costing Me the House"
                                publisher="Business Insider"
                            />
                        </ul>
                    </div>
                </Section>
                <SectionDivider />
                <Section className="flexContainer reverse">
                    <div className="sectionImage">
                        <img src={lt} alt="Lending Tree" />
                        <img src={balance} alt="The Balance" />
                        <img src={karma} alt="Credit Karma" />
                    </div>
                    <div className="gap" />
                    <div className="text">
                        <Title>Financial Product Reviews</Title>
                        <p>Knowing how to manage your money is only one part of the picture. Another big part is which tools you use.</p>
                        <p>By choosing the right tools, you can live more of the life you want. That’s why I also enjoy writing product reviews of these tools:</p>
                        <ul>
                            <StoryLink
                                url="https://www.lendingtree.com/auto/rv/usaa-review/"
                                title="USAA RV Loan Review"
                                publisher="LendingTree"
                            />
                            <StoryLink
                                url="https://www.thebalance.com/world-of-hyatt-credit-card-review-4693313"
                                title="World of Hyatt Credit Card Review"
                                publisher="The Balance"
                            />
                            <StoryLink
                                url="https://www.creditkarma.com/tax/i/how-fsas-work"
                                title="FSAs: A tax break for paying childcare and healthcare costs"
                                publisher="Credit Karma"
                            />
                        </ul>
                    </div>
                </Section>
            </div>
        </MainStyles>
    </>
);

export default Brand;