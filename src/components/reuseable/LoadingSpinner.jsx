import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 border-4 border-transparent border-t-purple-500 border-r-red-500 rounded-full animate-spin"></div>
        
        {/* Inner spinning ring */}
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-b-pink-400 border-l-blue-400 rounded-full animate-spin animate-reverse"></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-red-500 rounded-full animate-pulse"></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-red-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;