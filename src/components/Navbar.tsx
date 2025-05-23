import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="text-[#FFB700] h-8 w-8" />
            <span className={`font-bold text-2xl ${isScrolled ? 'text-[#0B1560]' : 'text-white'}`}>Real Madrid UZ</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Bosh Sahifa', path: '/' },
              { name: 'Klub Haqida', path: '/about' },
              { name: 'Yangiliklar', path: '/news' },
              { name: 'Jamoa', path: '/team' },
              { name: 'Jadval', path: '/schedule' },
              { name: 'Media', path: '/media' },
              { name: 'Muxlislar', path: '/fans' }
            ].map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`font-medium text-sm hover:text-[#FFB700] transition-colors ${
                  isScrolled 
                    ? (location.pathname === item.path ? 'text-[#FFB700]' : 'text-[#0B1560]') 
                    : (location.pathname === item.path ? 'text-[#FFB700]' : 'text-white')
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-[#0B1560]' : 'text-white'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Bosh Sahifa', path: '/' },
                { name: 'Klub Haqida', path: '/about' },
                { name: 'Yangiliklar', path: '/news' },
                { name: 'Jamoa', path: '/team' },
                { name: 'Jadval', path: '/schedule' },
                { name: 'Media', path: '/media' },
                { name: 'Muxlislar', path: '/fans' }
              ].map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`text-[#0B1560] font-medium py-2 px-4 rounded ${
                    location.pathname === item.path ? 'bg-gray-100 text-[#FFB700]' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;