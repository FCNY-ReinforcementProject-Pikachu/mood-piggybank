import React, { useState } from 'react';


interface DepositEntry {
  mood: string;
  amount: number;
  timestamp: string;
}

interface DepositMoodSavingProps {
  onDeposit: (amount: number) => void;
}

const DepositMoodSaving: React.FC<DepositMoodSavingProps> = ({ onDeposit }) => {
  const [mood, setMood] = useState('');
  const [amount, setAmount] = useState('');
  const [deposits, setDeposits] = useState<DepositEntry[]>([]);

  const handleConfirm = async () => {

    // fetch('localhost:8080/deposit', {
    //   method: 'POST',
    //   headers: {
    //   'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({amount, mood}),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
    // };
      
    const numericAmount = parseFloat(amount);
    if (mood && numericAmount > 0) {
      const newDeposit: DepositEntry = {
        mood,
        amount: numericAmount,
        timestamp: new Date().toLocaleString(),
      };

      setDeposits((prevDeposits) => [...prevDeposits, newDeposit]);
      onDeposit(numericAmount);
      setMood('');
      setAmount('');
    }
  };

  return (
    <div className="card shadow-sm border rounded-3 p-4">
      <h2 className="component-title">Deposit Mood Saving</h2>

      <input
        type="text"
        placeholder="How do you feel?"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="form-control mb-3"
      />

      <input
        type="number"
        placeholder="Amount to save..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-control mb-3"
      />

      <button
        onClick={handleConfirm}
        className="btn btn-success me-2"
      >
        Confirm
      </button>

      <div className="mt-4">
        <h3 className="h5">Deposit History</h3>
        {deposits.length === 0 ? (
          <p>No deposits yet.</p>
        ) : (
          <ul className="list-group">
            {deposits.map((entry, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{entry.mood}</strong>: +${entry.amount}
                  <div className="text-muted small">{entry.timestamp}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DepositMoodSaving;