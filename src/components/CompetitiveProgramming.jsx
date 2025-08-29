import React, { useState, useEffect } from 'react';
import './CompetitiveProgramming.css';
import CF from '../assets/codeforces_logo.png'
import Atcoder from '../assets/atcoder.png'
import CodeChef from '../assets/CodeChef_Logo.svg.png'
import Spoj from '../assets/spoj.jpeg'

const cardsData = [
  { image: 'https://leetcard.jacoblin.cool/kinan19?theme=dark&font=Noto%20Sans%20Meetei%20Mayek&ext=heatmap', alt: 'LeetCode', url: 'https://leetcode.com/u/kinan19/', text: 'An online platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.' },
  { image: CF, alt: 'Codeforces', url: 'https://codeforces.com/profile/USACOW', text: 'A popular online platform for competitive programming that hosts regular contests where participants compete to solve algorithmic problems.' },
  { image: Atcoder, alt: 'AtCoder', url: 'https://atcoder.jp/users/Gankutsuou', text: 'A Japanese website that hosts weekly online programming competitions for a wide range of skill levels, from beginners to experts.' },
  { image: CodeChef, alt: 'CodeChef', url: 'https://www.codechef.com/users/gankutsuou', text: 'An online platform for learning and improving coding skills through practice problems and competitive programming contests.' },
  { image: Spoj, alt: 'SPOJ', url: 'https://www.spoj.com/myaccount/', text: 'An online platform with a vast collection of programming problems for practice, and for hosting programming contests.' },
];

const CompetitiveProgramming = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prevIndex) => {
          if (prevIndex === -1) {
            return cardsData.length - 1;
          }
          return (prevIndex - 1 + cardsData.length) % cardsData.length;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className="competitive-programming">
      <h2>Competitive Programming</h2>
      <p>Competitive programming is a mind sport where participants solve programming problems under strict time and memory 
        constraints, typically within a contest setting.
      <br /><br />I enjoy doing problem-solving daily! <br/> Here are some of my competitive programming profile on various website.</p>
      <div className="card-container" onMouseLeave={() => setActiveIndex(-1)}>
        {cardsData.map((card, index) => (
          <div
            className={`card ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img src={card.image} alt={card.alt} />
            <div className="card-content">
              <span>{card.alt}</span>
              <p>{card.text}</p>
              <a href={card.url} target="_blank" rel="noopener noreferrer" className="case-study-btn">View Profile</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveProgramming;