import React, { useState, useEffect, useRef } from 'react';
import { FaCross, FaHeart, FaHandsHelping } from 'react-icons/fa';
import LeadershipSection from '../../components/reuseable/LeadershipSection';
import { timelineEvents } from '../../data/timelineData';


// Import images for mission and pastors
import MissionImage from '../../assets/images/Hero/slide4.jpg'
import SeniorPastor from '../../assets/images/Hero/slide3.jpg';
import AssociatePastor from '../..//assets/images/Hero/slide2.jpg';
import YouthPastor from '../../assets/images/Hero/slide1.jpg';

const AboutUs = () => {
  const [selectedEvent, setSelectedEvent] = useState({ year: 2007, index: 0 });
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const yearsRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown on Escape or outside click
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setYearDropdownOpen(false);
    }
    function onClick(e) {
      if (yearDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setYearDropdownOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [yearDropdownOpen]);



  // Auto-scroll years column to the selected year
  useEffect(() => {
    const el = document.getElementById(`year-btn-${selectedEvent.year}`);
    if (el && yearsRef.current) {
      const container = yearsRef.current;
      const top = el.offsetTop - container.offsetTop - 12;
      container.scrollTo({ top, behavior: 'smooth' });
    }
  }, [selectedEvent]);

  const currentYearData = timelineEvents.find(e => e.year === selectedEvent.year);
  const currentEvent = currentYearData?.events[selectedEvent.index];
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/50 via-pink-50/40 via-red-50/35 via-orange-50/30 to-blue-50/25 relative overflow-hidden">
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
      {/* Hero Section with Image Background */}
      <section className="relative h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-600/20 to-blue-600/20"></div>
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-4">Living Faith Nepali Church</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            A community of faith, hope, and love serving the Nepali community and beyond.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Image */}
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={MissionImage}
              alt="Church community worship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-red-600 mb-2">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Living Faith Nepali Church is dedicated to spreading the Gospel of Jesus Christ 
              and serving our community with love and compassion.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We provide a spiritual home for Nepali-speaking believers and welcome people 
              from all backgrounds to join us in worship and fellowship.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-2">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaCross className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Biblical Truth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Grounded in Scripture, guided by faith in Jesus Christ as our Lord and Savior.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaHeart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Community Love</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building strong relationships and supporting one another in faith and life.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                <FaHandsHelping className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Cultural Heritage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Celebrating our Nepali culture while embracing diversity in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Timeline Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-2 font-semibold">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ministry Timeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Click on any year to explore our ministry milestones</p>
            <div className="mt-6 flex justify-center">
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={yearDropdownOpen}
                  onClick={() => setYearDropdownOpen((s) => !s)}
                  className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3.5A1.5 1.5 0 002 5.5v10A1.5 1.5 0 003.5 17h13a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0016.5 4H15V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8a1 1 0 011-1h10a1 1 0 011 1v2H4V8z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-black">{selectedEvent.year}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 text-gray-500 transform transition-transform ${yearDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                {yearDropdownOpen && (
                  <ul
                    role="listbox"
                    tabIndex={-1}
                    className="absolute z-50 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg max-h-56 overflow-y-auto py-1"
                    onMouseLeave={() => setYearDropdownOpen(false)}
                  >
                    {timelineEvents.map((item) => (
                      <li key={item.year} role="option" aria-selected={selectedEvent.year === item.year}>
                        <button
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-50 ${selectedEvent.year === item.year ? 'bg-purple-100 font-bold' : ''}`}
                          onClick={() => {
                            setSelectedEvent({ year: item.year, index: 0 });
                            setYearDropdownOpen(false);
                          }}
                        >
                          {item.year}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
            {/* Vertical Timeline */}
            <div ref={yearsRef} className="lg:w-64 flex lg:flex-col gap-4 lg:gap-6 lg:overflow-y-auto lg:max-h-[420px] overflow-x-hidden bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/10 relative">
              <div className="hidden lg:block absolute -right-3 top-6 bottom-6 w-1 bg-gradient-to-b from-red-300 to-transparent rounded"></div>
              {timelineEvents.map((item) => (
                <div key={item.year} className="flex-shrink-0 flex justify-center">
                  <button
                    id={`year-btn-${item.year}`}
                    onClick={() => setSelectedEvent({ year: item.year, index: 0 })}
                    className={`w-40 py-3 px-4 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-110 shadow-lg mx-auto border-2 ${
                      selectedEvent.year === item.year
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-2xl border-red-400 ring-4 ring-red-200/50'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700 shadow-md'
                    }`}
                  >
                    {item.year}
                  </button>
                </div>
              ))}
            </div>

            {/* Events List & Detail Panel */}
            <div className="lg:flex-1 lg:min-h-[420px]">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Events Grid */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Year {selectedEvent.year}</h3>
                  <div className="space-y-3">
                    {currentYearData?.events.map((event, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedEvent({ year: selectedEvent.year, index: idx })}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-start gap-4 ${
                          selectedEvent.index === idx
                            ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white'
                            : 'bg-white text-gray-900 border border-gray-200'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-xl flex-shrink-0">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-black text-sm mb-1">{event.title}</p>
                          <p className="text-xs opacity-90 mb-2">{event.location}</p>
                          <p className="text-xs text-gray-600 line-clamp-2">{event.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Detail Panel */}
                {currentEvent && (
                  <div className="md:col-span-1">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-transparent h-full transform transition-all duration-500 animate-in">
                      <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white p-4 rounded-xl mb-6 flex items-center gap-4">
                        <span className="text-5xl">{currentEvent.icon}</span>
                        <div>
                          <h4 className="text-xl font-black">{currentEvent.title}</h4>
                          <p className="text-white/90 font-medium text-sm">{currentEvent.location}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-700 leading-relaxed text-justify">{currentEvent.description}</p>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <div className="flex-1 bg-red-50 rounded-lg p-3 text-center">
                          <p className="text-2xl font-black text-red-600">{selectedEvent.year}</p>
                          <p className="text-xs text-red-600 font-semibold">Milestone</p>
                        </div>
                        <div className="flex-1 bg-purple-50 rounded-lg p-3 text-center">
                          <p className="text-2xl font-black text-purple-600">{selectedEvent.index + 1}</p>
                          <p className="text-xs text-purple-600 font-semibold">Event</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* CTA Section */}
      <section className="relative z-10 py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us This Sunday</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-medium">
            Experience the warmth of our community and the power of worship in your own language.
          </p>
          <button className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Plan Your Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;