import theme_pattern from "../../assets/theme_pattern.svg"
import "./Contact.css"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Failed to send message.");
        });
    };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let&apos;s talk</h1>
                <p>
                    I am available for Summer 2025 Internship. Connect with me through email or phone.
                </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail" />
                            <p>yishak701@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call" />
                            <p>+1 513-555-5555</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location" />
                            <p>Cincinnati, Ohio</p>
                        </div>
                    </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" placeholder="Enter your Name" />
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" placeholder="Enter your Email" />
                <label htmlFor="message">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Write your message here"></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
