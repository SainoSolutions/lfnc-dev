import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-white text-black py-10 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Menu Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 mb-8">
          {/* Left Side - Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link 
              to="/" 
              className="inline-block transition-transform duration-200 hover:scale-105"
            >
              <div className="h-32 w-64 md:h-40 md:w-80 flex items-center justify-center overflow-hidden bg-transparent">
                <img 
                  src={logo} 
                  alt="Living Faith Nepali Church Logo" 
                  className="w-full h-full object-contain block m-0 p-0 bg-transparent"
                />
              </div>
            </Link>
          </div>

          {/* Right Side - Horizontal Menu */}
          <div className="flex-2 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* COMPANY */}
              <div className="text-center md:text-left">
                <div className="font-bold text-gray-800 mb-4 text-lg">COMPANY</div>
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/about" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/mission" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Our Mission
                  </Link>
                  <Link 
                    to="/team" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Our Team
                  </Link>
                  <Link 
                    to="/history" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Church History
                  </Link>
                </div>
              </div>

              {/* EVENTS */}
              <div className="text-center md:text-left">
                <div className="font-bold text-gray-800 mb-4 text-lg">EVENTS</div>
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/events" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Upcoming Events
                  </Link>
                  <Link 
                    to="/services" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Weekly Services
                  </Link>
                  <Link 
                    to="/bible-study" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Bible Study
                  </Link>
                  <Link 
                    to="/prayer" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Prayer Meetings
                  </Link>
                  <Link 
                    to="/youth" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Youth Events
                  </Link>
                </div>
              </div>

              {/* ABOUT */}
              <div className="text-center md:text-left">
                <div className="font-bold text-gray-800 mb-4 text-lg">ABOUT</div>
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/ministries" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Ministries
                  </Link>
                  <Link 
                    to="/baptism" 
                    className="text-gray-700 text-sm transition-transform duration-250 hover:scale-105 hover:text-red-600"
                  >
                    Baptism
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Subscription Bar */}
        <div className="text-center mb-8">
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-3">
            <input 
              type="email" 
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-5 py-3 border border-gray-300 rounded-full w-full sm:w-80 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white border-none rounded-full cursor-pointer text-sm font-medium transition-all duration-300 hover:from-blue-700 hover:to-red-700 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="text-center mb-6">
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="group transition-transform duration-300 hover:scale-110"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                alt="Facebook" 
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a 
              href="#" 
              className="group transition-transform duration-300 hover:scale-110"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" 
                alt="YouTube" 
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm pt-6 border-t border-gray-200">
          Copyright © {new Date().getFullYear()} Living Faith Nepali Church
        </div>
      </div>
    </footer>
  );
};

export default Footer;