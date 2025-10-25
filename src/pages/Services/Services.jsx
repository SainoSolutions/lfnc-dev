import React from 'react';
import { FaCross, FaBirthdayCake, FaHeart, FaHandsHelping } from 'react-icons/fa';
import baptismImg from '../../assets/images/Baptisim.jpg';
import birthdayImg from '../../assets/images/birthday.jpg';
import funeralImg from '../../assets/images/Funeral.jpg';
import volunteerImg from '../../assets/images/Volunteer.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      image: baptismImg,
      title: "Baptism Service",
      description: "We offer a special baptism service for infants and adults alike, conducted by our senior pastor.",
      icon: <FaCross className="w-6 h-6 text-red-600" />
    },
    {
      id: 2,
      image: birthdayImg,
      title: "Birthday Service",
      description: "Celebrate your special day with a personalized birthday service, including prayers and blessings.",
      icon: <FaBirthdayCake className="w-6 h-6 text-red-600" />
    },
    {
      id: 3,
      image: funeralImg,
      title: "Funeral Service",
      description: "We provide compassionate funeral services to honor and remember your loved ones.",
      icon: <FaHeart className="w-6 h-6 text-red-600" />
    },
    {
      id: 4,
      image: volunteerImg,
      title: "Volunteer Services",
      description: "Opportunities to serve the community and church through volunteering.",
      icon: <FaHandsHelping className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 px-4 sm:py-12 sm:px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Header */}
      <header className="text-center mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-2xl mb-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 mb-6 tracking-tight">
          Our Services
        </h1>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Comprehensive spiritual services to support you through life's important moments
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded-full"></div>
      </header>

      {/* Services Grid */}
      <main className="max-w-full mx-auto w-full px-2 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-9 sm:gap-8 w-full">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glassmorphism Card */}
              <div className="bg-white/90 rounded border border-white/20 shadow-lg hover:shadow-xl transition-all duration-150 ease-out hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-150 group-hover:scale-102"
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-bold text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Available
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-150">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded transition-colors duration-150">
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;