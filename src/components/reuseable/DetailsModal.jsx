import React from 'react';
import { FaTimes } from 'react-icons/fa';

const DetailsModal = ({ isOpen, onClose, data, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-2xl w-full shadow-2xl border border-white/10 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-2 h-2 rounded-full animate-pulse ${type === 'sermon' ? 'bg-purple-500' : 'bg-red-500'}`}></div>
            <span className="text-white text-xs font-bold uppercase tracking-wide">
              {type === 'sermon' ? 'Upcoming Sermon' : 'Upcoming Event'}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">{data.title}</h2>
          <p className="text-gray-300 text-lg mb-6">{data.description}</p>

          {/* Details */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3 text-gray-300">
              <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <div>
                <p className="font-semibold text-white">Date</p>
                <p>{data.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-gray-300">
              <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p className="font-semibold text-white">Time</p>
                <p>{data.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-gray-300">
              <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>{data.location}</p>
              </div>
            </div>

            {data.speaker && (
              <div className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <div>
                  <p className="font-semibold text-white">Speaker</p>
                  <p>{data.speaker}</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
              type === 'sermon'
                ? 'bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700'
                : 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700'
            }`}
          >
            {type === 'sermon' ? 'Add to Calendar' : 'Register Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
