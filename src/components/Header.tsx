
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set active section based on current route
    const path = location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path === '/stories') setActiveSection('stories');
    else if (path === '/contact') setActiveSection('contact');
    else {
      // For home page sections, use scroll detection
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'services', 'portfolio'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      if (path === '/') {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [location.pathname]);

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'stories') {
      navigate('/stories');
    } else if (sectionId === 'contact') {
      navigate('/contact');
    } else if (sectionId === 'home') {
      navigate('/');
    } else {
      // For other sections, navigate to home first then scroll
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        scrollToSection(sectionId);
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'stories', label: 'Stories' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-cyan-400">AG</span>Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-6 w-px bg-gray-700/50" />
            <ThemeToggle />
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-cyan-500 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-cyan-400 transition-colors duration-200 flex items-center gap-2"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left text-sm font-medium transition-colors duration-200 hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-800">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
