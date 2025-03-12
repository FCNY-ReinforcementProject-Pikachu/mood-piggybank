// src/pages/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LandingPage: React.FC = () => {
  const handleLogin = (credentials: { username: string; password: string }) => {
    console.log('Logging in with:', credentials);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Mood Piggybank</h1>
      {/* Centered message div */}
      <div
        style={{
          margin: '2rem auto',
          maxWidth: '600px',
          fontSize: '1.2rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px'
        }}
      >
        Save towards your goals and track your spending habits based on mood.
      </div>
      {/* Login form */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Login</h2>
        <LoginForm onLogin={handleLogin} />
      </div>
      {/* New User message with link to Signup */}
      <div style={{ marginTop: '1rem' }}>
        <span>New User? </span>
        <Link to="/signup">Sign up here</Link>
      </div>
    </div>
  );
};

export default LandingPage;
