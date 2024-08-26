import Blog from './Blog';
import Portfolio from './Portfolio';
import Client from './Client';
import Services from './Services';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import ChangeDirectionButton from '../Components/ChangeDirectionButton';
import About from './About';
import ColorChanger from '../Components/ColorChanger';
import Contact from './Contact';
import Darkmode from '../Components/Darkmode';




const Home = () => {
  return (
    <div id="home" className='dark:bg-black w-[1348px]'>
       <div className="p-8 fixed mt-40 z-30">
       <ColorChanger className="z-30" />
      </div>
      <div className="fixed mt-[100px] z-30">
      <Darkmode />
      </div>
      <div className="fixed mt-32 z-30">
      <ChangeDirectionButton />
      </div>
      <HeroSection />
      <About />
      <Services />
      <Client />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      </div>
  );
};

export default Home;