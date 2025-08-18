import React from 'react';

type ActiveTab = 1 | 2;

type TabsProps = {
  activeTab: ActiveTab;
  onChange: (tab: ActiveTab) => void;
};

const Tabs: React.FC<TabsProps> = ({ activeTab, onChange }) => {
  return (
    <div className="tabs" role="tablist" aria-label="Card tabs">
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 1}
        className={`tab ${activeTab === 1 ? 'active' : ''}`}
        onClick={() => onChange(1)}
      >
        My debit cards
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={activeTab === 2}
        className={`tab ${activeTab === 2 ? 'active' : ''}`}
        onClick={() => onChange(2)}
      >
        All company cards
      </button>
    </div>
  );
};

export default Tabs;


