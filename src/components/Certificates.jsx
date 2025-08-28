import React from "react";
import "./Certificates.css";
import MetaLogo from '../assets/Meta_Logo.jpg';
import ai_ibm from '../assets/ai-ibm.png';
import icpc_logo from '../assets/ICPC_Foundation_logo.svg.png'
import gt from '../assets/georgia-tech-logo.png'
import acquaint_logo from '../assets/acquaint-logo.png'
import PA from '../assets/paper-airplanes.png'

const certificates = [
  {
    title: "Meta Front-End Developer",
    category: "Web Development",
    description:
      "Certificate of completion for mastering React, JavaScript, and modern frontend practices.",
    image: MetaLogo, // Replace with your image
    url: "https://coursera.org/share/f96b3703e15a6694721661da91dfaf10",
  },
  {
    title: "Python for Data Science, AI & DevelopmentData Structures & Algorithms",
    category: "Data Analysis",
    description:
      "Certificate showcasing problem-solving and algorithmic efficiency with C++.",
    image: ai_ibm,
    url: "https://www.credly.com/badges/4730c796-9c31-4878-b266-583acd28294d/public_url",
  },
  {
    title: "Problem-Solving & Competitive Programming",
    category: "Algorithms & Data Structures",
    description:
      "Certificates covering Experiece and DSA, Competitive Programming, and Problem-Solving. They reflect my 5+ years journey in this field authorized by ICPC.",
    image: icpc_logo,
    url: "https://icpc.global/ICPCID/W7BTHQ4RQ1AW",
  },
  {
    title: "Write Professional Emails in English",
    category: "Communication Skills",
    description:
      "An online non-credit course authorized by Georgia Institute of Technology and offered through Coursera.",
    image: gt,
    url: "https://coursera.org/share/ace71f93e46e108e971ecc94305f1fa1",
  },
  {
    title: "Acquaint Volunteer Certificate of Appreciatio (10+ Hours)",
    category: "Communication & Volunteering",
    description:
      "Connecting with people worldwide to promote peace, overcome hate, and strengthen global communication.",
    image: acquaint_logo,
    url: "https://www.acquaint.org/shared_certificates/1df2aed6-e87f-43aa-9076-79c7022bc751",
  },
  {
    title: "Paper-Airplanes English Program",
    category: "English & Communication",
    description:
      "Certificate of Graduation acknowledges the completion of all the requirements to graduate from the English Program at Paper Airplanes.",
    image: PA,
    url: "https://drive.google.com/file/d/18aVIC1yaaUBDmjSPIRKEDpP1evKNGrF_/view?usp=sharing",
  },
];

export default function Certificates() {
  return (
    <section className="certificates-section">
      <div className="certificates-container">
        <h2>Certificates</h2>
        <p>
          Here are some of my certifications from various platforms and
          institutions, highlighting my skills and learning journey.
        </p>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-content">
                <span className="certificate-category">{cert.category}</span>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <button className="case-study-btn">
                        View Certificate →
                    </button>
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* <div className="more-projects">
          <button className="more-btn">More Certificates</button>
        </div> */}
      </div>
    </section>
  );
}
