// balance component
// deposit mood saving component
// goal wish list component
// on the upper right corner account info
import React, { useState } from 'react';
import Balance from '../components/Balance';
import DepositMoodSaving from '../components/DepositMoodSaving';

const Dashboard: React.FC = () => {
  const [userBalance, setUserBalance] = useState(1500.0);

  const handleDeposit = (amount: number) => {
    setUserBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="display-4">Dashboard</h1>
      </header>

      <main className="row g-4">
        <div className="col-md-6 col-lg-4">
          <Balance balance={userBalance} />
        </div>
        <div className="col-md-6 col-lg-4">
          <DepositMoodSaving onDeposit={handleDeposit} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;