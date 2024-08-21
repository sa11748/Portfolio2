
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank"  rel="noopener noreferrer" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/sa11748" target="_blank"  rel="noopener noreferrer" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:shubhangishubhi490@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
