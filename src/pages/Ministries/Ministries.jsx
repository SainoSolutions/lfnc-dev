import React from 'react';
import { FaCalendarAlt, FaClock, FaUsers } from 'react-icons/fa';
import kidsImg from '../../assets/images/Ministries/Kids.jpg'
import teensImg from '../../assets/images/Ministries/Teens.jpg'
import youthImg from '../../assets/images/Ministries/Youth.jpg'
import mensImg from '../../assets/images/Ministries/Mens.jpg'

const Ministries = () => {
  const ministries = [
    {
      id: 1,
      image: kidsImg,
      title: "Kids Ministry",
      description: "Engaging activities and lessons for children to learn about faith.",
      day: "Sunday",
      time: "10:00 AM",
      age: "Ages 3-12",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      image: teensImg,
      title: "Teens Ministry",
      description: "Dynamic programs and discussions for teenagers to explore their faith.",
      day: "Friday",
      time: "7:00 PM",
      age: "Ages 13-17",
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
      borderColor: "border-purple-200"
    },
    {
      id: 3,
      image: youthImg,
      title: "Youth Ministry",
      description: "Dynamic programs and discussions for young adults to explore their faith.",
      day: "Saturday",
      time: "6:30 PM",
      age: "Ages 18-30",
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      borderColor: "border-green-200"
    },
    {
      id: 5,
      image: mensImg,
      title: "Men's Ministry",
      description: "Building camaraderie and spiritual growth among men through various activities.",
      day: "Saturday",
      time: "8:00 AM",
      age: "Men 18+",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-100",
      borderColor: "border-orange-200"
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
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 mb-6 tracking-tight">
          Our Ministries
        </h1>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Join our vibrant community and grow in faith together through meaningful connections
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded-full"></div>
      </header>

      {/* Ministries Grid */}
      <main className="max-w-full mx-auto w-full px-2 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-9 sm:gap-8 w-full">
          {ministries.map((ministry, index) => (
            <div 
              key={ministry.id}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glassmorphism Card */}
              <div className="bg-white/90 rounded border border-white/20 shadow-lg hover:shadow-xl transition-all duration-150 ease-out hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t">
                  <img 
                    src={ministry.image} 
                    alt={ministry.title}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-150 group-hover:scale-102"
                  />

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-bold text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Join Us
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-150">
                    {ministry.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                    {ministry.description}
                  </p>
                  
                  {/* Info Grid */}
                  <div className="grid grid-cols-1 gap-2 mb-3 flex-1">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <FaCalendarAlt className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{ministry.day}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <FaClock className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{ministry.time}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                        <FaUsers className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{ministry.age}</span>
                    </div>
                  </div>
                  
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

export default Ministries;