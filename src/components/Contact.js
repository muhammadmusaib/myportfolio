import React, { useRef } from "react";
import "./Contact.css";
import linkedin from "../linkedinlogo1.jpg";
import insta from "../insta1.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_1clglnl", "template_t62u673", form.current, {
        publicKey: "cEumFebvTh21untC-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container">
      <div id="contact">
        <h3
          className="ContactPagetitle"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Contact Me
        </h3>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="Contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="to_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitbtn" type="submit" value="send">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/themusaibkhan/">
              <img src={linkedin} alt="linkedin" className="link mx-4" />
            </a>
            <a href="https://www.instagram.com/muhammadmusaib_/">
              <img src={insta} alt="instagram" className="link mx-4" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
