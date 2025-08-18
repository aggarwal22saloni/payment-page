import React, { useState } from 'react';

interface HeaderProps {
  onNewCardClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewCardClick }) => {
  const [availableBlnc, setAvailableBlnc] = useState('3000');

  return (
    <div className="header">
      <div className="balance">
        <p className="balance-label">Available balance</p>
        <div className="amount-row">
          <span className="currency-pill">S$</span>
          <span className="amount">{availableBlnc}</span>
        </div>
      </div>
      <button className="new-card" onClick={onNewCardClick}><span className="plus">+</span> New card</button>
    </div>
  );
}

export default Header;
