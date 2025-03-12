import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import SignupPage from './pages/Signup'


  const App: React.FC = () => {
    return (
     <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
     </Router>
      
  
    );
  };

export default App
