import React, { useState, useCallback } from 'react';
import { FaCrown, FaUsers, FaHandsHelping, FaMusic, FaMapMarkerAlt } from 'react-icons/fa';
import { GiPrayer } from 'react-icons/gi';
import SeniorPastor from '../../assets/images/Hero/slide3.jpg';
import AsstPastor from '../../assets/images/AboutUs/Pastors/AsstPastor.jpeg';
import PalkoPariyar from '../../assets/images/WorshipLeaders/1.jpeg';
import SilasDarnal from '../../assets/images/Decons/1.jpg';
import SunitaDarnal from '../../assets/images/Decons/2.jpeg';
import Joshen from '../../assets/images/Leaders/Joshen.png';
import Ruthend from '../../assets/images/MediaTeam/Ruthend.png';
import Santosh from '../../assets/images/MediaTeam/Santosh.png';
import Pawan from '../../assets/images/MediaTeam/Pawan.png';
import Andru from '../../assets/images/Volunteer/Andru.png';
import GracyTamang from '../../assets/images/SundaySchool/GracyTamang.jpg';
import Winnie from '../../assets/images/SundaySchool/wini.png';
import user2 from '../../assets/images/user2.png';
import CustomDropdown from './CustomDropdown';

const LeadershipSection = () => {
  const [activeTab, setActiveTab] = useState('pastors');
  const [selectedArea, setSelectedArea] = useState('ejipura');

  const handleAreaChange = useCallback((value) => {
    const areaMap = {      
      'Ejipura': 'ejipura',
      'Koramangala': 'koramangala',
      'Madiwala': 'madiwala',
      'Neelsandara': 'neelsandara',
      'HSR Layout': 'hsrLayout',
      'Indra Nagar': 'indraNagar',
      'Bannerghatta': 'bannerghatta'
    };
    setSelectedArea(areaMap[value]);
  }, []);

  const leadershipData = {
    pastors: {
      title: 'Pastors',
      icon: <FaCrown className="w-5 h-5" />,
      members: [
        {
          name: 'Pastor Roshan Rai',
          position: 'Senior Pastor & Founder',
          description: 'Leading our church with vision and passion for over 18 years, Pastor Roshan has been instrumental in establishing LFNC across multiple locations.',
          experience: '23+ Years Ministry',
          specialization: 'Pastoral Care & Counseling, Church Planting & Leadership'
        },
        {
          name: 'Pastor Samuel Rai',
          position: 'Senior Pastor & Founder',
          description: 'Dedicated to pastoral care and community outreach, Pastor Samuel brings deep theological knowledge and compassionate leadership to our congregation.',
          experience: '16+ Years Ministry',
          specialization: 'Pastoral Care & Counseling'
        }
      ]
    },
    leaders: {
      title: 'Leaders',
      icon: <FaUsers className="w-5 h-5" />,
      members: [
        {
          name: 'Elder Joshen Lepcha',
          position: 'Youth Leader',
          description: 'Passionate about empowering the next generation, Elder Joshen leads our youth ministry with energy and biblical wisdom.',
          experience: '15+ Years Leadership',
          specialization: 'Discipleship &  Music Ministry'
        },
        
      ]
    },
    deacons: {
      title: 'Deacons',
      icon: <FaHandsHelping className="w-5 h-5" />,
      members: [
        {
          name: 'Deacon Silas Darnal',
          position: 'Community Outreach Deacon',
          description: 'Leading our community service initiatives and charitable programs, Deacon Maya coordinates our outreach efforts with local communities.',
          experience: '10+ Years Service',
          specialization: 'Community Service & Outreach'
        },
        {
          name: 'Deacon Sunita Darnal',
          position: 'Head Deacon',
          description: 'Serving faithfully in church administration and community service, Deacon Rajesh ensures smooth operations and member care.',
          experience: '10+ Years Service',
          specialization: 'Administration & Member Care'
        },
        
      ]
    },
    worship: {
      title: 'Worship Leaders',
      icon: <FaMusic className="w-5 h-5" />,
      members: [
        {
          name: 'Brother Palko Pariyar',
          position: 'Lead Worship Team',
          description: "Gifted musician and worship leader who creates an atmosphere of praise and worship, leading our congregation into God's presence through music.",
          experience: '10+ Years Ministry',
          specialization: 'Worship Leading & Music Ministry'
        }
      ]
    },
    media: {
      title: 'Media Team',
      icon: <FaMusic className="w-5 h-5" />,
      members: [
        {
          name: 'Brother Ruthend Santos',
          position: 'Media Director',
          description: 'Leading our media ministry with technical expertise, ensuring quality audio-visual production for services and online streaming.',
          experience: '3+ Years Service',
          specialization: 'Video Production & Live Streaming'
        },
        {
          name: 'Brother Santosh Sunar',
          position: 'Media Team Member',
          description: 'Supporting our media operations with dedication, helping to capture and share our church services and events.',
          experience: '2+ Years Service',
          specialization: 'Audio-Visual Production'
        },
        {
          name: 'Brother Pritam Chettry',
          position: 'Media Team Member',
          description: 'Contributing to our media ministry with technical skills, ensuring smooth production of church content.',
          experience: '2+ Years Service',
          specialization: 'Technical Support & Production'
        },
        {
          name: 'Brother Pawan Mukhia',
          position: 'Media Team Member',
          description: 'Serving faithfully in our media team, helping to broadcast God\'s message through modern technology.',
          experience: '2+ Years Service',
          specialization: 'Media Production & Support'
        }
      ]
    },
    volunteers: {
      title: 'Volunteers',
      icon: <FaHandsHelping className="w-5 h-5" />,
      members: [
        {
          name: 'Brother Bhupen Tamang',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '2+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
        {
          name: 'Brother Andru Sherpa',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '2+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
      ]
    },
    sundaySchool: {
      title: 'Sunday School Teachers',
      icon: <FaUsers className="w-5 h-5" />,
      members: [
        {
          name: 'Sister Winnie Thapa',
          position: 'Sunday School Teacher',
          description: 'Passionate about teaching children biblical truths through creative lessons and engaging activities.',
          experience: '3+ Years Teaching',
          specialization: 'Children Education & Bible Teaching'
        },
        {
          name: 'Sister Gracy Tamang',
          position: 'Sunday School Teacher',
          description: 'Dedicated to nurturing young hearts, creating engaging and safe environments for children to learn about God.',
          experience: '2+ Years Teaching',
          specialization: 'Children Ministry & Education'
        }
      ]
    },
    area: {
      title: 'Area Leaders',
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      areas: {
        ejipura: {
          name: 'Ejipura',
          members: [
            {
              name: 'Elder Joshen Lepcha ',
              position: 'Ejipura Area Leader',
              description: 'Overseeing our Ejipura branch, ensuring effective ministry and pastoral care for families in the area.',
              experience: '3+ Years Leadership',
              specialization: 'Local Church Leadership'
            }
          ]
        },
        koramangala: {
  name: 'Koramangala',
  members: [
    {
      name: 'Manzil Thapa',
      position: 'Koramangala Area Leader',
      description: 'Serving our Koramangala community with pastoral care and leadership.',
      experience: '2+ Years Leadership',
      specialization: 'Local Church Leadership'
        }
      ]
    }
    ,        
        madiwala: {
          name: 'Madiwala',
          members: [
            {
              name: 'Bhupen Tamang',
              position: 'Madiwala Area Leader',
              description: 'Leading our Madiwala congregation with dedication and spiritual guidance.',
              experience: '3+ Years Leadership',
              specialization: 'Community Building & Discipleship'
            }
          ]
        },         
        neelsandara: {
          name: 'Neelsandara',
          members: [
            {
              name: 'Sunita Darnal',
              position: 'Neelsandara Area Leader',
              description: 'Serving our Neelsandara community with pastoral care and leadership.',
              experience: '2+ Years Leadership',
              specialization: 'Local Church Leadership'
            }
          ]
        },
        hsrLayout: {
          name: 'HSR Layout',
          members: [
            {
              name: 'Erick Subba',
              position: 'HSR Layout Area Leader',
              description: 'Overseeing ministry activities in HSR Layout with commitment and care.',
              experience: '3+ Years Leadership',
              specialization: 'Community Outreach & Leadership'
            }
          ]
        },
        indiraNagar: {
          name: 'Indra Nagar',
          members: [
            {
              name: 'Jasmine Thapa',
              position: 'Indra Nagar Area Leader',
              description: 'Leading our Indira Nagar branch with vision and pastoral excellence.',
              experience: '4+ Years Leadership',
              specialization: 'Church Leadership & Growth'
            }
          ]
        },
         bannerghatta: {
          name: 'Bannerghatta',
          members: [
            {
              name: 'Ps. Roshan Rai',
              position: 'Bannerghatta Area Leader',
              description: 'Leading our Bannerghatta branch with vision and pastoral excellence.',
              experience: '23+ Years Leadership',
              specialization: 'Church Leadership & Growth'
            }
          ]
        }        
      }
    }
  };

  const tabs = [
    { key: 'pastors', label: 'Pastors', icon: <FaCrown className="w-4 h-4" /> },
    { key: 'leaders', label: 'Leaders', icon: <FaUsers className="w-4 h-4" /> },
    { key: 'deacons', label: 'Deacons', icon: <FaHandsHelping className="w-4 h-4" /> },
    { key: 'worship', label: 'Worship', icon: <FaMusic className="w-4 h-4" /> },
    { key: 'media', label: 'Media Team', icon: <FaMusic className="w-4 h-4" /> },
    { key: 'volunteers', label: 'Volunteers', icon: <FaHandsHelping className="w-4 h-4" /> },
    { key: 'sundaySchool', label: 'Sunday School', icon: <FaUsers className="w-4 h-4" /> },
    { key: 'area', label: 'Area Leaders', icon: <FaMapMarkerAlt className="w-4 h-4" /> }
  ];

  const currentData = activeTab === 'area' 
    ? { ...leadershipData?.area, members: leadershipData?.area?.areas[selectedArea]?.members }
    : leadershipData[activeTab];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-2 font-semibold">Our Leadership</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 animate-pulse">Team</span></h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Dedicated servants of God leading our church with passion, wisdom, and love for the community.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 shadow-sm'
                }`}
              >
                <div className={`transition-colors duration-300 ${
                  activeTab === tab.key ? 'text-white' : 'text-gray-500 group-hover:text-purple-600'
                }`}>
                  {tab.icon}
                </div>
                <span>{tab.label}</span>
                {activeTab === tab.key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-50"></div>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-red-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
              {/* Tab Header */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-red-500 to-purple-600 rounded-full text-white shadow-lg">
                  {currentData.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{currentData.title}</h3>
              </div>

              {/* Area Dropdown */}
              {activeTab === 'area' && (
                <div className="mb-6 flex justify-center">
                  <div className="w-64">
                    <CustomDropdown
                      options={['Ejipura', 'Koramangala', 'Madiwala', 'Neelsandara', 'HSR Layout', 'Indra Nagar', 'Bannerghatta' ]}
                      value={selectedArea === 'ejipura' ? 'Ejipura' : selectedArea === 'koramangala' ? 'Koramangala' : selectedArea === 'madiwala' ? 'Madiwala' : selectedArea === 'neelsandara' ? 'Neelsandara' : selectedArea === 'hsrLayout' ? 'HSR Layout' : 'Indra Nagar'}
                      onChange={handleAreaChange}
                      placeholder="Select Area"
                      className="membership-dropdown"
                    />
                  </div>
                </div>
              )}

              {/* Members Grid */}
              <div className={`grid md:grid-cols-2 gap-8 ${activeTab === 'area' ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`}>
                {currentData.members.map((member, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 shadow-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Dark glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/30 transition-all duration-500"></div>
                    
                    <div className="relative z-10">
                    {/* Member Avatar */}
                    <div className="w-40 h-40 rounded-full mb-4 mx-auto group-hover:scale-105 transition-transform duration-300 overflow-hidden ring-4 ring-purple-500/30 group-hover:ring-purple-500/50 shadow-2xl">
                      {member.name === 'Pastor Roshan Rai' ? (
                        <img 
                          src={SeniorPastor} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Pastor Samuel Rai' ? (
                        <img 
                          src={AsstPastor} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Brother Palko Pariyar' ? (
                        <img 
                          src={PalkoPariyar} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Deacon Silas Darnal' ? (
                        <img 
                          src={SilasDarnal} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: '40% 30%' }}
                        />
                      ) : member.name === 'Deacon Sunita Darnal' ? (
                        <img 
                          src={SunitaDarnal} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center 30%' }}
                        />
                      ) : member.name === 'Elder Joshen Lepcha' ? (
                        <img 
                          src={Joshen} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Brother Ruthend Santos' ? (
                        <img 
                          src={Ruthend} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Brother Santosh Sunar' ? (
                        <img 
                          src={Santosh} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Brother Pawan Mukhia' ? (
                        <img 
                          src={Pawan} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Brother Andru Sherpa' ? (
                        <img 
                          src={Andru} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Sister Gracy Tamang' ? (
                        <img 
                          src={GracyTamang} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : member.name === 'Sister Winnie Thapa' ? (
                        <img 
                          src={Winnie} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          src={user2} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Member Info */}
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                      <p className="text-red-400 font-semibold text-sm mb-2">{member.position}</p>
                      <p className="text-gray-200 text-sm leading-relaxed mb-3">{member.description}</p>
                    </div>

                    {/* Member Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-xs bg-purple-500/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-500/20">
                        <span className="text-gray-400">Experience:</span>
                        <span className="font-semibold text-purple-400">{member.experience}</span>
                      </div>
                      <div className="flex flex-col text-xs bg-red-500/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-red-500/20">
                        <span className="text-gray-400 mb-1">Focus:</span>
                        <span className="font-semibold text-red-400">{member.specialization}</span>
                      </div>
                    </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tab Footer */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-purple-50 rounded-full text-sm text-gray-600">
                  <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></span>
                  <span>Serving with dedication and love</span>
                  <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Serve?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              God has gifted each of us to serve His kingdom. If you feel called to leadership or ministry, 
              we would love to help you discover and develop your gifts.
            </p>
            <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Contact Leadership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;