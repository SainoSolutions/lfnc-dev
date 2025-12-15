import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Update activeSection when location changes
  React.useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
    } else if (activeSection === null) {
      setActiveSection('home');
    }
  }, [location.pathname]);
  
  // Keep scroll functionality ONLY for Services and Ministries (home page sections)
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    if (location.pathname === '/') {
      // Already on home page, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };
  
  const handleHomeClick = () => {
    setActiveSection('home');
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <nav className="flex justify-between items-center px-5 py-3">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo}
            alt="Church Logo" 
            className="h-10 w-10 mr-3 object-cover"
          />
          <span className="font-bold text-lg text-gray-900 whitespace-nowrap">
            Living Faith Nepali Church
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-6 list-none m-0 p-0">
            <li>
              <button 
                onClick={handleHomeClick}
                className={`font-medium transition-colors duration-300 no-underline bg-transparent border-none cursor-pointer ${
                  location.pathname === '/' && activeSection === 'home' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <Link 
                to="/aboutus" 
                className={`font-medium transition-colors duration-300 no-underline ${
                  location.pathname === '/aboutus' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <button 
                className={`font-medium transition-colors duration-300 no-underline bg-transparent border-none cursor-pointer ${
                  location.pathname === '/' && activeSection === 'services' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
                onClick={() => handleSectionClick('services')}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                className={`font-medium transition-colors duration-300 no-underline bg-transparent border-none cursor-pointer ${
                  location.pathname === '/' && activeSection === 'ministries' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
                onClick={() => handleSectionClick('ministries')}
              >
                Ministries
              </button>
            </li>
            <li>
              <Link 
                to="/get-involved" 
                className={`font-medium transition-colors duration-300 no-underline ${
                  location.pathname === '/get-involved' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
              >
                Get Involved
              </Link>
            </li>

            <li>
              <Link 
                to="/events" 
                className={`font-medium transition-colors duration-300 no-underline ${
                  location.pathname === '/events' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/media" 
                className={`font-medium transition-colors duration-300 no-underline ${
                  location.pathname === '/media' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
              >
                Media
              </Link>
            </li>
            <li>
              <Link 
                to="/donate" 
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white border-none rounded cursor-pointer text-sm font-medium transition-all duration-300 hover:from-red-600 hover:to-purple-700 transform hover:scale-105"
              >
                Sow a Seed
              </Link>
              
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl cursor-pointer text-gray-700 bg-transparent border-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
            <ul className="flex flex-col list-none m-0 p-4 space-y-3">
              <li>
                <button 
                  onClick={() => {
                    handleHomeClick();
                    closeMobileMenu();
                  }}
                  className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded bg-transparent border-none cursor-pointer w-full text-left ${
                    location.pathname === '/' && activeSection === 'home' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <Link 
                  to="/aboutus" 
                  className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded ${
                    location.pathname === '/aboutus' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded bg-transparent border-none cursor-pointer w-full text-left ${
                    location.pathname === '/' && activeSection === 'services' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    handleSectionClick('services');
                    closeMobileMenu();
                  }}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded bg-transparent border-none cursor-pointer w-full text-left ${
                    location.pathname === '/' && activeSection === 'ministries' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    handleSectionClick('ministries');
                    closeMobileMenu();
                  }}
                >
                  Ministries
                </button>
              </li>
              <li>
                <Link 
                  to="/get-involved" 
                  className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded ${
                    location.pathname === '/get-involved' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link 
                  to="/media" 
                  className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded ${
                    location.pathname === '/media' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Media
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  to="/donate" 
                  className="bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold py-3 px-4 rounded no-underline hover:from-red-600 hover:to-purple-700 transition-colors block text-center"
                  onClick={closeMobileMenu}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;