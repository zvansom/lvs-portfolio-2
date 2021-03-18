import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Title } from './Home2';

import { htmlContentBuilder } from '../static/js/mail';
import MainStyles from './styles/MainStyles';

const ContactMain = styled.main`
  padding: 4rem 0;
  margin-top: 9%;
  margin-bottom: 9%;
  display: flex;
  justify-content: center;
  position: relative;
  background: var(--light-green);
  width: 100%;
  .section {
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    width: 33%;
  }

  .error {
  margin: 2rem auto;
  display: flex;
  justify-self: center;
  border: 3px solid red;
}
.error p {
  margin: 2rem auto;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
}
.left 
  p {
    margin: 2rem 0;
  }
  h2,
  label {
    font-family: 'Anaktoria';
  }

  img {
    transition: scale 0.4s ease;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input, textarea {
      width: 100%;
      font-size: 2rem;
    }
    textarea {
      margin-bottom: 2rem;
    }
    button {
      margin: 0;
      padding-left: 5rem;
      padding-right: 5rem;
      cursor: pointer;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormLabel = styled.label`
    font-weight: 900;
    line-height: 3rem;
    font-size: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
`;

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    sending: false,
    error: false,
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const {email, name, message} = this.state;
    const headers = {
      'content-type': 'application/json',
      'api-key': process.env.REACT_APP_SENDINBLUE_API,
    };
    const body =   { 
      tags: [ 'portfolio' ],
      to: [ { email: 'lindsayvansomeren@gmail.com', name: 'Lindsay VanSomeren' } ],
      sender: { email, name },
      subject: `WRITING INQUIRY FROM PORTFOLIO`,
      htmlContent: htmlContentBuilder(email, message, name),
      textContent: message,
      replyTo: { email, name } 
    };
    axios.post('https://api.sendinblue.com/v3/smtp/email', body, { headers })
      .then( res => {
        this.setState({ 
          sending: true,
          error: false,
        });
      })
      .catch(err => { this.setState({ error: true }); });
  }

  handleChange = e => { this.setState({[e.target.name]: e.target.value}) }

  render() {
    return (
      <MainStyles className="contact">
        <ContactMain>
          {this.state.error && (
            <div className="error">
              <p>Uh oh! Something didn't work. Please try submitting the contact form again.</p>
            </div>
          )}
          <div className="section left">
            <Title>Contact Me</Title>
            <p>Interested in working together? Drop me a line:</p>
          </div>
          <div className="section">
            <form onSubmit={this.handleSubmit}>
              <FormLabel>Your Name</FormLabel>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              <FormLabel>Your Email</FormLabel>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
              <FormLabel>Your Message</FormLabel>
              <textarea rows="5" name="message" value={this.state.message} onChange={this.handleChange} />
              <button type="submit" className="button">Send</button>
            </form>
            <div className={this.state.sending ? 'container message-sent slide' : 'container message-sent'}>
              <h2>Your message has been sent!</h2>
              <p>Thanks for reaching out. I'll get back to you at the email address you provided as soon as I'm able.</p>
              <p>Talk to you soon!</p>
            </div>
          </div>
        </ContactMain>
      </MainStyles>
    );
  }
}

export default Contact;