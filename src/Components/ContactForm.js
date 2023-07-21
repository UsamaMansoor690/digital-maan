import React from "react";
import "../css/contactForm.css";

export default function ContactForm() {
  return (
    <div className="container-fluid contact-form">
      <form action="#">
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Full Name"
            />
            <br />
          </div>
        </div>

        <div className="col-lg-12">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Your Email Address"
          />
          <br />
        </div>

        <div className="col-lg-12">
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name="message"
            className="input"
            rows="5"
            placeholder="Enter Message"
          ></textarea>
          <br />
        </div>

        <div className="col-lg-12">
          <input type="submit" value="Send Message" className="contact-btn" />
        </div>
      </form>
    </div>
  );
}
