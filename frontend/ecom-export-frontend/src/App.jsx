import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <nav>
          <Link to="/">Home</Link> | <Link to="/About">About Us</Link>
        </nav>

        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
