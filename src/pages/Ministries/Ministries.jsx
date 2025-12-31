import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YouthFellowshipImg from '../../assets/images/MinistriesImg/YouthFellowShip.png.jpeg';
import KidsFellowshipImg from '../../assets/images/MinistriesImg/KidsFellowShip.png.jpeg';
import WomenFellowshipImg from '../../assets/images/MinistriesImg/WomenFellowShip.png.jpeg';
import SundaySchoolImg from '../../assets/images/MinistriesImg/SundaySchool.png.jpeg';

export default function Ministries() {
  const navigate = useNavigate();
  const ministries = [
    {
      title: "LFNC Youth Fellowship",
      shortTitle: "Youth",
      description: "Empowering the next generation through dynamic teaching, mentorship, and community.",
      imageUrl: YouthFellowshipImg,
      icon: "👥",
      day: "Friday",
      time: "6:30 PM",
      age: "13-25 Years"
    },
    {
      title: "LFNC Kids Fellowship",
      shortTitle: "Kids",
      description: "Nurturing young hearts with age-appropriate teaching and fun activities.",
      imageUrl: KidsFellowshipImg,
      icon: "👶",
      day: "Sunday",
      time: "10:00 AM",
      age: "4-12 Years"
    },
    {
      title: "Worship & Prayer",
      shortTitle: "Worship",
      description: "Experience powerful worship and connect with God through prayer.",
      imageUrl: "https://images.unsplash.com/photo-1543702404-38c2035462ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwJTIwaGFuZHN8ZW58MXx8fHwxNzYxOTg4NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "❤️",
      day: "Wednesday",
      time: "7:00 PM",
      age: "All Ages"
    },
    {
      title: "Women's Fellowship",
      shortTitle: "Women",
      description: "Empowering women through prayer, study, and sisterhood in Christ.",
      imageUrl: WomenFellowshipImg,
      icon: "💪",
      day: "Saturday",
      time: "8:00 AM",
      age: "Women 18+"
    },
    {
      title: "LFNC Women's Fellowship",
      shortTitle: "Women",
      description: "Building strong women of faith through fellowship, study, and accountability.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1715588659565-3b6e1b31b4ac?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "🤝",
      day: "Saturday",
      time: "8:00 AM",
      age: "18+ Years"
    },
    {
      title: "Bible Study",
      shortTitle: "Bible Study",
      description: "Dive deeper into God's Word through weekly study groups.",
      imageUrl: "https://images.unsplash.com/photo-1620175259377-32c2a6394f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcmF5aW5nJTIwYmlibGV8ZW58MXx8fHwxNzYyMDE5NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "📖",
      day: "Tuesday",
      time: "7:30 PM",
      age: "Adults 18+"
    },
    {
      title: "Sunday School",
      shortTitle: "Sunday School",
      description: "Teaching God's Word to all ages with engaging lessons and activities.",
      imageUrl: SundaySchoolImg,
      icon: "📚",
      day: "Sunday",
      time: "9:00 AM",
      age: "Children & Youth"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? ministries.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === ministries.length - 1 ? 0 : prev + 1));
  };

  const getLeftIndex = () => {
    return currentIndex === 0 ? ministries.length - 1 : currentIndex - 1;
  };

  const getRightIndex = () => {
    return currentIndex === ministries.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/50 via-pink-50/40 via-red-50/35 via-orange-50/30 to-blue-50/25 relative overflow-hidden text-gray-900">
      {/* Optimized decorative gradients - reduced for performance */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 via-pink-300/15 to-red-400/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-60 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-red-400/20 via-orange-300/15 to-yellow-300/15 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/15 via-purple-300/20 to-pink-400/15 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 pt-20">
        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-center text-shadow-soft">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
            Our{' '}
          </span>
          <span className="text-gray-900 animate-pulse">Ministries</span>
        </h1>

        {/* Cards Container */}
        <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center mt-20">
          {/* Left Card - Rotated with Image */}
          <div
            className="absolute left-0 md:left-8 lg:left-16 z-10 cursor-pointer"
            onClick={handlePrevious}
            style={{ pointerEvents: 'auto' }}
          >
            <div className="bg-gray-900/90 rounded-3xl shadow-2xl w-64 h-80 overflow-hidden transform -rotate-12 hover:scale-105 transition-all duration-300 hover:bg-gray-900/95 border border-gray-800">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ministries[getLeftIndex()].imageUrl}
                  alt={ministries[getLeftIndex()].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4 bg-gray-900/90 backdrop-blur-lg">
                <h2 className="font-heading text-white text-xl font-semibold text-center mb-2 text-shadow-soft">{ministries[getLeftIndex()].shortTitle}</h2>
                <div className="text-xs text-gray-300 space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>Day:</span>
                    </div>
                    <span className="font-medium text-white">{ministries[getLeftIndex()].day}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>Time:</span>
                    </div>
                    <span className="font-medium text-white">{ministries[getLeftIndex()].time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                      <span>Age:</span>
                    </div>
                    <span className="font-medium text-white">{ministries[getLeftIndex()].age}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Featured Card - Straight */}
          <div className="relative z-20 bg-gray-900/90 rounded-3xl shadow-2xl overflow-hidden w-80 md:w-96 transform rotate-0 hover:bg-gray-900/95 transition-all duration-300 border border-gray-800">
            <div className="relative h-80 overflow-hidden">
              <img
                src={ministries[currentIndex].imageUrl}
                alt={ministries[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-6 bg-gray-900/90 backdrop-blur-lg">
              <h2 className="font-heading text-red-400 text-xl font-semibold mb-2 text-shadow-soft">{ministries[currentIndex].title}</h2>
              <p className="font-body text-gray-200 leading-relaxed mb-4 opacity-95">{ministries[currentIndex].description}</p>
              <div className="text-sm text-gray-200 space-y-2 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span className="font-medium text-white">Day:</span>
                  </div>
                  <span className="text-white">{ministries[currentIndex].day}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="font-medium text-white">Time:</span>
                  </div>
                  <span className="text-white">{ministries[currentIndex].time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span className="font-medium text-white">Age Group:</span>
                  </div>
                  <span className="text-white">{ministries[currentIndex].age}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Rotated with Image */}
          <div
            className="absolute right-0 md:right-8 lg:right-16 z-10 cursor-pointer"
            onClick={handleNext}
            style={{ pointerEvents: 'auto' }}
          >
            <div className="bg-gray-900/90 rounded-3xl shadow-2xl w-64 h-80 overflow-hidden transform rotate-12 hover:scale-105 transition-all duration-300 hover:bg-gray-900/95 border border-gray-800">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ministries[getRightIndex()].imageUrl}
                  alt={ministries[getRightIndex()].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4 bg-gray-900/90 backdrop-blur-lg">
                <h2 className="font-heading text-white text-xl font-semibold text-center mb-2 text-shadow-soft">{ministries[getRightIndex()].shortTitle}</h2>
                <div className="text-xs text-gray-300 space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>Day:</span>
                    </div>
                    <span className="font-medium text-white">{ministries[getRightIndex()].day}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>Time:</span>
                    </div>
                    <span className="font-medium text-white">{ministries[getRightIndex()].time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                      <span>Age:</span>
                    </div>
                    <span className="font-medium text-white">{ministries[getRightIndex()].age}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-gray-900/80 rounded-full shadow-lg transition-all duration-300 hidden md:block border border-gray-800 p-3"
            style={{ pointerEvents: 'auto' }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-gray-900/80 rounded-full shadow-lg transition-all duration-300 hidden md:block border border-gray-800 p-3"
            style={{ pointerEvents: 'auto' }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex gap-1.5 mt-20">
          {ministries.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-900 w-6'
                  : 'bg-gray-900/50 hover:bg-gray-900/75'
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-4 mt-8 md:hidden relative z-30 pointer-events-auto">
          <button
            onClick={handlePrevious}
            className="bg-gray-900/80 rounded-full shadow-lg transition-all duration-300 border border-gray-800 p-3 hover:bg-gray-900/95"
            style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-900/80 rounded-full shadow-lg transition-all duration-300 border border-gray-800 p-3 hover:bg-gray-900/95"
            style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-9 text-center mb-12">
          <p className="font-body text-gray-800 mb-4 text-lg font-medium leading-relaxed text-shadow-soft">Find Your Place to Serve and Grow</p>
          <button onClick={() => navigate('/get-involved')} className="font-heading px-8 py-4 bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 hover:bg-gray-900/90 text-white rounded-full transition-all duration-300 shadow-xl font-semibold text-lg tracking-wide">
            Get Involved Today
          </button>
        </div>
      </div>
    </div>
  );
}