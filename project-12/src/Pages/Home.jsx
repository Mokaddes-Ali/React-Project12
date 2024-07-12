import React from 'react';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Client from './Client';
import Services from './Services';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Blog />
      <Client />
      <Portfolio />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;