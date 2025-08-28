import React from "react";
import "./Hero.css";
import { Calendar, BarChart3, Pencil, Rocket } from "lucide-react";

const steps = [
  {
    title: "Research",
    icon: Calendar,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    title: "Analyze",
    icon: BarChart3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    title: "Design",
    icon: Pencil,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
  {
    title: "Launch",
    icon: Rocket,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
  },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h2>Work Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendisse imperdiet,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
