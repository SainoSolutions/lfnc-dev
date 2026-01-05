import Barsa from '../../assets/images/MediaTeam/Barsa.png';
import Dipesh from '../../assets/images/MediaTeam/Dipesh.png';
import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCrown, FaUsers, FaHandsHelping, FaMusic, FaMapMarkerAlt } from 'react-icons/fa';
import Pritam from '../../assets/images/MediaTeam/Pritam.png';
import PsRoshan from '../../assets/images/AreaLeaders/PsRoshan.png';
import AsstPastor from '../../assets/images/AboutUs/Pastors/AsstPastor.jpeg';
import PalkoPariyar from '../../assets/images/WorshipLeaders/1.jpeg';
import MediaTeamImg from '../../assets/images/WorshipLeaders/media.png';
import SilasDarnal from '../../assets/images/Decons/1.jpg';
import SunitaDarnal from '../../assets/images/Decons/2.jpeg';
import Joshen from '../../assets/images/Leaders/Joshen.png';
import Ruthend from '../../assets/images/MediaTeam/Ruthend.png';
import Santosh from '../../assets/images/MediaTeam/Santosh.png';
import Pawan from '../../assets/images/MediaTeam/Pawan.png';
import Andru from '../../assets/images/Volunteer/Andru.png';
import SurenThapa from '../../assets/images/Volunteer/SurenThapa.png';
import BhupenTamang from '../../assets/images/Volunteer/BhupenTamang.png';
import SrijanaRai from '../../assets/images/Volunteer/SrijanaRai.jpg';
import NehaRai from '../../assets/images/Volunteer/NehaRai.jpg';
import AshaRai from '../../assets/images/Volunteer/AshaRai.jpg';
import AjayRai from '../../assets/images/Volunteer/AjayRai.jpg';
import DevKumarLohar from '../../assets/images/Volunteer/DevKumarLohar.jpg';
import BijenLama from '../../assets/images/Volunteer/BijenLama.jpg';
import Nipesh from '../../assets/images/Volunteer/Nipesh.jpg';
import PrameshRai from '../../assets/images/Volunteer/PrameshRai.jpg';
import Devraj from '../../assets/images/Volunteer/Devraj.jpg';
import Kamal from '../../assets/images/Volunteer/kamalghimire.png';
import GracyTamang from '../../assets/images/SundaySchool/GracyTamang.jpg';
import Winnie from '../../assets/images/SundaySchool/wini.png';
import user2 from '../../assets/images/user2.png';
import CustomDropdown from './CustomDropdown';
import LoadingSpinner from './LoadingSpinner';
import Manzil from '../../assets/images/AreaLeaders/Manzil.png';
import Erick from '../../assets/images/AreaLeaders/Erric.png';
import Jasmine from '../../assets/images/AreaLeaders/Jasmine.png';
import MinuRai from '../../assets/images/Pastors/Minu.jpeg';
import RitaRai from '../../assets/images/Pastors/Rita.jpeg';
import SovaVolunteer from '../../assets/images/Volunteer/Sova.jpeg';
import JasmineVolunteer from '../../assets/images/Volunteer/Jasmine.jpeg';


const LeadershipSection = () => {
  const [activeTab, setActiveTab] = useState('pastors');
  const [selectedArea, setSelectedArea] = useState('ejipura');
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Scroll to top when tab or area changes
  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [activeTab, selectedArea]);

  const areaMap = useMemo(() => ({
    'Ejipura': 'ejipura',
    'Koramangala': 'koramangala',
    'Madiwala': 'madiwala',
    'Neelsandara': 'neelsandara',
    'HSR Layout': 'hsrLayout',
    'Indra Nagar': 'indraNagar',
    'Bannerghatta': 'bannerghatta'
  }), []);


  // Image mapping for cleaner rendering
  const imageMap = useMemo(() => ({
    'Pastor Roshan Rai': PsRoshan,
    'Ps. Roshan Rai': PsRoshan,
    'Pastor Minu Rai': MinuRai,
    'Pastor Samuel Rai': AsstPastor,
    'Pastor Rita Rai': RitaRai,
    'Brother Palko Pariyar': PalkoPariyar,
    'Deacon Silas Darnal': SilasDarnal,
    'Deacon Sunita Darnal': SunitaDarnal,
    'Sunita Darnal': SunitaDarnal,
    'Elder Joshen Lepcha': Joshen,
    'Brother Ruthend Santos': Ruthend,
    'Brother Santosh Sunar': Santosh,
    'Brother Pawan Mukhia': Pawan,
    'Brother Bhupen Tamang': BhupenTamang,
    'Bhupen Tamang': BhupenTamang,
    'Sister Srijana Rai': SrijanaRai,
    'Sister Neha Rai': NehaRai,
    'Sister Asha Rai': AshaRai,
    'Brother Ajay Rai': AjayRai,
    'Brother Andru Sherpa': Andru,
    'Brother Suren Thapa': SurenThapa,
    'Brother Dev Kumar Lohar': DevKumarLohar,
    'Brother Pramesh Rai': PrameshRai,
    'Brother Bijen Lama': BijenLama,
    'Brother Nipesh Thapa': Nipesh,
    'Brother Devraj Sarki': Devraj,
    'Brother Kamal Ghimiray': Kamal,
    'Sister Gracy Tamang': GracyTamang,
    'Sister Winnie Thapa': Winnie,
    'Manzil Thapa': Manzil,
    'Erick Subba': Erick,
    'Brother Pritam Chettri': Pritam,
    'Sister Barsa Tamang': Barsa,
    'Brother Dipesh Pradhan': Dipesh,
    'Sister Sova Rai': SovaVolunteer,
    'Palko Pariyar Team': MediaTeamImg
  }), []);

  const leadershipData = useMemo(() => ({
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
          name: 'Pastor Minu Rai',
          position: 'Wife of Pastor Roshan Rai',
          description: 'Serving alongside Pastor Roshan Rai, Pastor Minu brings dedication and spiritual leadership to our pastoral team.',
          specialization: 'Discipleship & Spiritual Growth'
        },
        {
          name: 'Pastor Samuel Rai',
          position: 'Senior Pastor & Founder',
          description: 'Dedicated to pastoral care and community outreach, Pastor Samuel brings deep theological knowledge and compassionate leadership to our congregation.',
          experience: '16+ Years Ministry',
          specialization: 'Pastoral Care & Counseling'
        },
        {
          name: 'Pastor Rita Rai',
          position: 'Wife of Pastor Samuel Rai',
          description: 'Working with Pastor Samuel Rai, Pastor Rita contributes valuable leadership and pastoral care to our congregation.',
          specialization: 'Pastoral Care & Women Ministry'
        }
      ]
    },
    leaders: {
      title: 'Leaders',
      icon: <FaUsers className="w-5 h-5" />,
      members: [
        {
          name: 'Elder Joshen Lepcha',
          position: 'Leadership',
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
          description: 'Leading our community service initiatives and charitable programs, Deacon Silas Darnal coordinates our outreach efforts with local communities.',
          experience: '10+ Years Service',
          specialization: 'Community Service & Outreach'
        },
        {
          name: 'Deacon Sunita Darnal',
          position: 'Head Deacon',
          description: 'Serving faithfully in church administration and community service, Deacon Sunita Darnal ensures smooth operations and member care.',
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
        },
        {
          name: 'Palko Pariyar Team',
          position: 'Worship Team',
          description: 'A dedicated team working alongside Brother Palko Pariyar, contributing to our music ministry with passion and skill.',
          experience: '5+ Years Service',
          specialization: 'Music & Worship Ministry',
          image: MediaTeamImg
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
          name: 'Brother Pritam Chettri',
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
        },
        {
          name: 'Sister Barsa Tamang',
          position: 'Media Team Member',
          description: 'Handling camera shoots and events.',
          experience: '1+ Years Service',
          specialization: 'Camera Operations & Event Coverage',
          image: Barsa
        },
        {
          name: 'Brother Dipesh Pradhan',
          position: 'Media Team Member',
          description: 'Handling camera shoots and events.',
          experience: '1+ Years Service',
          specialization: 'Camera Operations & Event Coverage',
          image: Dipesh
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
          experience: '7+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
         {
          name: 'Sister Srijana Rai',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '7+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
          {
          name: 'Sister Neha Rai',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '7+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
         {
          name: 'Sister Asha Rai',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '7+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
           {
          name: 'Brother Ajay Rai',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '7+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
        {
          name: 'Brother Andru Sherpa',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '4+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
        {
          name: 'Brother Suren Thapa',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '4+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
         {
          name: 'Brother Dev Kumar Lohar',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '4+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
           {
          name: 'Brother Pramesh Rai',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '4+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
         {
          name: 'Brother Bijen Lama',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '4+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
         {
          name: 'Brother Nipesh Thapa',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '4+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
         {
          name: 'Brother Devraj Sarki',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '4+ Years Service',
          specialization: 'Guest Services & Hospitality'
        },
           {
          name: 'Brother Kamal Ghimiray',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '3+ Years Service',
          specialization: 'Services & Hospitality'
        },
        {
          name: 'Sister Sova Rai',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '2+ Years Service',
          specialization: 'Guest Services & Hospitality',
          image: SovaVolunteer
        },
        {
          name: 'Sister Jasmine Thapa',
          position: 'Hospitality Volunteer',
          description: 'Welcoming guests and ensuring everyone feels at home, serving with warmth and genuine care for our community.',
          experience: '2+ Years Service',
          specialization: 'Guest Services & Hospitality',
          image: Jasmine
        }
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
              name: 'Elder Joshen Lepcha',
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
              name: 'Deacon Sunita Darnal',
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
        indraNagar: {
          name: 'Indra Nagar',
          members: [
            {
              name: 'Sister Jasmine Thapa',
              position: 'Indra Nagar Area Leader',
              description: 'Leading our Indira Nagar branch with vision and pastoral excellence.',
              experience: '4+ Years Leadership',
              specialization: 'Church Leadership & Growth',
              image: JasmineVolunteer
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
  }), []);

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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-red-400 mb-2 font-semibold">Our Leadership</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Team</span></h2>
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
                  className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${activeTab === tab.key
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 shadow-sm'
                    }`}
                >
                  <div className={`transition-colors duration-300 ${activeTab === tab.key ? 'text-white' : 'text-gray-500 group-hover:text-purple-600'
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
            <div className="relative bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl">
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
                      options={['Ejipura', 'Koramangala', 'Madiwala', 'Neelsandara', 'HSR Layout', 'Indra Nagar', 'Bannerghatta']}
                      value={Object.keys(areaMap).find(key => areaMap[key] === selectedArea) || 'Ejipura'}
                      onChange={(value) => setSelectedArea(areaMap[value])}
                      placeholder="Select Area"
                      className="membership-dropdown"
                    />
                  </div>
                </div>
              )}

              {/* Members Grid */}
              <div className={`grid ${activeTab === 'area' ? 'grid-cols-1 justify-items-center' : 'md:grid-cols-2'} gap-8`}>
                {currentData.members.map((member, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/20 rounded-2xl p-6 shadow-lg border border-white/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative">
                      {/* Member Avatar */}
                      <div className={`${member.name === 'Palko Pariyar Team' ? 'w-full h-72 rounded-xl' : 'w-56 h-56 rounded-full mx-auto'} mb-4 overflow-hidden ring-2 ring-purple-500/30 shadow-lg`}>
                        <img
                          src={member.image || imageMap[member.name] || user2}
                          alt={member.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          style={member.name === 'Deacon Silas Darnal' ? { objectPosition: '40% 30%' } : 
                                 (member.name === 'Deacon Sunita Darnal' || member.name === 'Sunita Darnal') ? { objectPosition: 'center 30%' } : {}}
                        />
                      </div>

                      {/* Member Info */}
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-gray-900 drop-shadow mb-1">{member.name}</h4>
                        <p className="text-purple-700 font-semibold text-sm mb-2">{member.position}</p>
                        <p className="text-gray-800 text-sm leading-relaxed mb-3">{member.description}</p>
                      </div>

                      {/* Member Details */}
                      <div className="space-y-2">
                        {member.experience && (
                          <div className="flex items-center justify-between text-xs bg-purple-200/40 rounded-lg px-3 py-2">
                            <span className="text-gray-700">Experience:</span>
                            <span className="font-semibold text-purple-700">{member.experience}</span>
                          </div>
                        )}
                        <div className="flex flex-col text-xs bg-red-200/40 rounded-lg px-3 py-2">
                          <span className="text-gray-700 mb-1">Focus:</span>
                          <span className="font-semibold text-red-700">{member.specialization}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
            <button onClick={()=> navigate('/contactus')} className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Contact Leadership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;