import React from "react";
import { Mail } from "lucide-react";
import "./CallToAction.css";

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Have an Idea in Mind?</h2>
        <p>
          If you have any ideas or projects you’d like to bring to life, feel free
          to reach out. I’d be happy to discuss them with you!
        </p>
        <a
          href="mailto:kinan.saad.19@gmail.com"
          className="cta-button"
        >
          <Mail size={22} className="cta-icon" />
          Send me an email
        </a>
      </div>
    </section>
  );
}
