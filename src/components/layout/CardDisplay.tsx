import React, { useState } from 'react';
import AspireLogo from './../../assets/Aspire Logo.svg';
import EyeIcon from './../../assets/remove_red_eye-24px.svg';
import VisaLogo from './../../assets/Visa Logo.svg';
import { Card } from '../types';

interface CardDisplayProps {
  card: Card;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card }) => {
  const [showCardNumber, setShowCardNumber] = useState(false);

  const toggleCardNumberVisibility = () => {
    setShowCardNumber(!showCardNumber);
  };

  const formatCardNumber = (cardNumber: string) => {
    if (showCardNumber) {
      return cardNumber.match(/.{1,4}/g)?.join(' ') || '';
    } else {
      const lastFour = cardNumber.slice(-4);
      return `●●●● ●●●● ●●●● ${lastFour}`;
    }
  };

  return (
    <div className="card-display">
      <button className="show-number" onClick={toggleCardNumberVisibility}>
        <img src={EyeIcon} alt="" />
        <span>{showCardNumber ? 'Hide card number' : 'Show card number'}</span>
      </button>
      <div className="card">
        <img className="card-brand" src={AspireLogo} alt="aspire" />
        <div className="card-holder">{card.name}</div>
        <div className="card-number">{formatCardNumber(card.cardNumber)}</div>
        <div className="card-meta">
          <span>Thru: {card.expiry}</span>
          <span>CVV: {card.cvv}</span>
        </div>
        <div className="brand"><img src={VisaLogo} alt="visa" /></div>
      </div>
    </div>
  );
};

export default CardDisplay;