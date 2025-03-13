// src/pages/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LandingPage: React.FC = () => {
  const handleLogin = (credentials: { username: string; password: string }) => {
    console.log('Logging in with:', credentials);
  };

  return (
    <div className="container text-center py-5">
      <h1 className="display-4 mb-4">Welcome to Mood Piggybank</h1>

      <div className="alert alert-secondary mx-auto" style={{ maxWidth: '600px' }}>
        Save towards your goals and track your spending habits based on mood.
      </div>

      <div className="mt-5">
        <h2 className="h4">Login</h2>
        <LoginForm onLogin={handleLogin} />
      </div>

      <div className="mt-3">
        <span>New User? </span>
        <Link to="/signup" className="btn btn-link">Sign up here</Link>
      </div>
    </div>
  );
};

export default LandingPage;