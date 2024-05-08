import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './assets/pages/LoginPage';
import HomePage from './assets/pages/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/"
          element={isLoggedIn ? <HomePage userLogin="Bob" /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
