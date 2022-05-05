import React, { useState } from 'react';
import './App.css';
import BalanceWindow from './components/BalanceWindow/BalanceWindow';
import DepositModal from './components/DepositModal/DepositModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  return (
    <div>
      <BalanceWindow setIsModalOpen={setIsModalOpen}/>
      {isModalOpen && <DepositModal setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
}

export default App;
