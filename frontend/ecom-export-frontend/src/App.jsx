import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from "./pages/Auth/LoginForm";
import RegisterForm from './pages/Auth/RegisterForm';
import Auth from "./pages/Auth/Auth";


function App() {

  return (
    <Router>
      <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </>

    </Router>
  );
}

export default App;




