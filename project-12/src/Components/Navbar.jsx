
// import React, { useEffect, useState, useContext  } from 'react';
// import logo from '../assets/Images/logo.png';
// import { ColorContext } from './ColorContext';

// const Navbar = () => {
//     const [activeSection, setActiveSection] = useState('home');
//     const [isScrolled, setIsScrolled] = useState(false);
//     const { colors, currentColorIndex } = useContext(ColorContext);
//     const selectedColor = colors[currentColorIndex];

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             setIsScrolled(scrollPosition > 200);

//             const sections = ['home', 'about', 'services', 'client', 'portfolio', 'blog', 'contact'];
//             const scrollPosWithOffset = window.scrollY + 200;

//             sections.forEach((section) => {
//                 const sectionElement = document.getElementById(section);
//                 if (sectionElement && scrollPosWithOffset >= sectionElement.offsetTop && scrollPosWithOffset < sectionElement.offsetTop + sectionElement.clientHeight) {
//                     setActiveSection(section);
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const handleSetActiveSection = (section) => {
//         setActiveSection(section);
//         const element = document.getElementById(section);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <nav className={`fixed top-0 w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'} dark:${isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'}`}>
//             <div className="container mx-auto px-4 flex">
//                 <div className="mt-8 ml-16">
//                     <img src={logo} alt="logo" className="h-9 w-24" />
//                 </div>
//                 <div className="flex items-center justify-center mt-6 ml-[430px]">
//                     <div className="flex items-center space-x-2">
//                       <a href="#home" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'home' ? 'text-white' : ''}`}  style={activeSection === 'home' ? { color: selectedColor.text } : {}} onClick={() => handleSetActiveSection('home')}>Home</a>
//                         <a href="#about" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'about' ? 'text-white' : ''}`}  style={activeSection === 'about' ? { color: selectedColor.text } : {}} onClick={() => handleSetActiveSection('about')}>About</a>
//                         <a href="#services" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'services' ? 'text-white' : ''}`}  style={activeSection === 'services' ? { color: selectedColor.text } : {}} onClick={() => handleSetActiveSection('services')}>Services</a>
//                         <a href="#client" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'client' ? 'text-white' : ''}`}  style={activeSection === 'client' ? { color: selectedColor.text } : {}} onClick={() => handleSetActiveSection('client')}>Client</a>
//                         <a href="#portfolio" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'portfolio' ? 'text-white' : ''}`}  style={activeSection === 'portfolio' ? { color: selectedColor.text } : {}} onClick={() => handleSetActiveSection('portfolio')}>Portfolio</a>
//                         <a href="#blog" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'blog' ? 'text-white' : ''}`}  style={activeSection === 'blog' ? { color: selectedColor.text } : {}} onClick={() => handleSetActiveSection('blog')}>Blog</a>
//                         <a href="#contact" className={`ml-4 hover:text-yellow-400 px-3 py-2 ${activeSection === 'contact' ? 'text-white' : ''}`}  style={activeSection === 'contact' ? { color: selectedColor.text } : {}} onClick={() => handleSetActiveSection('contact')}>Contact</a>
//                     </div>                                   
//                 </div>
//             </div>
//         </nav>
//     );
// };


// export default Navbar;

import React, { useEffect, useState, useContext } from 'react';
import logo from '../assets/Images/logo.png';
import { ColorContext } from './ColorContext';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const { colors, currentColorIndex } = useContext(ColorContext);
    const selectedColor = colors[currentColorIndex];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 200);

            const sections = ['home', 'about', 'services', 'client', 'portfolio', 'blog', 'contact'];
            const scrollPosWithOffset = window.scrollY + 200;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement && scrollPosWithOffset >= sectionElement.offsetTop && scrollPosWithOffset < sectionElement.offsetTop + sectionElement.clientHeight) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSetActiveSection = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 w-full h-20 z-10 transition-colors duration-300 ${isScrolled ? 'bg-gray-500 text-black' : 'bg-transparent text-white'} dark:${isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'}`}>
            <div className="container mx-auto px-4 flex">
                <div className="mt-8 ml-16">
                    <img src={logo} alt="logo" className="h-9 w-24" />
                </div>
                <div className="flex items-center justify-center mt-6 ml-[430px]">
                    <div className="flex items-center space-x-2 mb-5">
                        {['home', 'about', 'services', 'client', 'portfolio', 'blog', 'contact'].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`ml-4 hover:text-yellow-400 px-3 font-medium text-lg py-2 text-white`}
                                style={activeSection === section ? { color: selectedColor.text } : {}}
                                onClick={() => handleSetActiveSection(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
