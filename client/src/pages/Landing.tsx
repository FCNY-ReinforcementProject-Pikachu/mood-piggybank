// src/pages/LandingPage.tsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const LandingPage: React.FC = () => {
  const handleLogin = (credentials: { username: string; password: string }) => {
    console.log('Logging in with:', credentials);
  };

  const handleSignup = (credentials: { username: string; password: string }) => {
    console.log('Signing up with:', credentials);
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
      {/* Login and Signup forms */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
        <div>
          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
        </div>
        <div>
          <h2>Signup</h2>
          <SignupForm onSignup={handleSignup} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
