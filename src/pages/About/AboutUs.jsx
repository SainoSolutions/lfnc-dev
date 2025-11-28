import React from 'react';
import { FaCross, FaHeart, FaHandsHelping, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

// Import images for mission and pastors
import MissionImage from '../../assets/images/Hero/slide4.jpg'
import SeniorPastor from '../../assets/images/Hero/slide3.jpg';
import AssociatePastor from '../../assets/images/Hero/slide2.jpg';
import YouthPastor from '../../assets/images/Hero/slide1.jpg';
import LfncLogo from '../../assets/images/Hero/slide3.jpg';

const AboutUs = () => {
  const timelineData2017 = [
    {
      id: 1,
      title: "LFNC",
      location: "Bangalore (Koramangala)",
      period: "January 2017 - June 2017",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      position: "left"
    },
    {
      id: 2,
      title: "LFNC",
      location: "Bangalore (Electronic City)",
      period: "July 2017 - December 2017",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      position: "right"
    },
    {
      id: 3,
      title: "LFNC",
      location: "Nepal (Kathmandu)",
      period: "March 2017 - Ongoing",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      position: "left"
    }
  ];

  const timelineData2018 = [
    {
      id: 1,
      title: "LFNC",
      location: "Bangalore (Koramangala)",
      period: "January 2018 - June 2018",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      position: "left"
    },
    {
      id: 2,
      title: "LFNC",
      location: "Bangalore (Electronic City)",
      period: "July 2018 - December 2018",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      position: "right"
    },
    {
      id: 3,
      title: "LFNC",
      location: "Nepal (Kathmandu)",
      period: "March 2018 - Ongoing",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      position: "left"
    }
  ];

  const TimelineItem = ({ item, index }) => (
    <div className={`flex mb-8 ${item.position === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div className={`w-full md:w-5/12 ${item.position === 'left' ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 md:mr-4 flex-shrink-0">
              <img src={LfncLogo} alt="LFNC Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-blue-600">{item.title}</h3>
              <h4 className="text-orange-500 font-medium text-sm md:text-base">{item.location}</h4>
              <h5 className="text-gray-500 text-xs md:text-sm">{item.period}</h5>
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-sm leading-relaxed text-justify">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );

  const TimelineSection = ({ title, icon, data, sectionId }) => (
    <section id={sectionId} className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <span className="mr-3 md:mr-4 text-red-600">
              {icon}
            </span>
            <span className="text-red-600">{title}</span>
          </h1>
        </div>

        <div className="relative">
          {/* Timeline line - Show on all screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
          
          {/* Timeline items */}
          {data.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline dot - Show on all screens */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10"></div>
              <TimelineItem item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Background */}
      <section className="relative h-64 md:h-96 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
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
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-xs md:text-sm uppercase tracking-widest text-red-400 mb-2 md:mb-4">Living Faith Nepali Church</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Story</h1>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed font-medium">
            A community of faith, hope, and love serving the Nepali community and beyond.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Mission Image */}
          <div className="relative h-48 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={MissionImage}
              alt="Church community worship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-red-600 mb-2">Who We Are</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
              Living Faith Nepali Church is dedicated to spreading the Gospel of Jesus Christ 
              and serving our community with love and compassion.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We provide a spiritual home for Nepali-speaking believers and welcome people 
              from all backgrounds to join us in worship and fellowship.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest text-red-600 mb-2">Our Foundation</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl mx-auto mb-3 md:mb-4">
                <FaCross className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 md:mb-3">Biblical Truth</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Grounded in Scripture, guided by faith in Jesus Christ as our Lord and Savior.
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl mx-auto mb-3 md:mb-4">
                <FaHeart className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 md:mb-3">Community Love</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Building strong relationships and supporting one another in faith and life.
              </p>
            </div>

            <div className="text-center p-4 md:p-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl mx-auto mb-3 md:mb-4">
                <FaHandsHelping className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 md:mb-3">Cultural Heritage</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Celebrating our Nepali culture while embracing diversity in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline 2017 Section */}
      <TimelineSection 
        title="Ministry Timeline (2017)"
        icon={<FaBriefcase className="w-6 h-6 md:w-8 md:h-8" />}
        data={timelineData2017}
        sectionId="experience"
      />

      {/* Timeline 2018 Section */}
      <TimelineSection 
        title="Ministry Timeline (2018)"
        icon={<FaGraduationCap className="w-6 h-6 md:w-8 md:h-8" />}
        data={timelineData2018}
        sectionId="education"
      />

      {/* Leadership Section */}
      <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm uppercase tracking-widest text-red-600 mb-2">Our Leadership</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Meet Our Pastors</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Senior Pastor */}
          <div className="text-center group">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg mx-auto mb-3 md:mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <img 
                src={SeniorPastor}
                alt="Senior Pastor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <h3 className="text-lg md:text-xl font-black text-gray-900">Pastor Roshan Rai</h3>
            <p className="text-red-600 text-sm md:text-base">Senior Pastor</p>
          </div>

          {/* Associate Pastor */}
          <div className="text-center group">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg mx-auto mb-3 md:mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <img 
                src={AssociatePastor}
                alt="Associate Pastor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <h3 className="text-lg md:text-xl font-black text-gray-900">Pastor Samuel Rai</h3>
            <p className="text-red-600 text-sm md:text-base">Associate Pastor</p>
          </div>

          {/* Youth Pastor */}
          <div className="text-center group">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg mx-auto mb-3 md:mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <img 
                src={YouthPastor}
                alt="Youth Pastor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <h3 className="text-lg md:text-xl font-black text-gray-900">Elder Joshen</h3>
            <p className="text-red-600 text-sm md:text-base">Youth Leader</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Join Us This Sunday</h2>
          <p className="text-gray-300 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-medium">
            Experience the warmth of our community and the power of worship in your own language.
          </p>
          <button className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-3 px-6 md:px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base">
            Plan Your Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;