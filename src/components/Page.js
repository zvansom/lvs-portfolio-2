import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './Nav';
import Home2 from './Home2';
import Brand from './Brand';
import Journalism from './Journalism';
import Contact from './Contact';
import FourOhFour from './FourOhFour';
import Footer from './Footer';

const StyledPage = styled.div`
  background: transparent;
  color: black;
`;

const Page = () => {
  const [initialLoad, setInitialLoad] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleLoad = () => {
    setInitialLoad(true);
  };
  
  useEffect(() => {
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Router basename='/'>
      <StyledPage>
        <Nav />
        <Switch>
          <Route 
            path="/" exact
            render={(props) => (
              <Home2 {...props} 
                animationCompleteCallback={() => setAnimationComplete(true)} 
                isLoaded={initialLoad}
                animationComplete={animationComplete}
              />
            )}
          />
          <Route path="/journalism" component={Journalism} />
          <Route path="/brand" component={Brand} />
          <Route path="/contact" component={Contact} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </StyledPage>
    </Router>
  );
}

export default Page;