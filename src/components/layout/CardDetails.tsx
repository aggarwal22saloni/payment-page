import React from 'react';
import CardIcon from './../../assets/card_detail.svg';
import DownArrow from './../../assets/down-arrow.svg';

const CardDetails: React.FC = () => {
  return (
    <div className="panel card-details">
      <div className="panel-header">
        <span className="panel-header-left">
          <img className="panel-icon" src={CardIcon} alt="" />
          <div className="panel-title">Card details</div>
        </span>
  
        <img className="panel-toggle" src={DownArrow} alt="" />
      </div>
      <div className="panel-body">
        {/* Card details content */}
      </div>
    </div>
  );
};

export default CardDetails;


