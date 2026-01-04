import React, { useState, useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutUs from '../About/AboutUs';
import Ministries from '../Ministries/Ministries';
import Services from '../Services/Services';
import SermonsSection from '../../components/reuseable/SermonsSection';
import DetailsModal from '../../components/reuseable/DetailsModal';
import { eventsCache } from '../../services/eventsCache';
import slide1 from '../../assets/images/Hero/slide1.jpg'
import slide2 from '../../assets/images/Hero/slide2.jpg'
import slide3 from '../../assets/images/Hero/slide3.jpg'
import slide4 from '../../assets/images/Hero/slide4.jpg'
import firstLordSupper from '../../assets/images/Hero/HeroSurmons&Events/4Jan2026.png'

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCard, setActiveCard] = useState('sermon');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState('sermon');
  const [eventOne, setEventOne] = useState(null);

  // Get next Sunday date
  const getNextSunday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + daysUntilSunday);
    return nextSunday.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };


  const sermonData = {
    title: 'Sunday Service cum Holy Communion',
    description: `Jai Mashi! 🙏

Greetings from Living Faith Nepali Church

We are delighted to invite you and your family to our Sunday Service cum Holy Communion. Join us as we come together in worship, prayer, and the Word of God.

✨ Sunday Service & Holy Communion
📅 Date: Sunday, January 04, 2026
⏰ Time: 07:30 AM – 09:00 AM
📍 Location: Scan the QR code in the poster for directions

📍 Location (Map): <a>https://share.google/HcPQcLBBTDI2se1cf </a>

📝 Register: https://www.lfnc.in/members-registration
🎥 Live Streaming Available

🎤 Speaker: Pastor Roshan Rai

Let us gather with grateful hearts to remember the sacrifice of our Lord and experience His presence, grace, and renewal.

🌐 Website: www.lfnc.in

We look forward to worshiping with you.
May God bless you abundantly.

In Christ - Pastor Roshan Philip Rai
Living Faith Nepali Church, Koramangala, Bengaluru`,
    date: getNextSunday(),
    time: '07:30 AM - 09:00 AM',
    location: 'LFNC, Maharaja signal, 80 Feet Rd, New Friends Colony, 4th Block,Koramangala',
    speaker: 'Pastor Roshan Rai',
    image: firstLordSupper ? firstLordSupper: slide1
  };

  const eventData = {
    title: 'New Year 2025 Celebration',
    description: 'Join us for a special New Year celebration service as we welcome 2025 together in worship, prayer, and thanksgiving. Let\'s reflect on God\'s faithfulness and step into the new year with hope and renewed faith.',
    date: 'Thursday, January 1, 2025',
    time: '07:30 AM - 09:30 AM',
    location: 'LFNC, Maharaja signal, 80 Feet Rd, New Friends Colony, 4th Block,Koramangala',
    image: slide3
  };

  const openModal = (type) => {
    setModalType(type);
    setModalData(type === 'sermon' ? sermonData : eventOne ? eventOne : eventData);
    setIsModalOpen(true);
  };

  // Prefetch events API on home page load
  useEffect(() => {
    eventsCache.prefetch();
    eventsCache.getEvents().then((data) => {
          if (data && data[0]) {
            setEventOne(data[0].events[0]);
          }

        }).catch((error) => {
          console.error("Error fetching events:", error);
 
        });
  }, []);

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
        `<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-pulse font-bold drop-shadow-lg filter brightness-105 contrast-110" style="text-shadow: 0 0 10px rgba(168, 85, 247, 0.3), 0 0 20px rgba(236, 72, 153, 0.2), 0 0 30px rgba(239, 68, 68, 0.1);">${highlight}</span>`
      );
    });
    return { __html: result };
  };
    const videoRef = useRef(null);
        // Stop video on close
  useEffect(() => {
    if (activeCard === 'event' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [activeCard]);
  return (
    <div>
      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
        type={modalType}
      />

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
      {/* Upcoming Card Switcher */}
      <div className="absolute top-20 md:top-4 right-4 z-50 w-80">
        {/* Tab Switcher */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setActiveCard('sermon')}
            className={`flex-1 py-2 px-4 rounded-xl font-semibold text-xs uppercase tracking-wide transition-all duration-300 ${
              activeCard === 'sermon'
                ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20'
            }`}
          >
            Sermon
          </button>
          <button
            onClick={() => setActiveCard('event')}
            className={`flex-1 py-2 px-4 rounded-xl font-semibold text-xs uppercase tracking-wide transition-all duration-300 ${
              activeCard === 'event'
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20'
            }`}
          >
            Event
          </button>
        </div>

        {/* Sermon Card */}
        {activeCard === 'sermon' && (
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-bold uppercase tracking-wide">Upcoming Sermon</span>
            </div>
            
            <img src={firstLordSupper ? firstLordSupper : slide1} alt="Sunday Message" className="w-full h-32 object-cover rounded-xl mb-3" />
            <h3 className="font-heading text-white font-semibold text-lg mb-2 text-shadow-soft">Sunday Service cum First Holy Communion of 2026</h3>
            <p className="font-body text-gray-200 text-sm mb-3 opacity-90">Join Pastor Roshan Rai for an inspiring message</p>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Every Sunday</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>Next: <span className="text-purple-300 font-semibold">{getNextSunday()}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>07:30 AM - 09:00 AM</span>
              </div>
            </div>
            <button onClick={() => openModal('sermon')} className="font-heading w-full mt-3 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 tracking-wide">
              View Details
            </button>
          </div>
        )}

        {/* Event Card */}
        {activeCard === 'event' && (
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-bold uppercase tracking-wide">Upcoming Event</span>
            </div>
            {(eventOne && eventOne.videoUrl !== undefined )|| (eventOne && eventOne.videoUrl) ?  (
        <video
          ref={videoRef}
          controls
          autoPlay      
          playsInline
          preload="metadata"
          poster={eventOne.image}
          className="w-full h-full object-cover rounded-lg bg-black"
        >
              <source src={eventOne.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      ) : (
      
                <img src={eventOne?.image ? eventOne.image : slide3} alt="New Year 2025" className="w-full h-32 object-cover rounded-xl mb-3" />
          

          )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <h3 className="font-heading text-white font-semibold text-sm mb-2 text-shadow-soft">{eventOne?.title}</h3>
            <p className="line-clamp-2 font-body text-gray-200 text-sm mb-3 opacity-90">{eventOne?.description}</p>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{eventOne?.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{eventOne?.time}</span>
              </div>
            </div>
            <button onClick={() => openModal('event')} className="font-heading w-full mt-3 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 tracking-wide">
              View Details
            </button>
          </div>
        )}
      </div>
      
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
              className="absolute inset-0 w-full h-full object-cover sm:object-cover object-center md:object-cover"
              style={{ objectPosition: 'center center' }}
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
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-shadow-glow"
                  dangerouslySetInnerHTML={renderHighlightedText(slide.title, slide.highlight)}
                >
                </h1>
                <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-24 sm:mb-32 md:mb-40 lg:mb-8 opacity-95">
                  Transforming lives through faith, hope, and love
                </p>
                <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button onClick={() => navigate('/contactus')} className="font-heading bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base tracking-wide">
                    Join Us Today
                  </button>
                  <button onClick={() => navigate('/aboutus')} className="font-heading border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base tracking-wide">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
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

      {/* Navigation Arrows */}
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
      
      
      {/* Sermons Section */}
      <section id="sermons">
        <SermonsSection />
      </section>
      
      {/* Ministries Section */}
      <section id="ministries">
        <Ministries />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
    </div>
  );
};

export default Home;