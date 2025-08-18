import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/cardsSlice';

interface AddCardModalProps {
  onClose: () => void;
}

const generateCardNumber = () => {
  let cardNumber = '';
  for (let i = 0; i < 16; i++) {
    cardNumber += Math.floor(Math.random() * 10);
  }
  return cardNumber.match(/.{1,4}/g)?.join(' ') || '';
};

const generateExpiryDate = () => {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const year = String(new Date().getFullYear() % 100 + Math.floor(Math.random() * 10)).padStart(2, '0');
  return `${month}/${year}`;
};

const AddCardModal: React.FC<AddCardModalProps> = ({ onClose }) => {
  const [cardName, setCardName] = useState('');
  const [cardNumber] = useState(generateCardNumber);
  const [expiry] = useState(generateExpiryDate);
  const [cvv] = useState(String(Math.floor(Math.random() * 900) + 100));

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCard({ id: Date.now().toString(), name: cardName, cardNumber, expiry, cvv, isFrozen: false, spendLimit: 0, transactions: [] }));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardName">Card Name</label>
            <input
              type="text"
              id="cardName"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" value={cardNumber} readOnly />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="text" value={expiry} readOnly />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" value={cvv} readOnly />
          </div>
          <button type="submit" className="submit-button">Add Card</button>
          <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
