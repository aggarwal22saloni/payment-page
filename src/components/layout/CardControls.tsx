import React from 'react';
import FreezeIcon from './../../assets/Freeze card.svg';
import LimitIcon from './../../assets/Set spend limit.svg';
import GPayIcon from './../../assets/GPay.svg';
import ReplaceIcon from './../../assets/Replace card.svg';
import DeactivateIcon from './../../assets/Deactivate card.svg';

type Control = { label: string; icon: string };

const controls: Control[] = [
  { label: 'Freeze card', icon: FreezeIcon },
  { label: 'Set spend limit', icon: LimitIcon },
  { label: 'Add to GPay', icon: GPayIcon },
  { label: 'Replace card', icon: ReplaceIcon },
  { label: 'Cancel card', icon: DeactivateIcon }
];

const CardControls: React.FC = () => (
  <div className="card-controls">
    {controls.map((control) => (
      <div className="control" key={control.label}>
        <div className="control-icon">
          <img src={control.icon} alt="" />
        </div>
        <div className="control-label">{control.label}</div>
      </div>
    ))}
  </div>
);

export default CardControls;
