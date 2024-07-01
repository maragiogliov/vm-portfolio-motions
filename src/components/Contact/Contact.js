import React from "react";
import './Contact.css';
import Header from '../Header/Header'


const Contact = () => {

  return (
    <>
              <Header />

      <section className="contact-container-form">
        <h4>Let's build something together</h4>
        <h1 className="contact-me">Contact Me</h1>
      
      

    
    <ul className="contactme-list">
        <button className="button"><a href="mailto:victormaragioglio1228@gmail.com">EMAIL</a></button>
        <button className="button"> <a href="https://www.linkedin.com/in/victor-maragioglio-ba3073214/" target="_blank" rel="noreferrer">LinkedIn</a></button>
        <button className="button"> <a href="https://github.com/maragiogliov" target="_blank" rel="noreferrer">GitHub</a></button>
    </ul>
      </section>

    </>
  );
};

export default Contact;

