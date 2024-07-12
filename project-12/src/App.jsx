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
import { ColorProvider } from './Components/ColorContext';
import ColorToggleButton from './Components/ColorToggleButton';
import OtherComponent from './Components/OtherComponent';




const App = () => {
  return (

    <ColorProvider>
    <div className="container mx-auto">
      <ColorToggleButton />
      <OtherComponent />
    </div>
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
    </ColorProvider>
  );
};

export default App;
