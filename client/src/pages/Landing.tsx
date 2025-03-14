import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../styles/LandingPage.css'; // Import the custom CSS file

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

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
        localStorage.setItem('user', JSON.stringify(data.user));
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
    <div className="landing-page">
      
      {/* Brand Section */}
      <div className="landing-brand">
        <h1>Mood Piggybank</h1>
        <p>Save towards your goals and track spending based on your mood.</p>
      </div>

      {/* Login Section */}
      <div className="landing-login">
        <h2>Welcome Back</h2>
        <LoginForm onLogin={handleLogin} />
        <div className="landing-footer">
          <span>New User? </span>
          <Link to="/signup">Create an account</Link>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
