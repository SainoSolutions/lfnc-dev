import React, { useState, useEffect } from 'react';
import Ministries from '../Ministries/Ministries';
import Services from '../Services/Services';
import slide1 from '../../assets/images/Hero/slide1.jpg';
import slide2 from '../../assets/images/Hero/slide2.jpg';
import slide3 from '../../assets/images/Hero/slide3.jpg';
import slide4 from '../../assets/images/Hero/slide4.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Reaching to un-reached with the Love and Gospel of Jesus Christ",
      highlight: ["Love", "Gospel"]
    },
    {
      id: 2,
      image: slide2,
      title: "Join Our Community of Faith",
      highlight: ["Community", "Faith"]
    },
    {
      id: 3,
      image: slide3,
      title: "Growing Together in Spirit",
      highlight: ["Growing", "Spirit"]
    },
    {
      id: 4,
      image: slide4,
      title: "Serving with Purpose and Passion",
      highlight: ["Purpose", "Passion"]
    }
  ];

  // Auto slide every 3 seconds, pause on hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [slides.length, isHovered]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderHighlightedText = (text, highlights) => {
    let result = text;
    highlights.forEach(highlight => {
      result = result.replace(
        highlight, 
        `<span class="text-red-600 font-bold">${highlight}</span>`
      );
    });
    return { __html: result };
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Slides Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="w-full h-full flex-shrink-0 relative"
              >
                {/* Background Image - Fixed for mobile */}
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Slide Content - Responsive */}
                <div 
                  className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="text-white text-center lg:text-left max-w-4xl w-full">
                    <h1 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
                      dangerouslySetInnerHTML={renderHighlightedText(slide.title, slide.highlight)}
                    >
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8">
                      Transforming lives through faith, hope, and love
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base">
                        Join Us Today
                      </button>
                      <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots - Responsive */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile, show on tablet+ */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 sm:p-3 rounded-full transition duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 sm:p-3 rounded-full transition duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      
      {/* Ministries Section */}
      <section id="ministries">
        <Ministries />
      </section>
    </div>
  );
};

export default Home;