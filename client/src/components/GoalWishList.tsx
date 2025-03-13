import React, { useState } from 'react';

interface GoalEntry {
  item: string;
  price: number;
}

interface GoalsProps {
  balance: number;
}

const Goals: React.FC<GoalsProps> = ({ balance }) => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [goals, setGoals] = useState<GoalEntry[]>([]);

  // Save a new goal
  const handleSave = () => {
    const numericPrice = parseFloat(price);
    if (item && numericPrice > 0) {
      setGoals([...goals, { item, price: numericPrice }]);
      setItem('');
      setPrice('');
    }
  };

  // Cancel the input
  const handleCancel = () => {
    setItem('');
    setPrice('');
  };

  // Delete a goal by index
  const handleDelete = (index: number) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <div className="card p-4 border">
      <h2 className="h5 mb-3">Goals/Wish List</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Goal Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="btn btn-primary me-2" onClick={handleSave}>Save</button>
        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      </div>

      <ul className="list-group">
        {goals.map((goal, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <span className="fw-bold">{goal.item}</span> - <span>${goal.price.toFixed(2)}</span>
              <br />
              <small className={balance >= goal.price ? "text-success" : "text-danger"}>
                {balance >= goal.price
                  ? "Good news, you have enough funding for this goal!"
                  : `Save more for this funding? You need $${(goal.price - balance).toFixed(2)} more.`}
              </small>
            </div>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
