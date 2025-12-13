import React from 'react';
import { FaCross, FaHeart, FaHandsHelping } from 'react-icons/fa';

// Import images for mission and pastors
import MissionImage from '../../assets/images/Hero/slide4.jpg'
import SeniorPastor from '../../assets/images/Hero/slide3.jpg';
import AssociatePastor from '../..//assets/images/Hero/slide2.jpg';
import YouthPastor from '../../assets/images/Hero/slide1.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
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
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-4">Living Faith Nepali Church</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            A community of faith, hope, and love serving the Nepali community and beyond.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
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
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-2">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ministry Timeline</h2>
        </div>

        {/* 2017 Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">2017</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-lg font-black text-gray-900 mb-2">LFNC Koramangala</h4>
                  <p className="text-red-600 font-semibold mb-2">Bangalore (Koramangala)</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Started our ministry journey in Koramangala, establishing a spiritual home for the Nepali community.</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 flex-shrink-0">1</div>
                <div className="w-1/2"></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center">
                <div className="w-1/2"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 flex-shrink-0">2</div>
                <div className="w-1/2 pl-8">
                  <h4 className="text-lg font-black text-gray-900 mb-2">LFNC Electronic City</h4>
                  <p className="text-red-600 font-semibold mb-2">Bangalore (Electronic City)</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Expanded our reach to Electronic City, serving more families in the Nepali community.</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-lg font-black text-gray-900 mb-2">LFNC Nepal</h4>
                  <p className="text-red-600 font-semibold mb-2">Nepal (Kathmandu)</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Extended our ministry to Nepal, bringing the Gospel to our homeland.</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 flex-shrink-0">3</div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2018 Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">2018</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-lg font-black text-gray-900 mb-2">LFNC Koramangala Growth</h4>
                  <p className="text-red-600 font-semibold mb-2">Bangalore (Koramangala)</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Continued growth and strengthening of our Koramangala congregation with new programs.</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 flex-shrink-0">1</div>
                <div className="w-1/2"></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center">
                <div className="w-1/2"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 flex-shrink-0">2</div>
                <div className="w-1/2 pl-8">
                  <h4 className="text-lg font-black text-gray-900 mb-2">LFNC Electronic City Expansion</h4>
                  <p className="text-red-600 font-semibold mb-2">Bangalore (Electronic City)</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Expanded ministries and community outreach programs in Electronic City branch.</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="text-lg font-black text-gray-900 mb-2">LFNC Nepal Development</h4>
                  <p className="text-red-600 font-semibold mb-2">Nepal (Kathmandu)</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Strengthened our presence in Nepal with increased community engagement and outreach.</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold relative z-10 flex-shrink-0">3</div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-red-600 mb-2">Our Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Pastors</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Senior Pastor */}
          <div className="text-center group">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <img 
                src={SeniorPastor}
                alt="Senior Pastor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <h3 className="text-xl font-black text-gray-900">Pastor Roshan Rai</h3>
            <p className="text-red-600">Senior Pastor</p>
          </div>

          {/* Associate Pastor */}
          <div className="text-center group">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <img 
                src={AssociatePastor}
                alt="Associate Pastor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <h3 className="text-xl font-black text-gray-900">Pastor Samuel Rai</h3>
            <p className="text-red-600">Associate Pastor</p>
          </div>

          {/* Youth Pastor */}
          <div className="text-center group">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <img 
                src={YouthPastor}
                alt="Youth Pastor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <h3 className="text-xl font-black text-gray-900">Elder Joshen</h3>
            <p className="text-red-600">Youth Leader</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
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
