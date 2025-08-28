
import React, { useState, useEffect } from 'react';
import './CompetitiveProgramming.css';

const cardsData = [
  { image: 'https://via.placeholder.com/350x250', alt: 'Card 1', date: '22 Oct, 2020 / 246 Comments', text: 'Lorem ipsum dolor sit consea. Nulla purus arcu' },
  { image: 'https://via.placeholder.com/350x250', alt: 'Card 2', date: '22 Oct, 2020 / 246 Comments', text: 'Lorem ipsum dolor sit consea. Nulla purus arcu' },
  { image: 'https://via.placeholder.com/350x250', alt: 'Card 3', date: '22 Oct, 2020 / 246 Comments', text: 'Lorem ipsum dolor sit consea. Nulla purus arcu' },
  { image: 'https://via.placeholder.com/350x250', alt: 'Card 4', date: '22 Oct, 2020 / 246 Comments', text: 'Lorem ipsum dolor sit consea. Nulla purus arcu' },
  { image: 'https://via.placeholder.com/350x250', alt: 'Card 5', date: '22 Oct, 2020 / 246 Comments', text: 'Lorem ipsum dolor sit consea. Nulla purus arcu' },
];

const CompetitiveProgramming = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
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
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className={`card ${activeIndex === index ? 'active' : ''}`} key={index}>
            <img src={card.image} alt={card.alt} />
            <div className="card-content">
              <span>{card.date}</span>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container">
        {cardsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
