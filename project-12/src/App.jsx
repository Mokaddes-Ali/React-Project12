import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Client from './Pages/Client';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';




const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/client" element={<Client />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
