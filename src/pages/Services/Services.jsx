import React from 'react';
import { useNavigate } from 'react-router-dom';
import baptismImg from '../../assets/images/Baptisim.jpg';
import birthdayImg from '../../assets/images/birthday.jpg';
import funeralImg from '../../assets/images/Funeral.jpg';
import volunteerImg from '../../assets/images/Volunteer.jpg';

// Custom SVG Icons
const CrossIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CakeIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a2 2 0 00-2 2v1a2 2 0 104 0V4a2 2 0 00-2-2zM3 8a2 2 0 012-2h10a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2V8zM4 13a1 1 0 011-1h10a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z"/>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
  </svg>
);

const HandsIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      image: baptismImg,
      title: "Baptism Service",
      description: "Experience a sacred baptism ceremony conducted by our senior pastor, welcoming you into our faith community with reverence and joy.",
      icon: <CrossIcon />,
      benefits: ["Private or group ceremonies", "Senior pastor officiation", "Photography available"]
    },
    {
      id: 2,
      image: birthdayImg,
      title: "Birthday Service",
      description: "Celebrate your special day with a personalized service that combines joyful celebration with spiritual blessings and meaningful prayers.",
      icon: <CakeIcon />,
      benefits: ["Customized blessings", "Group celebration", "Special prayers"]
    },
    {
      id: 3,
      image: funeralImg,
      title: "Funeral Service",
      description: "Compassionate and dignified funeral services that honor your loved ones' memory while providing comfort and support to grieving families.",
      icon: <HeartIcon />,
      benefits: ["Compassionate support", "Memorial arrangements", "Family counseling"]
    },
    {
      id: 4,
      image: volunteerImg,
      title: "Volunteer Services",
      description: "Join our vibrant community of volunteers and make a meaningful impact through various outreach programs and church activities.",
      icon: <HandsIcon />,
      benefits: ["Community outreach", "Skill development", "Make a difference"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative subtle circles - Optimized for mobile */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 md:animate-pulse" />
        <div className="absolute top-60 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 md:animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 md:animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Spiritual <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">Services</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Supporting you through life's most meaningful moments with compassion, faith, and dedication
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-500/30">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-black text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 pt-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-400 text-xs">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - Same as Donate button */}
                  <button 
                    onClick={() => {
                      if (service.id === 1) navigate('/baptism-service');
                      else if (service.id === 2) navigate('/birthday-service');
                      else if (service.id === 3) navigate('/funeral-service');
                      else if (service.id === 4) navigate('/volunteer-service');
                    }}
                    className="w-full mt-6 bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>Learn More</span>
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Assistance?</h3>
              <p className="text-gray-400">Our pastoral team is available 24/7 for urgent matters</p>
            </div>
            <button onClick={() => { navigate('/contactus');                     
                    }}className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Contact Us Now
            </button>
          </div>
        </div>
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Services;