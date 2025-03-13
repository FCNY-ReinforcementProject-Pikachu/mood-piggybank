// balance component
// deposit mood saving component
// goal wish list component
// on the upper right corner account info
import React, { useState } from 'react';
import Balance from '../components/Balance';
import DepositMoodSaving from '../components/DepositMoodSaving';
import GoalsWishList from '../components/GoalWishList';
import '../styles/Dashboard.css'; // Import custom CSS

const Dashboard: React.FC = () => {
  const [userBalance, setUserBalance] = useState(0);

  const handleDeposit = (amount: number) => {
    setUserBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h3>Dashboard</h3>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-center">
          <Balance balance={userBalance} />
        </div>

        <div className="dashboard-bottom">
          <DepositMoodSaving onDeposit={handleDeposit} />
          <GoalsWishList balance={userBalance} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
