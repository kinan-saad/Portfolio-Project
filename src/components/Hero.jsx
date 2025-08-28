import React from "react";
import "./Hero.css";
import { Calendar, BarChart3, Pencil, Rocket, PersonStanding, Citrus, ShoppingCart } from "lucide-react";

const steps = [
  {
    title: "Portfolio",
    icon: PersonStanding,
    text: "Portfolio that shows off my skills and competences.",
    url: "https://github.com/kinan-saad/Portfolio-Project",
  },
  {
    title: "Little Lemon Restaurant",
    icon: Citrus,
    text: "Enjoy the experience at Little Lemon restaurant! There is a reservation feature at our website.",
    url: "https://github.com/kinan-saad/coursera-meta-front-end-capstone",
  },
  {
    title: "Item Store",
    icon: ShoppingCart,
    text: "MERN project with a data base for items.",
    url: "https://github.com/kinan-saad/product-store-mern",
  },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h2>Work Process</h2>
          <p>
            Every project starts with a challenge — and that’s where I thrive. Whether it’s untangling a complex user flow,
            optimizing performance under tight constraints, or translating abstract ideas into clean, intuitive interfaces,
            I enjoy finding thoughtful solutions that make things work better.
          </p>
          <p>
            These projects each pushed me to think differently,
            adapt quickly, and build with purpose. I’m proud of what they taught me,
            and I’m always looking forward to the next puzzle.
          </p>
        </div>

        <div className="hero-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="iconBox">
                <step.icon size={28} strokeWidth={2} color="#fff" />
              </div>
              <h3>{index + 1}. {step.title}</h3>
              <p>{step.text}</p>
              <a href={step.url} target="_blank" rel="noopener noreferrer">
                <button className="view-project-btn">View Project →</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
