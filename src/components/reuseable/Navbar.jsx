import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GiWheat, GiPrayer } from 'react-icons/gi';
// import logo from '../../assets/images/logo.jpg';
import logo from '../../assets/images/logo.png';
import { useGlobalLoading } from '../../App';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { showLoading } = useGlobalLoading() || {};
  
  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    if (showLoading) showLoading();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };
  
  const handleHomeClick = () => {
    setActiveSection('home');
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <header className={`sticky top-0 z-[100000] border-b border-gray-300 relative overflow-hidden transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-lg shadow-md' : 'bg-gradient-to-br from-white via-purple-50/50 via-pink-50/40 via-red-50/35 via-orange-50/30 to-blue-50/25'}`}>
      {/* Background gradient elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 via-pink-300/15 to-red-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-0 -left-20 w-40 h-40 bg-gradient-to-br from-red-400/20 via-orange-300/15 to-yellow-300/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      </div>
      <nav className="relative z-10 flex justify-between items-center px-5 py-3">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo}
            alt="Church Logo" 
            className="h-10 w-full mr-3 object-cover"
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
              <button 
                className={`font-medium transition-colors duration-300 no-underline bg-transparent border-none cursor-pointer ${
                  location.pathname === '/' && activeSection === 'sermons' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
                onClick={() => handleSectionClick('sermons')}
              >
                Sermons
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
                to="/aboutus" 
                className={`font-medium transition-colors duration-300 no-underline ${
                  location.pathname === '/aboutus' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/message-from-pastor" 
                className={`font-medium transition-colors duration-300 no-underline ${
                  location.pathname === '/message-from-pastor' ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                }`}
              >
                Pastor's Message
              </Link>
            </li>
            <li>
              <Link 
                to="/get-involved" 
                className={`px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white border-none rounded-full cursor-pointer font-medium transition-all duration-300 hover:from-red-600 hover:to-purple-700 transform hover:scale-105 shadow-lg`}
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div 
          className="md:hidden cursor-pointer p-3 z-[100000] relative bg-gray-100 rounded-md"
          onClick={() => {
            console.log('Menu toggle clicked');
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <div className={`w-6 h-1 bg-gray-700 mb-1 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-1 bg-gray-700 mb-1 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-1 bg-gray-700 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
        
        {/* Debug indicator */}
        {isMenuOpen && <div className="md:hidden text-xs text-red-500 absolute top-16 right-4">Menu Open</div>}

      </nav>
    </header>
      
    {/* Mobile Navigation Links - Completely outside header for proper z-index */}
    {isMenuOpen && (
      <div className="md:hidden fixed top-16 right-0 w-80 h-screen bg-white/80 backdrop-blur-lg border-l border-white/20 shadow-2xl transition-all duration-300 z-[999999]">
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
              <button 
                className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded bg-transparent border-none cursor-pointer w-full text-left ${
                  location.pathname === '/' && activeSection === 'sermons' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                }`}
                onClick={() => {
                  handleSectionClick('sermons');
                  closeMobileMenu();
                }}
              >
                Sermons
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
              <Link 
                to="/events" 
                className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded ${
                  location.pathname === '/events' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
              >
                Events
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
              <Link 
                to="/message-from-pastor" 
                className={`font-medium transition-colors duration-300 no-underline block py-3 px-4 rounded ${
                  location.pathname === '/message-from-pastor' ? 'text-red-600 bg-red-50' : 'text-gray-900 hover:text-red-600 hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
              >
                Pastor's Message
              </Link>
            </li>
            <li className="pt-2">
              <Link 
                to="/get-involved" 
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold py-3 px-4 rounded-full no-underline hover:from-red-600 hover:to-purple-700 transition-colors block text-center"
                onClick={closeMobileMenu}
              >
                Get Involved
              </Link>
            </li>
        </ul>
      </div>
    )}
    </>
  );
};

export default Navbar;