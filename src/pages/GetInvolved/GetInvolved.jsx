import { useState } from "react";
import { FaChevronRight, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPray, FaUsers, FaBible, FaHeart } from "react-icons/fa";

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      title: "Sunday Services",
      icon: FaPray,
      activities: [
        "Worship & The Word: 7:30 am – 9:00 am",
        "Kid's Service: 8:00 am – 9:00 am",
        "Electronic City Branch: 7:30 am – 9:00 am",
      ],
    },
    {
      title: "House Fellowships",
      icon: FaUsers,
      activities: [
        "HSR Layout: 1st & 3rd Monday, 8:00 pm – 9:30 pm",
        "Indiranagar: 1st Tuesday, 7:00 pm – 8:30 pm",
        "Ejipura & Neelasandra: 1st & 3rd Tuesday, 10:00 am – 11:30 am",
        "Bannerghatta: 1st Tuesday, 12:30 pm – 2:00 pm",
        "Koramangala: 1st & 3rd Wednesday, 7:30 am – 9:00 am",
        "Madiwala: 2nd & 4th Wednesday, 7:30 am – 9:00 am",
        "Visiting New Fellowship: Every Last Tuesday – Any time",
      ],
    },
    {
      title: "Bible & Prayer",
      icon: FaBible,
      activities: [
        "Bible Study: Thursday, 9:00 am – 10:00 am",
        "Intercessory Prayer: Friday, 7:30 am – 8:30 am",
        "Fasting Prayer: Friday, 11:00 am – 1:00 pm",
      ],
    },
    {
      title: "Youth & Teen Activities",
      icon: FaHeart,
      activities: [
        "Youth Fellowship: Tuesday, 7:30 am – 9:00 am",
        "Teen's Fellowship: Saturday, 10:00 am – 11:00 am",
      ],
    },
    {
      title: "Women & Couple Fellowships",
      icon: FaUsers,
      activities: [
        "Couple Fellowship: 2nd Tuesday, 10:00 am – 12:00 pm",
        "Women's Fellowship: Every 2nd Tuesday, 12:00 am – 1:00 pm",
      ],
    },
    {
      title: "Saturday Worship & Practice",
      icon: FaPray,
      activities: ["Worship Practice: Saturday, 7:30 am – 9:00 am"],
    },
    {
      title: "Monthly Activities",
      icon: FaCalendarAlt,
      activities: [
        "Communion Service: 1st Sunday of Every Month",
        "Sunday House Fellowship: 1st Sunday, 6:00 pm – 7:00 pm",
      ],
    },
  ];

  const scrollTabsRight = () => {
    const container = document.querySelector('.tabs-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollTabsLeft = () => {
    const container = document.querySelector('.tabs-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 animate-pulse">
              A Year of Provision
            </span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Discover meaningful ways to connect, grow, and serve in our vibrant faith community
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <FaUsers className="w-3 h-3 text-purple-300" />
              <span className="text-white/80 text-xs font-medium">7 Ministry Areas</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <FaCalendarAlt className="w-3 h-3 text-purple-300" />
              <span className="text-white/80 text-xs font-medium">Weekly Activities</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <FaHeart className="w-3 h-3 text-purple-300" />
              <span className="text-white/80 text-xs font-medium">All Ages Welcome</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation with Arrows */}
        <div className="max-w-6xl mx-auto mb-12 relative">
          {/* Left Arrow */}
          <button
            onClick={scrollTabsLeft}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl"
          >
            <FaChevronRight className="w-4 h-4 transform rotate-180" />
          </button>

          {/* Tabs Container */}
          <div className="tabs-container flex overflow-x-auto gap-2 pb-4 scrollbar-hide md:mx-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-2xl font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-2xl scale-105'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${
                    activeTab === index ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span className="text-sm">{section.title}</span>
                  {activeTab === index && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollTabsRight}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
            {/* Section Header */}
            <div className="relative bg-gradient-to-r from-red-500 to-purple-600 px-8 py-10 overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {(() => {
                    const Icon = sections[activeTab].icon;
                    return (
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">
                      {sections[activeTab].title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <p className="text-white/90 text-sm font-medium">
                        {sections[activeTab].activities.length} {sections[activeTab].activities.length === 1 ? 'Activity' : 'Activities'} Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activities Grid */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-5">
                {sections[activeTab].activities.map((item, i) => {
                  const hasTime = /\d{1,2}:\d{2}\s?(am|pm|AM|PM)/.test(item);
                  const parts = item.split(':');
                  const title = parts[0];
                  const details = parts.slice(1).join(':');
                  
                  return (
                    <div
                      key={i}
                      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:from-white/20 hover:to-white/10 hover:border-white/40 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${i * 0.08}s both`
                      }}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="relative flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-red-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {hasTime ? (
                            <FaClock className="w-6 h-6 text-white" />
                          ) : (
                            <FaMapMarkerAlt className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors duration-300">
                            {title}
                          </h3>
                          {details && (
                            <p className="text-white/80 text-sm leading-relaxed">
                              {details.trim()}
                            </p>
                          )}
                        </div>
                        <FaChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}