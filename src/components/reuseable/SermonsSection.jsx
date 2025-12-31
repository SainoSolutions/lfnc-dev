import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const SermonsSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [selectedSermon, setSelectedSermon] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const sermons = [
    {
      id: 1,
      title: "We are seated with Christ in the heavenly places",
      speaker: "Ps Roshan Rai",
      date: "Jan 12, 2025",
      duration: "45 min",
      description: "Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us",
      videoUrl: "https://www.youtube.com/embed/q0BlX-BM_oI",
      thumbnail: "https://img.youtube.com/vi/q0BlX-BM_oI/hqdefault.jpg",
      isNew: true
    },
    {
      id: 2,
      title: "Worhsip Breaks Bondages",
      speaker: "Ps Roshan Rai",
      date: "Jan 5, 2025",
      duration: "42 min",
      description: "Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us",
      videoUrl: "https://www.youtube.com/embed/-gove3-uNRw",
      thumbnail: "https://img.youtube.com/vi/-gove3-uNRw/hqdefault.jpg"
    },
    {
      id: 3,
      title: "The Lord should be the first place in our lives, not wealth.",
      speaker: "Ps Roshan Rai",
      date: "Dec 29, 2024",
      duration: "38 min",
      description: "Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us",
      videoUrl: "https://www.youtube.com/embed/sWxGqhckhIQ",
      thumbnail: "https://img.youtube.com/vi/sWxGqhckhIQ/hqdefault.jpg"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-purple-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -top-40 right-1/3 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-shadow-glow">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-pulse">Sermons</span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Be inspired by powerful messages that transform hearts and strengthen faith
          </p>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sermons.map((sermon, index) => (
            <div
              key={sermon.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Glass Card */}
              <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-500/30">
                
                {/* Thumbnail Section */}
                <div className="relative h-48 overflow-hidden">
                  {playingVideo === sermon.id ? (
                    <iframe
                      src={sermon.videoUrl + '?autoplay=1'}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          if (e.target.src.includes('maxresdefault')) {
                            e.target.src = e.target.src.replace('hqdefault.jpg', 'hqdefault.jpg');
                          }
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Play Button */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        onClick={() => setPlayingVideo(sermon.id)}
                      >
                        <div className="w-16 h-16 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <PlayIcon />
                        </div>
                      </div>

                      {/* New Badge */}
                      {sermon.isNew && (
                        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          NEW
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-white group-hover:text-purple-300 transition-all duration-300 text-shadow-soft">
                    {sermon.title}
                  </h3>
                  
                  <p className="font-body text-gray-300 text-sm leading-relaxed line-clamp-2 opacity-90">
                    {sermon.description}
                  </p>

                  {/* Speaker */}
                  <div className="font-body text-purple-200 font-medium text-sm tracking-wide">
                    {sermon.speaker}
                  </div>

                  {/* Meta Info */}
                  {/* <div className="flex items-center justify-between text-gray-500 text-xs">
                    <div className="flex items-center gap-1">
                      <CalendarIcon />
                      <span>{sermon.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon />
                      <span>{sermon.duration}</span>
                    </div>
                  </div> */}

                  {/* Action Button */}
                  <button 
                    onClick={() => window.open(sermon.videoUrl, '_blank')}
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <PlayIcon />
                    <span className="font-heading font-semibold tracking-wide">Watch Now</span>
                  </button>

                  {/* View Details Button */}
                  <button 
                    onClick={() => {
                      setSelectedSermon(sermon);
                      setIsDetailModalOpen(true);
                    }}
                    className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/sermons')}
            className="font-heading bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 tracking-wide"
          >
            View All Sermons
          </button>
        </div>

        {/* Detail Modal */}
        {isDetailModalOpen && selectedSermon && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md overflow-y-auto mt-16">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 my-auto md:mt-0 mt-20">
              {/* Close Button */}
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="absolute top-6 right-6 z-20 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedSermon.thumbnail}
                  alt={selectedSermon.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border bg-purple-500/30 border-purple-400/50">
                    <div className="w-2 h-2 rounded-full animate-pulse bg-purple-400"></div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider">
                      Sermon
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">{selectedSermon.title}</h2>
                <p className="text-gray-300 text-base sm:text-lg md:text-lg mb-6 sm:mb-8 leading-relaxed">{selectedSermon.description}</p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-start gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex-shrink-0">
                      <CalendarIcon />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">Date</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{selectedSermon.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex-shrink-0">
                      <ClockIcon />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">Duration</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{selectedSermon.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex-shrink-0">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">Speaker</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{selectedSermon.speaker}</p>
                    </div>
                  </div>
                </div>

                {/* Watch Now Button */}
                <button 
                  onClick={() => window.open(selectedSermon.videoUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <PlayIcon />
                  <span className="font-heading font-semibold tracking-wide">Watch Full Sermon</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SermonsSection;