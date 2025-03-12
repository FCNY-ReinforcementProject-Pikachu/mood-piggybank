// src/pages/SignupPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

const SignupPage: React.FC = () => {
  const handleSignup = (credentials: { username: string; password: string }) => {
    console.log('Signing up with:', credentials);
    // Here you would add logic to call your signup API
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Create an Account</h1>
      <div style={{ marginTop: '2rem' }}>
        <SignupForm onSignup={handleSignup} />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <span>Already have an account? </span>
        <Link to="/">Login here</Link>
      </div>
    </div>
  );
};

export default SignupPage;
