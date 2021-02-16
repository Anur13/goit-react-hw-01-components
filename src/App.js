import './App.css';
import React from 'react';

import UserSection from './components/User-Section/UserSection';
import StatisticsSection from './components/Statistics-Section/StatisticsSection';
import FriendSectionsList from './components/Friends-list-section/FriendsSectionsList';
import TransactonsSections from './components/Transactions-section/TransactonsSections';

function App() {
  return (
    <div className="container">
      <UserSection />
      <StatisticsSection />
      <FriendSectionsList />
      <TransactonsSections />
    </div>
  );
}

export default App;
