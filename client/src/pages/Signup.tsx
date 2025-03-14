import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

const SignupPage: React.FC = () => {
  const handleSignup = async (credentials: { username: string; password: string }) => {
    try {
      console.log('credentials: ', credentials)
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        alert('Account created successfully! You can now log in.');
      } else {
        console.error('Signup failed:', data.error);
        alert(`Signup failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Something went wrong. Please try again.');
    }
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
