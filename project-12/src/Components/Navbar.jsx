


import{ useEffect, useState, useContext } from 'react';
import logo from '../assets/Images/logo.png';
import { ColorContext } from './ColorContext';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 w-full h-20 z-10 transition-colors duration-300 ${isScrolled ? 'bg-gray-500 text-black' : 'bg-transparent text-white'} dark:${isScrolled ? 'bg-black text-white' : 'bg-transparent text-white'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="mt-2">
                    <img src={logo} alt="logo" className="h-9 w-24" />
                </div>
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div className={`hidden md:flex items-center space-x-4`}>
                        {['home', 'about', 'services', 'client', 'portfolio', 'blog', 'contact'].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`hover:text-yellow-400 px-3 font-medium text-lg py-2 ${activeSection === section ? 'text-yellow-400' : 'text-white'}`}
                                style={activeSection === section ? { color: selectedColor.text } : {}}
                                onClick={() => handleSetActiveSection(section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center space-y-4 mt-4">
                    {['home', 'about', 'services', 'client', 'portfolio', 'blog', 'contact'].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`hover:text-yellow-400 px-3 font-medium text-lg py-2 ${activeSection === section ? 'text-yellow-400' : 'text-white'}`}
                            style={activeSection === section ? { color: selectedColor.text } : {}}
                            onClick={() => {
                                handleSetActiveSection(section);
                                toggleMenu();
                            }}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
