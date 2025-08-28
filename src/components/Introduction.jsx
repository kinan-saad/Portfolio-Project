// src/components/Introduction.jsx
import profileImg from "../assets/profile.jpeg"; // replace with your image
import './Introduction.css'

const Introduction = () => {
  return (
    <section id="introduction" className="introduction-section">
      <div className="intro-content">
        {/* Left text side */}
        <div className="intro-text">
          <h1>
            Hello, I’m <br />
            <span className="highlight">Kinan Saad</span>
          </h1>
          <p>
            I'm a <strong>Competitive Programmer</strong> and{" "}
            <strong>Developer</strong> based in Syria. I strive to
            build immersive, beautiful and effecient web applications through carefully
            crafted code and user-centric design.
          </p>

          <button className="say-hello-btn">Say Hello!</button>

          {/* Stats */}
          <div className="intro-stats">
            <div className="stat-card">
              <h2>5+ Y.</h2>
              <p>Experience</p>
            </div>
            <div className="stat-card">
              <h2>50+</h2>
              <p>Project Completed</p>
            </div>
            <div className="stat-card">
              <h2>4000+</h2>
              <p>Problem Solved</p>
            </div>
          </div>
        </div>

        {/* Right image side */}
        <div className="intro-image">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
