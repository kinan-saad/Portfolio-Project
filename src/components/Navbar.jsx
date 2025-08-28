// src/components/Navbar.jsx
import './Navbar.css'
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // scrolling down → hide
      } else {
        setIsVisible(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-logo" onClick={() => handleScroll("introduction")}>
        <div className="logo-circle">K</div>
        <span className="logo-text">Kinan</span>
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li onClick={() => handleScroll("introduction")}>Introduction</li>
        <li onClick={() => handleScroll("works")}>Works</li>
        <li onClick={() => handleScroll("certificates")}>Certificates</li>
        <li onClick={() => handleScroll("competitive")}>Competitive Programming</li>
        <li onClick={() => handleScroll("activities")}>Activities</li>
        <li onClick={() => handleScroll("cta")}>Call to Action</li>
      </ul>

      <button className="contact-btn" onClick={() => handleScroll("contact")}>
        Contact
      </button>

      {/* Mobile menu toggle */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
