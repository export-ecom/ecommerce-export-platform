import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
// import Login from "./pages/Auth/LoginForm";
// import RegisterForm from './pages/Auth/RegisterForm';
import Auth from "./pages/Auth/Auth";
import FAQ from './pages/FAQ/Faq';
import Terms from "./pages/Policies/Terms";
import Privacy from "./pages/Policies/Privacy";
import ShippingReturn from "./pages/Policies/ShippingReturn";
import BlogList from "./pages/Blog/BlogList";
import BlogDetail from "./pages/Blog/BlogDetail";
import InquiryRequestPage from './pages/InquiryPage/InquiryRequestPage';


function App() {

  return (
    <Router>
      <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inquiry" element={<InquiryRequestPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<ShippingReturn />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </>

    </Router>
  );
}

export default App;




