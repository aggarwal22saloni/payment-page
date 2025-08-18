import React from 'react';
import { Transaction } from '../types';
import NextIcon from './../../assets/next.svg';
import CreditIcon from './../../assets/small-credit.svg';

interface Props {
  transaction: Transaction;
  isLast: boolean;
}

const TransactionItem: React.FC<Props> = ({ transaction, isLast }) => {
  const { merchant, date, amount, type, icon } = transaction;
  const isRefund = type === 'refund';

  const itemStyle: React.CSSProperties = {
    borderBottom: isLast ? 'none' : '1px solid #F0F0F0',
    padding: '20px 0',
  };

  return (
    <div className="transaction-item" style={itemStyle}>
      <div className="tx-left">
        <div className="tx-icon">
          <img src={icon} alt="Transaction Icon" />
        </div>
        <div className="tx-texts">
          <div className="tx-merchant">{merchant}</div>
          <span className="tx-date">{date}</span>
          {isRefund ? <div className="tx-note">
            <div className="tx-note-icon"><img src={CreditIcon} alt="Transaction Icon" /></div>Refund on debit card</div>
            : <div className="tx-note">
            <div className="tx-note-icon"><img src={CreditIcon} alt="Transaction Icon" /></div>Charged to debit card</div>
          }
        </div>
      </div>
      <div className={`tx-amount ${isRefund ? 'refund' : 'charge'}`}>
        {isRefund ? `+ S$ ${amount}` : `- S$ ${amount}`}
      <img className="next-icon" src={NextIcon} alt="Transaction Icon" />
      </div>
    </div>
  );
};

export default TransactionItem;
