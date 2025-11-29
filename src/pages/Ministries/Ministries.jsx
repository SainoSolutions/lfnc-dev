import { useState } from 'react';

export default function Ministries() {
  const ministries = [
    {
      title: "Youth Fellowship",
      shortTitle: "Youth",
      description: "Empowering the next generation through dynamic teaching, mentorship, and community.",
      imageUrl: "https://images.unsplash.com/photo-1551847633-314d50cd36e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJchaHwxfHx5b3V0aCUyMGdyb3VwJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MjAxOTQzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "👥",
      day: "Friday",
      time: "6:30 PM",
      age: "13-18 Years"
    },
    {
      title: "Kids Fellowship",
      shortTitle: "Kids",
      description: "Nurturing young hearts with age-appropriate teaching and fun activities.",
      imageUrl: "https://images.unsplash.com/photo-1644822861244-1257985cbf0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHByYXlpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjIwMTk0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "👶",
      day: "Sunday",
      time: "10:00 AM",
      age: "3-12 Years"
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
      title: "Men's Fellowship",
      shortTitle: "Men",
      description: "Building strong men of faith through fellowship, study, and accountability.",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
      age: "Adults"
    },
    {
      title: "Music & Arts",
      shortTitle: "Music",
      description: "Glorifying God through creative expression and worship.",
      imageUrl: "https://images.unsplash.com/photo-1617544517952-991273adcbdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBtdXNpYyUyMGNob2lyfGVufDF8fHx8MTc2MjAxOTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: "🎵",
      day: "Thursday",
      time: "6:00 PM",
      age: "12+ Years"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-orange-400 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 pt-20">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400">
            Our{' '}
          </span>
          <span className="text-white">Ministries</span>
        </h1>

        {/* Cards Container */}
        <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center mt-20">
          {/* Left Card - Rotated with Image */}
          <div
            className="absolute left-0 md:left-8 lg:left-16 z-10 cursor-pointer"
            onClick={handlePrevious}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-64 h-80 overflow-hidden transform -rotate-12 hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ministries[getLeftIndex()].imageUrl}
                  alt={ministries[getLeftIndex()].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4 bg-white">
                <h2 className="text-black text-xl font-black text-center mb-2">{ministries[getLeftIndex()].shortTitle}</h2>
                <div className="text-xs text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Day:</span>
                    <span className="font-medium">{ministries[getLeftIndex()].day}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{ministries[getLeftIndex()].time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Age:</span>
                    <span className="font-medium">{ministries[getLeftIndex()].age}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Featured Card - Straight */}
          <div className="relative z-20 bg-white rounded-3xl shadow-2xl overflow-hidden w-80 md:w-96 transform rotate-0">
            <div className="relative h-80 overflow-hidden">
              <img
                src={ministries[currentIndex].imageUrl}
                alt={ministries[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-red-500 text-xl font-black mb-2">{ministries[currentIndex].title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{ministries[currentIndex].description}</p>
              <div className="text-sm text-gray-700 space-y-2 bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between">
                  <span className="font-medium">Day:</span>
                  <span>{ministries[currentIndex].day}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time:</span>
                  <span>{ministries[currentIndex].time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Age Group:</span>
                  <span>{ministries[currentIndex].age}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Rotated with Image */}
          <div
            className="absolute right-0 md:right-8 lg:right-16 z-10 cursor-pointer"
            onClick={handleNext}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-64 h-80 overflow-hidden transform rotate-12 hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ministries[getRightIndex()].imageUrl}
                  alt={ministries[getRightIndex()].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4 bg-white">
                <h2 className="text-black text-xl font-black text-center mb-2">{ministries[getRightIndex()].shortTitle}</h2>
                <div className="text-xs text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Day:</span>
                    <span className="font-medium">{ministries[getRightIndex()].day}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{ministries[getRightIndex()].time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Age:</span>
                    <span className="font-medium">{ministries[getRightIndex()].age}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hidden md:block"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hidden md:block"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-4 mt-8 md:hidden">
          <button
            onClick={handlePrevious}
            className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-9 text-center">
          <p className="text-white mb-4 text-lg font-medium leading-relaxed">Find Your Place to Serve and Grow</p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-xl font-bold text-lg">
            Get Involved Today
          </button>
        </div>
      </div>
    </div>
  );
}