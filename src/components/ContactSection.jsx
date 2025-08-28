import React, { useState } from 'react';
import './ContactSection.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    // if (!formData.budget.trim()) newErrors.budget = 'Budget is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
      // You can add actual submission logic here
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: <span>kinan.saad.19@gmail.com</span></p>
          <p>Phone: <span>+963-991176374</span></p>

          <div className="social-icons">
            <a href="https://www.facebook.com/kinan.saad.7/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/kinan-saad/" target='_blank' rel="noopener norefferer"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h2>Let’s discuss your Project</h2>
          <p className="subtext">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />

            <input
              type="text"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleChange}
            />
            {errors.budget && <span className="error">{errors.budget}</span>}

            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="error">{errors.subject}</span>}

            <textarea
              name="description"
              placeholder="Project Description*"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <span className="error">{errors.description}</span>}

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}