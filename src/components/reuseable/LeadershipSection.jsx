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
  const [loading, setLoading] = useState(false);
  const startTimeRef = useRef(null);
  const spinnerTimerRef = useRef(null);
  const MIN_SPINNER_MS = 300;
  const sectionRef = useRef(null);

    const navigate = useNavigate();
  // Preload all leadership images on mount to reduce latency when switching tabs
  useEffect(() => {
    const images = [
      PsRoshan, AsstPastor, PalkoPariyar, SilasDarnal, SunitaDarnal, Joshen, Ruthend, Santosh, Pawan, BhupenTamang, SrijanaRai, NehaRai, AshaRai, AjayRai, DevKumarLohar, BijenLama, Nipesh, PrameshRai, Devraj, Kamal, GracyTamang, Winnie, user2, Manzil, Erick, Jasmine, Pritam, Barsa, Dipesh, MinuRai, RitaRai, SovaVolunteer, JasmineVolunteer
    ];
    images.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

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
    startTimeRef.current = Date.now();
    setLoading(true);
    setSelectedArea(areaMap[value]);
  }, []);


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
          image: JasmineVolunteer
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
  }), []);

  // Show spinner while images are loading on tab/area change
  useEffect(() => {
    if (!loading) return;
    // Wait for all images in the current tab to load
    const members = (activeTab === 'area'
      ? leadershipData?.area?.areas[selectedArea]?.members
      : leadershipData[activeTab]?.members) || [];
    let loaded = 0;
    if (members.length === 0) {
      const elapsed = startTimeRef.current ? Date.now() - startTimeRef.current : 0;
      if (elapsed >= MIN_SPINNER_MS) {
        setLoading(false);
      } else {
        spinnerTimerRef.current = setTimeout(() => setLoading(false), MIN_SPINNER_MS - elapsed);
      }
      return;
    }
    members.forEach(member => {
      let src = member.image ||
        (member.name === 'Pastor Roshan Rai' || member.name === 'Ps. Roshan Rai' ? PsRoshan :
        member.name === 'Pastor Minu Rai' ? MinuRai :
        member.name === 'Pastor Samuel Rai' ? AsstPastor :
        member.name === 'Pastor Rita Rai' ? RitaRai :
        member.name === 'Brother Palko Pariyar' ? PalkoPariyar :
        member.name === 'Deacon Silas Darnal' ? SilasDarnal :
        member.name === 'Deacon Sunita Darnal' || member.name === 'Sunita Darnal' ? SunitaDarnal :
        member.name === 'Elder Joshen Lepcha' ? Joshen :
        member.name === 'Brother Ruthend Santos' ? Ruthend :
        member.name === 'Brother Santosh Sunar' ? Santosh :
        member.name === 'Brother Pawan Mukhia' ? Pawan :
        member.name === 'Brother Bhupen Tamang' || member.name === 'Bhupen Tamang' ? BhupenTamang :
        member.name === 'Sister Srijana Rai' ? SrijanaRai :
        member.name === 'Sister Neha Rai' ? NehaRai :
        member.name === 'Sister Asha Rai' ? AshaRai :
        member.name === 'Brother Ajay Rai' ? AjayRai :
        member.name === 'Brother Andru Sherpa' ? Andru :
        member.name === 'Brother Suren Thapa' ? SurenThapa :
        member.name === 'Brother Dev Kumar Lohar' ? DevKumarLohar :
        member.name === 'Brother Pramesh Rai' ? PrameshRai :
        member.name === 'Brother Bijen Lama' ? BijenLama :
        member.name === 'Brother Nipesh Thapa' ? Nipesh :
        member.name === 'Brother Devraj Sarki' ? Devraj :
        member.name === 'Brother Kamal Ghimiray' ? Kamal :
        member.name === 'Sister Gracy Tamang' ? GracyTamang :
        member.name === 'Sister Winnie Thapa' ? Winnie :
        member.name === 'Manzil Thapa' ? Manzil :
        member.name === 'Erick Subba' ? Erick :
        member.name === 'Brother Pritam Chettry' ? Pritam :
        member.name === 'Sister Barsa Tamang' ? Barsa :
        member.name === 'Brother Dipesh Pradhan' ? Dipesh :
        member.name === 'Sister Sova Rai' ? SovaVolunteer :
        member.name === 'Sister Jasmine Thapa' && src.image ? JasmineVolunteer :
        member.name === 'Sister Jasmine Thapa' ? Jasmine : user2);
      const img = new window.Image();
      img.onload = () => {
        loaded++;
        if (loaded === members.length) {
          const elapsed = startTimeRef.current ? Date.now() - startTimeRef.current : 0;
          if (elapsed >= MIN_SPINNER_MS) {
            setLoading(false);
          } else {
            spinnerTimerRef.current = setTimeout(() => setLoading(false), MIN_SPINNER_MS - elapsed);
          }
        }
      };
      img.onerror = () => {
        loaded++;
        if (loaded === members.length) {
          const elapsed = startTimeRef.current ? Date.now() - startTimeRef.current : 0;
          if (elapsed >= MIN_SPINNER_MS) {
            setLoading(false);
          } else {
            spinnerTimerRef.current = setTimeout(() => setLoading(false), MIN_SPINNER_MS - elapsed);
          }
        }
      };
      img.src = src;
    });
    return () => {
      if (spinnerTimerRef.current) {
        clearTimeout(spinnerTimerRef.current);
        spinnerTimerRef.current = null;
      }
    };
  }, [loading, activeTab, selectedArea, leadershipData]);

  // Trigger loading spinner on tab change
  useEffect(() => {
    startTimeRef.current = Date.now();
    setLoading(true);
  }, [activeTab]);

  // Ensure the Meet Our Team section scrolls to top when switching tabs/areas
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab, selectedArea]);

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
    <>
      {loading && <LoadingSpinner />}
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-slate-900/80 to-blue-900/60 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
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
                      value={selectedArea === 'ejipura' ? 'Ejipura' : selectedArea === 'koramangala' ? 'Koramangala' : selectedArea === 'madiwala' ? 'Madiwala' : selectedArea === 'neelsandara' ? 'Neelsandara' : selectedArea === 'hsrLayout' ? 'HSR Layout' : 'Indra Nagar'}
                      onChange={handleAreaChange}
                      placeholder="Select Area"
                      className="membership-dropdown"
                    />
                  </div>
                </div>
              )}

              {/* Members Grid */}
              <div className={`grid ${activeTab === 'area' ? 'grid-cols-1 justify-items-center max-h-[500px] overflow-y-auto pr-2' : 'md:grid-cols-2'} gap-8`}>
                {currentData.members.map((member, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/30 ring-1 ring-white/40 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 pointer-events-none"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all duration-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-600/20 rounded-full blur-3xl group-hover:bg-red-600/30 transition-all duration-500"></div>

                    <div className="relative z-10">
                      {/* Member Avatar */}
                      <div className={`${member.name === 'Palko Pariyar Team' ? 'w-full h-72 rounded-xl' : 'w-56 h-56 rounded-full mx-auto'} mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden ring-4 ring-purple-500/30 group-hover:ring-purple-500/50 shadow-2xl`}>
                        {member.name === 'Pastor Roshan Rai' || member.name === 'Ps. Roshan Rai' ? (
                          <img
                            src={PsRoshan}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Pastor Minu Rai' ? (
                          <img
                            src={MinuRai}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Pastor Samuel Rai' ? (
                          <img
                            src={AsstPastor}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Pastor Rita Rai' ? (
                          <img
                            src={RitaRai}
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
                        ) : member.name === 'Deacon Sunita Darnal' || member.name === 'Sunita Darnal'  ? (
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
                        ) : member.name === 'Brother Bhupen Tamang' || member.name === 'Bhupen Tamang' ? (
                          <img
                            src={BhupenTamang}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) :member.name === 'Sister Srijana Rai' ? (
                          <img
                            src={SrijanaRai}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) :member.name === 'Sister Neha Rai' ? (
                          <img
                            src={NehaRai}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ):member.name === 'Sister Asha Rai' ? (
                          <img
                            src={AshaRai}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ):member.name === 'Brother Ajay Rai' ? (
                          <img
                            src={AjayRai}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Brother Andru Sherpa' ? (
                          <img
                            src={Andru}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) :member.name === 'Brother Suren Thapa' ? (
                          <img
                            src={SurenThapa}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) :member.name === 'Brother Dev Kumar Lohar' ? (
                          <img
                            src={DevKumarLohar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) 
                        :member.name === 'Brother Pramesh Rai' ? (
                          <img
                            src={PrameshRai}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) :member.name === 'Brother Bijen Lama' ? (
                          <img
                            src={BijenLama}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) :member.name === 'Brother Nipesh Thapa' ? (
                          <img
                            src={Nipesh}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) :member.name === 'Brother Devraj Sarki' ? (
                          <img
                            src={Devraj}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) :member.name === 'Brother Devraj Sarki' ? (
                          <img
                            src={Devraj}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        )  :member.name === 'Brother Kamal Ghimiray' ? (
                          <img
                            src={Kamal}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Sister Winnie Thapa' ? (
                          <img
                            src={Winnie}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Sister Gracy Tamang' ? (
                          <img
                            src={GracyTamang}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Manzil Thapa' ? (
                          <img
                            src={Manzil}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Erick Subba' ? (
                          <img
                            src={Erick}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ): member.name === 'Brother Pritam Chettry' ? (
                          <img
                            src={Pritam}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ): member.name === 'Sister Barsa Tamang' ? (
                          <img
                            src={Barsa}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ): member.name === 'Brother Dipesh Pradhan' ? (
                          <img
                            src={Dipesh}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ): member.name === 'Sister Jasmine Thapa' ? (
                          <img
                            src={Jasmine}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Sister Sova Rai' ? (
                          <img
                            src={SovaVolunteer}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Sister Jasmine Thapa' && member.image ? (
                          <img
                            src={JasmineVolunteer}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : member.name === 'Palko Pariyar Team' ? (
                          <img
                            src={MediaTeamImg}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ):(
                          <img
                            src={user2}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Member Info */}
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-gray-900 drop-shadow mb-1">{member.name}</h4>
                        <p className="text-purple-700 font-semibold text-sm mb-2">{member.position}</p>
                        <p className="text-gray-800 text-sm leading-relaxed mb-3">{member.description}</p>
                      </div>

                      {/* Member Details */}
                      <div className="space-y-2 mb-4">
                        {activeTab === 'pastors' && (
                          <div className="flex items-center justify-between text-xs bg-purple-200/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-300/40">
                            <span className="text-gray-700">Experience:</span>
                            <span className="font-semibold text-purple-700">{member.experience}</span>
                          </div>
                        )}
                        <div className="flex flex-col text-xs bg-red-200/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-red-300/40">
                          <span className="text-gray-700 mb-1">Focus:</span>
                          <span className="font-semibold text-red-700">{member.specialization}</span>
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
            <button onClick={()=> navigate('/contactus')} className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Contact Leadership
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LeadershipSection;