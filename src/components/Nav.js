import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  align-items: flex-end;
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 8px 0;
  background-color: var(--green);
  border-top: solid 4px var(--dark-green);
  border-bottom: solid 4px var(--dark-green);

  .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
  }

  .navLinks {
    display: flex;
  }

  .nav-link {
    font-size: 2.3rem;
    margin-left: 3rem;
    transition: all 0.1s ease;
    text-transform: uppercase;
  }
  .nav-link-img {
    height: 2.3rem;
    margin-left: 1rem;

    svg {
      path {
        fill: var(--dark-green);
      }
    }
  }
  .nav-link-img:hover {
    svg {
      path {
        fill: var(--yellow);
      }
    }
  }
  .first-img {
    margin-left: 2rem;
  }
  .nav-link:hover {
    color: var(--yellow);
  }
  .active-page {
    color: var(--yellow);
    font-weight: 900;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 900px) {
    ul {
      flex: column;
    }
    .nav-link {
      font-size: 1.8rem;
      word-wrap: none;
    }
    .active-page {
      letter-spacing: 0;
    }
  }
`;

const Nav = () => (
  <NavStyles>
    <div className="container">
        <NavLink 
          className="nav-link-home"
          to="/"
        >
          <Logo />
        </NavLink>
        <ul>
          <div className="navLinks">
            <NavLink 
              className="nav-link"
              activeClassName="active-page"
              to="/journalism"
            >
              Journalism
            </NavLink>
            <NavLink 
              className="nav-link"
              activeClassName="active-page"
              to="/brand"
            >
              Brand Work
            </NavLink>
            <NavLink 
              className="nav-link"
              activeClassName="active-page"
              to="/contact"
            >
              Contact Me
            </NavLink>
          </div>
          <div className="socialMedia">
            <a className="nav-link-img first-img" href="https://www.linkedin.com/in/lindsayvansomeren/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a className="nav-link-img" href="https://twitter.com/FiSciLindsay" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a className="nav-link-img" href="mailto:lindsayvansomeren@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
            </a>
          </div>
      </ul>
    </div>
  </NavStyles>
);

export default Nav;