import React, { useState, useCallback } from 'react';
import { FaCrown, FaUsers, FaHandsHelping, FaMusic, FaMapMarkerAlt } from 'react-icons/fa';
import { GiPrayer } from 'react-icons/gi';
import SeniorPastor from '../../assets/images/Hero/slide3.jpg';
import AsstPastor from '../../assets/images/AboutUs/Pastors/AsstPastor.jpeg';
import CustomDropdown from './CustomDropdown';

const LeadershipSection = () => {
  const [activeTab, setActiveTab] = useState('pastors');
  const [selectedArea, setSelectedArea] = useState('koramangala');

  const handleAreaChange = useCallback((value) => {
    const areaMap = {
      'Koramangala': 'koramangala',
      'Electronic City': 'electronicCity',
      'Nepal': 'nepal'
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
          name: 'Elder Joshen',
          position: 'Youth Leader',
          description: 'Passionate about empowering the next generation, Elder Joshen leads our youth ministry with energy and biblical wisdom.',
          experience: '4+ Years Leadership',
          specialization: 'Youth Ministry & Discipleship'
        },
        {
          name: 'Sister Priya Rai',
          position: "Women's Ministry Leader",
          description: "Dedicated to women's spiritual growth and empowerment, Sister Priya leads various programs focused on discipleship and community building.",
          experience: '3+ Years Leadership',
          specialization: "Women's Ministry & Mentorship"
        }
      ]
    },
    deacons: {
      title: 'Deacons',
      icon: <FaHandsHelping className="w-5 h-5" />,
      members: [
        {
          name: 'Deacon Sunita Darnal',
          position: 'Head Deacon',
          description: 'Serving faithfully in church administration and community service, Deacon Rajesh ensures smooth operations and member care.',
          experience: '6+ Years Service',
          specialization: 'Administration & Member Care'
        },
        {
          name: 'Deacon Silas Darnal',
          position: 'Community Outreach Deacon',
          description: 'Leading our community service initiatives and charitable programs, Deacon Maya coordinates our outreach efforts with local communities.',
          experience: '4+ Years Service',
          specialization: 'Community Service & Outreach'
        }
      ]
    },
    worship: {
      title: 'Worship Leaders',
      icon: <FaMusic className="w-5 h-5" />,
      members: [
        {
          name: 'Brother Palko Pariyar',
          position: 'Lead Worship Pastor',
          description: "Gifted musician and worship leader who creates an atmosphere of praise and worship, leading our congregation into God's presence through music.",
          experience: '5+ Years Ministry',
          specialization: 'Worship Leading & Music Ministry'
        },
        {
          name: 'Sister Anjali Tamang',
          position: 'Worship Team Coordinator',
          description: 'Coordinates our worship team and leads special music programs, bringing creativity and excellence to our worship services.',
          experience: '3+ Years Ministry',
          specialization: 'Team Coordination & Vocal Ministry'
        }
      ]
    },
    media: {
      title: 'Media Team',
      icon: <FaMusic className="w-5 h-5" />,
      members: [
        {
          name: 'Ruthen Santos',
          position: 'Media Director',
          description: 'Leading our media ministry with technical expertise, ensuring quality audio-visual production for services and online streaming.',
          experience: '3+ Years Service',
          specialization: 'Video Production & Live Streaming'
        },
        {
          name: 'Brother Dipesh Pradhan',
          position: 'Social Media Coordinator',
          description: 'Managing our digital presence and online engagement, creating content that reaches and inspires our community.',
          experience: '2+ Years Service',
          specialization: 'Social Media & Content Creation'
        }
      ]
    },
    volunteers: {
      title: 'Volunteers',
      icon: <FaHandsHelping className="w-5 h-5" />,
      members: [
        {
          name: 'Brother Andrew Sherpa',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '2+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
        {
          name: 'Sister Srijana Rai',
          position: 'Children Ministry Volunteer',
          description: 'Dedicated to nurturing young hearts, creating engaging and safe environments for children to learn about God.',
          experience: '3+ Years Service',
          specialization: 'Children Ministry & Education'
        }
      ]
    },
    sundaySchool: {
      title: 'Sunday School Teachers',
      icon: <FaUsers className="w-5 h-5" />,
      members: [
        {
          name: 'Teacher Sarah',
          position: 'Lead Sunday School Teacher',
          description: 'Passionate about teaching children biblical truths through creative lessons and engaging activities.',
          experience: '4+ Years Teaching',
          specialization: 'Children Education & Bible Teaching'
        },
        {
          name: 'Teacher David',
          position: 'Sunday School Coordinator',
          description: 'Organizing curriculum and coordinating teachers to provide quality biblical education for all age groups.',
          experience: '3+ Years Teaching',
          specialization: 'Curriculum Development & Coordination'
        }
      ]
    },
    area: {
      title: 'Area Leaders',
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      areas: {
        koramangala: {
          name: 'Koramangala',
          members: [
            {
              name: 'Pastor John Doe',
              position: 'Koramangala Area Leader',
              description: 'Overseeing our Koramangala branch, Pastor Binod ensures effective ministry and pastoral care for families in the area.',
              experience: '4+ Years Leadership',
              specialization: 'Local Church Leadership'
            }
          ]
        },
        electronicCity: {
          name: 'Electronic City',
          members: [
            {
              name: 'Elder John Doe',
              position: 'Electronic City Area Leader',
              description: 'Leading our Electronic City congregation with dedication, Elder Ramesh focuses on community building and spiritual growth.',
              experience: '3+ Years Leadership',
              specialization: 'Community Building & Discipleship'
            }
          ]
        },
        nepal: {
          name: 'Nepal',
          members: [
            {
              name: 'Pastor John Doe',
              position: 'Nepal Branch Leader',
              description: 'Overseeing our ministry in Nepal, Pastor Krishna leads evangelism efforts and church planting initiatives in the homeland.',
              experience: '5+ Years Ministry',
              specialization: 'Missions & Church Planting'
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
    ? { ...leadershipData.area, members: leadershipData.area.areas[selectedArea].members }
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
                      options={['Koramangala', 'Electronic City', 'Nepal']}
                      value={selectedArea === 'koramangala' ? 'Koramangala' : selectedArea === 'electronicCity' ? 'Electronic City' : 'Nepal'}
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
                    <div className="w-32 h-32 rounded-full mb-4 mx-auto group-hover:scale-105 transition-transform duration-300 overflow-hidden ring-4 ring-purple-500/30 group-hover:ring-purple-500/50 shadow-2xl">
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
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-400 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
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

                    {/* Prayer Button */}
                    <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-lg hover:from-purple-600 hover:to-red-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                      <GiPrayer className="w-4 h-4" />
                      <span>Pray</span>
                    </button>
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