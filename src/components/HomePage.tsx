import React, { useEffect, useState } from 'react';
import Sidebar from './layout/Sidebar';
import CardDisplay from './layout/CardDisplay';
import CardControls from './layout/CardControls';
import TransactionList from './layout/TransactionList';
import Header from './Header';
import Tabs from './layout/Tabs';
import Carousel from './layout/Carousel';
import AddCardModal from '../components/AddCardModal';
import CardDetails from './layout/CardDetails';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchCardsAsync } from '../store/cardsSlice';

type HomePageProps = {
  name?: string;
};

const HomePage: React.FC<HomePageProps> = ({ name = 'World' }) => {
  console.log('HomePage component rendered');
  const dispatch: AppDispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards.cards);
  const [activeTab, setActiveTab] = useState<1 | 2>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log('useEffect in HomePage called');
    dispatch(fetchCardsAsync());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div>
          <Header onNewCardClick={() => setIsModalOpen(true)} />
        </div>
        <Tabs activeTab={activeTab} onChange={setActiveTab} />
        <div className="content-grid">
            <div className="left-col">
              {cards.length > 0 && <Carousel cards={cards} />}
              <CardControls />
            </div>
            <div className="right-col">
              <CardDetails />
              <TransactionList />
            </div>
        </div>
        
      </div>
      {isModalOpen && <AddCardModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default HomePage;


