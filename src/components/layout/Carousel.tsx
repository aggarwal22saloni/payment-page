import React, { useState } from 'react';
import CardDisplay from './CardDisplay';
import { Card } from '../types';

interface CarouselProps {
  cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//     );
//   };

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div className="carousel-item" key={card.id}>
            <CardDisplay card={card} />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
