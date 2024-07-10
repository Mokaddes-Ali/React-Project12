// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service';
import Client from './Pages/Client';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Welcome from './Pages/Welcome';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/client" element={<Client />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
