import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };
  
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      navigate('/');
    }
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

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-6 list-none m-0 p-0">
            <li>
              <button 
                className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline bg-transparent border-none cursor-pointer"
                onClick={handleHomeClick}
              >
                Home
              </button>
            </li>
            <li>
              <Link 
                to="/aboutus" 
                className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <button 
                className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline bg-transparent border-none cursor-pointer"
                onClick={() => handleSectionClick('services')}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline bg-transparent border-none cursor-pointer"
                onClick={() => handleSectionClick('ministries')}
              >
                Ministries
              </button>
            </li>
            <li>
              <Link 
                to="/get-involved" 
                className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline"
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link 
                to="/donate" 
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white border-none rounded cursor-pointer text-sm font-medium transition-all duration-300 hover:from-red-600 hover:to-purple-700 transform hover:scale-105"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button - Hidden on desktop */}
        <button 
          className="md:hidden text-2xl cursor-pointer text-gray-700 bg-transparent border-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>

        {/* Mobile Navigation Links - Only shows when menu is open */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
            <ul className="flex flex-col list-none m-0 p-4 space-y-3">
              <li>
                <button 
                  className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline block py-3 px-4 rounded hover:bg-gray-50 bg-transparent border-none cursor-pointer w-full text-left"
                  onClick={() => {
                    handleHomeClick();
                    closeMobileMenu();
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <Link 
                  to="/aboutus" 
                  className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline block py-3 px-4 rounded hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline block py-3 px-4 rounded hover:bg-gray-50 bg-transparent border-none cursor-pointer w-full text-left"
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
                  className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline block py-3 px-4 rounded hover:bg-gray-50 bg-transparent border-none cursor-pointer w-full text-left"
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
                  className="text-gray-900 font-medium hover:text-red-600 transition-colors duration-300 no-underline block py-3 px-4 rounded hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  Get Involved
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