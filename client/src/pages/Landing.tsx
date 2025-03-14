import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LandingPage: React.FC = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  const handleLogin = async (credentials: { username: string; password: string }) => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        // alert('Login successful! Welcome back.');

        // Store user data in localStorage (optional)
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        console.error('Login failed:', data.error);
        alert(`Login failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again.');
    }
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
