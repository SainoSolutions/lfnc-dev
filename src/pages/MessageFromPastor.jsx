import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuoteLeft, FaHeart, FaCross, FaHandsHelping } from 'react-icons/fa';
import { GiPrayer } from 'react-icons/gi';
import psRoshan from '../assets/images/AboutUs/Pastors/Pastor.jpeg'


const MessageFromPastor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();

  const handleVisitUsClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: "Welcome to Our Church Family",
      content: "Dear beloved congregation and visitors, it brings me immense joy to welcome you to Living Faith Nepali Church. For over a decade, we have been a beacon of hope and faith in our community, touching lives and transforming hearts through the love of Jesus Christ.",
      icon: <FaHeart className="w-8 h-8" />
    },
    {
      title: "Our Mission & Vision",
      content: "Our mission is simple yet profound: to spread the Gospel of Jesus Christ, nurture spiritual growth, and serve our community with unwavering love. We believe in building bridges of faith that connect hearts across cultures and generations, creating a family where everyone belongs.",
      icon: <FaCross className="w-8 h-8" />
    },
    {
      title: "Building Faith Together",
      content: "Faith is not a solitary journey. Here at LFNC, we walk together, supporting one another through life's challenges and celebrating God's blessings. Through prayer, worship, and fellowship, we grow stronger in our relationship with Christ and with each other.",
      icon: <GiPrayer className="w-8 h-8" />
    },
    {
      title: "Serving Our Community",
      content: "We are called to be the hands and feet of Jesus in our community. Through our various ministries, outreach programs, and acts of service, we strive to make a tangible difference in the lives of those around us, showing God's love through our actions.",
      icon: <FaHandsHelping className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-400/25 to-red-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-gradient-to-br from-red-500/20 via-purple-400/25 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/15 via-purple-400/20 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-purple-600 rounded-full mb-8 shadow-2xl">
            <FaQuoteLeft className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-glow">
            Message from <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Pastor</span>
          </h1>
          <p className="font-body text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A heartfelt message from Pastor Roshan about our church's mission, vision, and the journey of faith we share together.
          </p>
        </div>

        {/* Pastor Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Pastor Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square rounded-2xl mb-6 overflow-hidden shadow-inner">
                <img 
                  src={psRoshan} 
                  alt="Pastor Roshan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display text-3xl font-bold text-white mb-2">Pastor Roshan</h3>
                <p className="font-heading text-xl text-purple-300 mb-4">Senior Pastor & Founder</p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-body text-gray-300 italic">
                    "Serving God's people with love, compassion, and unwavering faith for over 18+ years."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeSection === index 
                    ? 'bg-white/15 border-purple-400 shadow-2xl scale-105' 
                    : 'bg-white/10 border-white/20 hover:bg-white/12 hover:border-white/30'
                } backdrop-blur-lg border rounded-2xl p-6 shadow-xl`}
                onClick={() => setActiveSection(index)}
                onMouseEnter={() => setActiveSection(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    activeSection === index 
                      ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg' 
                      : 'bg-white/20 text-purple-300 group-hover:bg-white/30'
                  }`}>
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-heading text-xl font-semibold mb-3 transition-colors duration-300 ${
                      activeSection === index ? 'text-white' : 'text-gray-200'
                    }`}>
                      {section.title}
                    </h3>
                    <p className={`font-body leading-relaxed transition-all duration-500 ${
                      activeSection === index 
                        ? 'text-gray-200 opacity-100 max-h-96' 
                        : 'text-gray-400 opacity-80 max-h-20 overflow-hidden'
                    }`}>
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scripture Quote */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <FaQuoteLeft className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-relaxed">
              "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."
            </blockquote>
            <cite className="font-heading text-xl text-purple-300">- Jeremiah 29:11</cite>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-600/20 to-red-600/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              Join Our Church Family
            </h3>
            <p className="font-body text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're seeking spiritual growth, community connection, or simply a place to belong, 
              our doors and hearts are always open to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleVisitUsClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-heading font-semibold rounded-full transition-all duration-300 hover:from-purple-700 hover:to-red-700 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Visit Us This Sunday</span>
              </button>
              <button className="group relative px-8 py-4 bg-white/20 text-white font-heading font-semibold rounded-full border-2 border-white/30 transition-all duration-300 hover:bg-white/30 hover:border-white/50 transform hover:scale-105 shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact Pastor Roshan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFromPastor;