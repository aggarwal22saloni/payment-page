import React from 'react';
import { Transaction } from '../types';
import TransactionItem from './TransactionItem';
import TransactionIcon from './../../assets/transaction.svg';
import DownArrow from './../../assets/down-arrow.svg';
import TransLogo from './../../assets/file-storage.svg';

const sampleTransactions: Transaction[] = [
  { id: 1, merchant: 'Hamleys', date: '20 May 2020', amount: 150, type: 'refund', icon: TransLogo },
  { id: 2, merchant: 'Hamleys', date: '21 May 2020', amount: 152, type: 'charge', icon: TransLogo },
  { id: 3, merchant: 'Hamleys', date: '22 May 2020', amount: 153, type: 'charge', icon: TransLogo },
  { id: 4, merchant: 'Hamleys', date: '23 May 2020', amount: 154, type: 'charge', icon: TransLogo  }
];

const TransactionList: React.FC = () => (
  <div className="panel transactions-panel">
    <div className="panel-header">
        <span className="panel-header-left">
          <img className="panel-icon" src={TransactionIcon} alt="" />
          <div className="panel-title">Recent Transactions</div>
        </span>
  
        <img className="panel-toggle" src={DownArrow} alt="" />
    </div>
    <div className="panel-body">
      {sampleTransactions.map((tx, index) => (
        <TransactionItem key={tx.id} transaction={tx} isLast={index === sampleTransactions.length - 1} />
      ))}
    </div>
    <div className="panel-view-all">View all card transactions</div>
  </div>
);

export default TransactionList;
