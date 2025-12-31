import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiWheat, GiPrayer } from 'react-icons/gi';
import { FaPlus, FaTimes, FaNewspaper, FaUsers } from 'react-icons/fa';

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      {/* Secondary Buttons */}
      <div className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto z-[999998]' : 'opacity-0 translate-y-4 pointer-events-none'} hidden md:flex`}>
        {/* Members Registration Button - New */}
        <Link
          to="/members-registration"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <FaUsers className="w-5 h-5 relative z-10" />
          <span className="font-semibold text-sm relative z-10 whitespace-nowrap">Members Registration</span>
        </Link>

        {/* News & Updates Button */}
        <Link
          to="/news-updates"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <FaNewspaper className="w-5 h-5 relative z-10" />
          <span className="font-semibold text-sm relative z-10 whitespace-nowrap">News & Updates</span>
        </Link>
        
        <Link
          to="/sow-a-seed"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <GiWheat className="w-5 h-5 relative z-10" />
          <span className="font-semibold text-sm relative z-10 whitespace-nowrap">Sow a Seed</span>
        </Link>
        
        <Link
          to="/prayer-request"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <GiPrayer className="w-5 h-5 relative z-10" />
          <span className="font-semibold text-sm relative z-10 whitespace-nowrap">Prayer Request</span>
        </Link>
      </div>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto w-14 h-14 bg-gradient-to-r from-red-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${isOpen ? 'rotate-45' : 'rotate-0'}`}
      >
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaPlus className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingActionButtons;