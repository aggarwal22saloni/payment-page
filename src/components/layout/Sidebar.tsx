import React from 'react';
import Logo from './../../assets/Logo.svg';
import Home from './../../assets/Home.svg';
import Card from './../../assets/Card.svg';
import Payments from './../../assets/Payments.svg';
import Credit from './../../assets/Credit.svg';
import Account from './../../assets/Account.svg';

const Sidebar: React.FC = () => (
  <div>
    <div className="logo">
      <img src={Logo} alt="Aspire logo" />
      <div className="logo-text">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>
    </div>
    <div className="menu">
      <div className="menu-item">
        <img src={Home} alt="Home logo" />
        <span>Home</span>
      </div>
      <div className="menu-item">
        <img src={Card} alt="Card logo" />
        <span>Cards</span>
      </div>
      <div className="menu-item">
        <img src={Payments} alt="Payments logo" />
        <span>Payments</span>
      </div>
      <div className="menu-item">
        <img src={Credit} alt="Credit logo" />
        <span>Credit</span>
      </div>
      <div className="menu-item">
        <img src={Account} alt="Account logo" />
        <span>Settings</span>
      </div>
    </div>
  </div>
);

export default Sidebar;