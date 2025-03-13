import React from 'react';

interface BalanceProps {
  balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
  return (
    <div className="card shadow-sm border rounded-3 mx-auto" style={{ maxWidth: '18rem' }}>
      <div className="card-body text-center">
        <h2 className="card-title text-primary mb-3">Current Balance</h2>
        <p className="h1 text-success fw-bold">
          ${balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Balance;