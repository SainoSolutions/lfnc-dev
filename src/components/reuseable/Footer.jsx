import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaHandsHelping, FaMicrophone, FaChurch, FaPrayingHands, FaCalendarAlt, FaCamera, FaMapMarkerAlt, FaPhone, FaHeart, FaClock } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-white via-purple-50/50 via-pink-50/40 via-red-50/35 via-orange-50/30 to-blue-50/25 text-black py-20 relative overflow-hidden">
      {/* Enhanced decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/30 via-pink-300/25 to-red-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-red-400/30 via-orange-300/25 to-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/25 via-purple-300/30 to-pink-400/25 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300/20 via-blue-300/25 to-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/20 via-red-300/25 to-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1500" />
        <div className="absolute top-10 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-emerald-300/15 via-teal-300/20 to-cyan-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-750" />
        <div className="absolute bottom-10 left-1/5 w-[400px] h-[400px] bg-gradient-to-br from-violet-300/15 via-purple-300/20 to-fuchsia-300/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1250" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Church Info & Logo */}
          <div className="lg:col-span-1 space-y-6">
            <Link 
              to="/" 
              className="inline-block transition-all duration-300 hover:scale-105 group"
            >
              <div className="h-32 w-64 flex items-center justify-center overflow-hidden">
                <img 
                  src={logo} 
                  alt="Living Faith Nepali Church Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-900 text-sm leading-relaxed font-medium">
              Transforming lives through faith, hope, and love. Join our community of believers as we grow together in Christ.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg">
              <p className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FaClock className="text-red-500" />
                Service Times
              </p>
              <div className="space-y-1 text-sm text-gray-800">
                <p>Sunday: 7:30 AM - 9:00 AM</p>
                <p>Prayer Meeting: Wed 7:00 PM</p>
                <p>Bible Study: Fri 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-900 mb-6 text-lg relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">Quick Links</span>
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
            </h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaHome className="text-red-600 text-xs" />
                </div>
                Home
              </Link>
              <Link 
                to="/aboutus" 
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaInfoCircle className="text-blue-600 text-xs" />
                </div>
                About Us
              </Link>
              <Link 
                to="/message-from-pastor" 
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaEnvelope className="text-red-600 text-xs" />
                </div>
                Pastor's Message
              </Link>
              <Link 
                to="/get-involved" 
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaHandsHelping className="text-blue-600 text-xs" />
                </div>
                Get Involved
              </Link>
            </div>
          </div>

          {/* Worship & Ministry */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-900 mb-6 text-lg relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">Worship & Ministry</span>
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
            </h3>
            <div className="space-y-3">
              <button 
                onClick={() => {
                  window.location.href = '/#sermons';
                }}
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md w-full text-left bg-transparent border-none cursor-pointer"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaMicrophone className="text-red-600 text-xs" />
                </div>
                Sermons
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/#services';
                }}
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md w-full text-left bg-transparent border-none cursor-pointer"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaChurch className="text-blue-600 text-xs" />
                </div>
                Services
              </button>
              <button 
                onClick={() => {
                  window.location.href = '/#ministries';
                }}
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md w-full text-left bg-transparent border-none cursor-pointer"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaPrayingHands className="text-red-600 text-xs" />
                </div>
                Ministries
              </button>
              <Link 
                to="/events" 
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaCalendarAlt className="text-blue-600 text-xs" />
                </div>
                Events
              </Link>
              <Link 
                to="/media" 
                className="group flex items-center gap-3 text-gray-800 text-sm font-medium transition-all duration-300 hover:text-gray-900 hover:translate-x-2 p-2 rounded-lg hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md"
              >
                <div className="w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-sm border border-white/40">
                  <FaCamera className="text-red-600 text-xs" />
                </div>
                Media Gallery
              </Link>
            </div>
          </div>

          {/* Contact & Connect */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-gray-900 mb-6 text-lg relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">Contact & Connect</span>
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
            </h3>
            <div className="space-y-4 mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg">
                <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" /> Locations
                </p>
                <div className="text-sm text-gray-800 space-y-1">
                  <p>Koramangala, Bangalore</p>
                  <p>Electronic City, Bangalore</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg">
                <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaPhone className="text-blue-500" /> Contact
                </p>
                <p className="text-sm text-gray-800">Pastor Roshan: +91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="space-y-3">
              <Link 
                to="/sow-a-seed" 
                className="group inline-flex items-center justify-center md:justify-start gap-3 w-full px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-xl text-sm font-medium transition-all duration-300 hover:from-red-600 hover:to-purple-700 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25"
              >
                <FaHeart className="group-hover:scale-110 transition-transform duration-300" /> Sow a Seed
              </Link>
              <Link 
                to="/prayer-request" 
                className="group inline-flex items-center justify-center md:justify-start gap-3 w-full px-6 py-3 border-2 border-blue-500/50 text-blue-400 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <FaPrayingHands className="group-hover:scale-110 transition-transform duration-300" /> Prayer Request
              </Link>
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
              className="px-5 py-3 border border-gray-300 rounded w-full sm:w-80 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white border-none rounded cursor-pointer text-sm font-medium transition-all duration-300 hover:from-red-600 hover:to-purple-700 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="text-center mb-6">
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => handleSocialClick('https://www.facebook.com/share/1ZGdaysG1B/')}
              className="group transition-transform duration-300 hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                alt="Facebook" 
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              />
            </button>
            <button 
              onClick={() => handleSocialClick('https://www.youtube.com/@PsRoshanRaiOfficial/videos')}
              className="group transition-transform duration-300 hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" 
                alt="YouTube" 
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm pt-6 border-t border-gray-200">
          <div>Copyright © {new Date().getFullYear()} Living Faith Nepali Church</div>
          <div className="mt-1">Powered by SAINO SOLUTIONS</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;