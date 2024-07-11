import React from "react";
import './Contact.css';
import Header from '../Header/Header'


const Contact = () => {

  return (
    <>
              <Header />
              <div className="contact-container">

                <div className="contact-container-title">

               
                  <div className="contact-img-title-container">
                    <img className="contact-img"></img>
                    <h2>Let's start a </h2>
                  </div>
                  <h2>project together</h2>

                </div>
                <section>
            <svg
              className="flecha-icon"
              width="15"
              height="15"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="13" y="45" width="38" height="6" fill="black" />
              <rect
                x="51"
                y="13"
                width="38"
                height="6"
                transform="rotate(90 51 13)"
                fill="black"
              />
              <rect
                x="4.67915"
                y="0.436523"
                width="65.6669"
                height="6"
                transform="rotate(45 4.67915 0.436523)"
                fill="black"
              />
            </svg>
        
                  </section>


              <div className="contact-form-details-container">

                <div className="contact-container-form">

                  <form class="contact-minimal-form">
                    <div class="contact-form-group">
                      <label for="name">What's your name?</label>
                      <input type="text" id="name" name="name" placeholder="John Doe" required/>
                      <span class="contact-required-indicator">*</span>
                    </div>
                    <div class="contact-form-group">
                      <label for="email">What's your email?</label>
                      <input type="email" id="email" name="email" placeholder="john@doe.com" required/>
                      <span class="contact-required-indicator">*</span>
                    </div>
                    <div class="contact-form-group">
                      <label for="organization">What's the name of your organization?</label>
                      <input type="text" id="organization" name="organization" placeholder="John & Doe ®"/>
                    </div>
                    <div class="contact-form-group">
                      <label for="services">What services are you looking for?</label>
                      <input type="text" id="services" name="services" placeholder="Web Design, Web Development ..."/>
                    </div>
                    <div class="contact-form-group">
                      <label for="message">Your message</label>
                      <textarea id="message" name="message" placeholder="Hello Victor, can you help me with ..." required></textarea>
                      <span class="contact-required-indicator">*</span>
                    </div>
                    <button type="submit" class="contact-submit-button">Submit</button>
                  </form>

                </div>
                <div className="contact-container-details">

                </div>

              </div>


              </div>

      

    </>
  );
};

export default Contact;

