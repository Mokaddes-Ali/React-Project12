
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { ColorProvider } from './Components/ColorContext';
import Navbar from './Components/Navbar'



const App = () => {
  return (
    <ColorProvider className="w-[1348px]">
    <div className="container mx-auto">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
     
    </div>
    </ColorProvider>
  );
};

export default App;

