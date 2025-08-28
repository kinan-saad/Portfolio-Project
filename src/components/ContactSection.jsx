import React from 'react';
import './ContactSection.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: <span>kinan.saad.19@gmail.com</span></p>
          <p>Phone: <span>+963-991176374</span></p>

          <div className="social-icons">
            <a href="https://www.facebook.com/kinan.saad.7/" target='_blank' rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/kinan-saad/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h2>Let’s discuss your Project</h2>
          <p className="subtext">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
          <form>
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Budget*" required />
            <input type="text" placeholder="Subject*" required />
            <textarea placeholder="Project Description*" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}