import React, { useState, useEffect, useRef } from 'react';
import { FaCross, FaHeart, FaHandsHelping } from 'react-icons/fa';
import LeadershipSection from '../../components/reuseable/LeadershipSection';


// Import images for mission and pastors
import MissionImage from '../../assets/images/Hero/slide4.jpg'
import SeniorPastor from '../../assets/images/Hero/slide3.jpg';
import AssociatePastor from '../..//assets/images/Hero/slide2.jpg';
import YouthPastor from '../../assets/images/Hero/slide1.jpg';

const AboutUs = () => {
  const [selectedEvent, setSelectedEvent] = useState({ year: 2017, index: 0 });
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

  const timelineEvents = [
    {
      year: 2017,
      events: [
        {
          title: "LFNC Koramangala",
          location: "Bangalore (Koramangala)",
          description: "Started our ministry journey in Koramangala, establishing a spiritual home for the Nepali community with powerful worship and teaching. We began with a small group of believers with a vision to reach the Nepali-speaking community.",
          icon: "🏠"
        },
        {
          title: "LFNC Electronic City",
          location: "Bangalore (Electronic City)",
          description: "Expanded our reach to Electronic City, serving more families with vibrant programs and community fellowships. This branch became a beacon of hope for families in the tech corridor.",
          icon: "🌟"
        },
        {
          title: "LFNC Nepal",
          location: "Nepal (Kathmandu)",
          description: "Extended our ministry to Nepal, bringing the Gospel to our homeland and establishing strong roots in Kathmandu. This marked the beginning of our international impact.",
          icon: "🕊️"
        }
      ]
    },
    {
      year: 2018,
      events: [
        {
          title: "LFNC Koramangala Growth",
          location: "Bangalore (Koramangala)",
          description: "Continued growth and strengthening of our Koramangala congregation with transformative programs and community impact. We launched new youth and family ministries.",
          icon: "📈"
        },
        {
          title: "LFNC Electronic City Expansion",
          location: "Bangalore (Electronic City)",
          description: "Expanded ministries and launched innovative community outreach programs reaching more families in Electronic City. Our fellowship grew exponentially.",
          icon: "🚀"
        },
        {
          title: "LFNC Nepal Development",
          location: "Nepal (Kathmandu)",
          description: "Strengthened our presence in Nepal with increased community engagement, discipleship, and missionary outreach initiatives across multiple regions.",
          icon: "💪"
        }
      ]
    },
    {
      year: 2019,
      events: [
        {
          title: "Digital Ministry Launch",
          location: "Online Platform",
          description: "Launched our first digital ministry platform to reach believers across the globe. This initiative allowed us to connect with the diaspora community and share God's Word beyond geographical boundaries.",
          icon: "💻"
        },
        {
          title: "Youth Leadership Program",
          location: "All Branches",
          description: "Established a comprehensive youth leadership development program to equip young believers for ministry. The program has transformed hundreds of lives through mentorship and training.",
          icon: "👥"
        },
        {
          title: "Community Outreach Initiative",
          location: "Bangalore & Nepal",
          description: "Started extensive community service programs including free medical camps, educational support for underprivileged children, and social welfare projects in local communities.",
          icon: "❤️"
        }
      ]
    },
    {
      year: 2020,
      events: [
        {
          title: "COVID-19 Response Ministry",
          location: "All Locations",
          description: "Pivoted to online worship services and launched comprehensive community relief programs during the pandemic. We distributed essential supplies and provided financial assistance to affected families.",
          icon: "🙏"
        },
        {
          title: "Online Discipleship Groups",
          location: "Global Reach",
          description: "Established small group Bible studies and prayer meetings online, enabling deeper spiritual growth and fellowship among our scattered congregation members worldwide.",
          icon: "📚"
        },
        {
          title: "Humanitarian Aid Campaign",
          location: "Nepal",
          description: "Organized special fundraising and aid distribution campaigns to support communities in Nepal affected by economic challenges and natural disasters.",
          icon: "🤝"
        }
      ]
    },
    {
      year: 2021,
      events: [
        {
          title: "Ministry Expansion",
          location: "New Branches",
          description: "Opened two new ministry centers in emerging Nepali communities. These centers became vibrant hubs for worship, teaching, and community fellowship.",
          icon: "🌍"
        },
        {
          title: "Worship Music Production",
          location: "Recording Studio",
          description: "Launched our own worship music production team, creating contemporary Christian music in Nepali language to inspire and uplift worshippers globally.",
          icon: "🎵"
        },
        {
          title: "Missions & Outreach Expansion",
          location: "Multiple Countries",
          description: "Expanded our missionary outreach to neighboring countries, sending teams for evangelism, teaching, and community development projects in underserved regions.",
          icon: "✈️"
        }
      ]
    },
    {
      year: 2022,
      events: [
        {
          title: "Annual Leadership Conference",
          location: "Bangalore",
          description: "Organized our first annual church leadership conference bringing together leaders and pastors from all our branches to share vision, strategies, and spiritual insights.",
          icon: "🎯"
        },
        {
          title: "Children's Ministry Enhancement",
          location: "All Centers",
          description: "Developed comprehensive children's ministry programs with trained facilitators, creative teaching materials, and age-appropriate spiritual formation activities.",
          icon: "👶"
        },
        {
          title: "Building Fund Campaign",
          location: "Various Locations",
          description: "Launched a major fundraising campaign to construct permanent church facilities in Nepal and strengthen infrastructure in our Bangalore branches.",
          icon: "🏗️"
        }
      ]
    },
    {
      year: 2023,
      events: [
        {
          title: "Women's Empowerment Program",
          location: "All Branches",
          description: "Established dedicated women's empowerment and discipleship programs focusing on spiritual growth, leadership development, and addressing community issues affecting women.",
          icon: "👩‍💼"
        },
        {
          title: "Young Professionals Ministry",
          location: "Bangalore",
          description: "Launched specialized ministry targeting young professionals in the tech industry, addressing workplace challenges from a Biblical perspective and building faith-based professional networks.",
          icon: "💼"
        },
        {
          title: "Mobile Clinic Initiative",
          location: "Rural Nepal",
          description: "Started mobile health clinics providing free medical checkups and basic healthcare to remote villages in Nepal, demonstrating Christ's love through practical service.",
          icon: "🚑"
        }
      ]
    },
    {
      year: 2024,
      events: [
        {
          title: "Global Network Building",
          location: "International",
          description: "Established partnerships with like-minded churches and ministries worldwide to strengthen our global network and increase collaborative Kingdom impact.",
          icon: "🌐"
        },
        {
          title: "Next Generation Initiative",
          location: "All Centers",
          description: "Launched mentorship programs connecting seasoned believers with younger generations to ensure spiritual legacy and continuity of our ministry vision.",
          icon: "🔗"
        },
        {
          title: "Vision 2025 Planning",
          location: "Strategic Sessions",
          description: "Completed comprehensive strategic planning sessions to define our vision for the next phase of ministry, focusing on deeper spiritual impact and wider community reach.",
          icon: "🎪"
        }
      ]
    }
  ];

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
