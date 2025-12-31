import React from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DetailsModal = ({ isOpen, onClose, data, type, onNext, onPrevious, showNavigation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md overflow-y-auto mt-16">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 my-auto md:mt-0 mt-20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Navigation Buttons */}
        {showNavigation && (
          <>
            <button
              onClick={onPrevious}
              className="absolute top-1/2 left-6 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute top-1/2 right-6 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Badge */}
          <div className="absolute top-6 left-6 z-10">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border ${
              type === 'sermon' 
                ? 'bg-purple-500/30 border-purple-400/50' 
                : 'bg-red-500/30 border-red-400/50'
            }`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                type === 'sermon' ? 'bg-purple-400' : 'bg-red-400'
              }`}></div>
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                {type === 'sermon' ? 'Upcoming Sermon' : 'Upcoming Event'}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 md:pl-10 md:pr-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">{data.title}</h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-lg mb-6 sm:mb-8 leading-relaxed">{data.description}</p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-start gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex-shrink-0">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">Date</p>
                <p className="text-white font-semibold text-sm sm:text-base">{data.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex-shrink-0">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">Time</p>
                <p className="text-white font-semibold text-sm sm:text-base">{data.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex-shrink-0">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">Location</p>
                <p className="text-white font-semibold text-sm sm:text-base">{data.location}</p>
              </div>
            </div>

            {data.speaker && (
              <div className="flex items-start gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex-shrink-0">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">Speaker</p>
                  <p className="text-white font-semibold text-sm sm:text-base">{data.speaker}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
