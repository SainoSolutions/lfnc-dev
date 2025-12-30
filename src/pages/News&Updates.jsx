import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaTags, FaArrowRight, FaShareAlt, FaBookmark, FaEye, FaComment, FaSearch, FaFilter, FaNewspaper, FaBullhorn, FaChurch, FaPray, FaHeart, FaHospital, FaStore } from 'react-icons/fa';

const NewsAndUpdates = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  // Real-life church community news data
  const newsUpdates = [
    {
      id: 1,
      title: 'New LFNC Community Store Grand Opening',
      excerpt: 'Visit our new community store offering affordable groceries and household items to support local families in need.',
      content: 'We are thrilled to announce the grand opening of the LFNC Community Store located at 123 Main Street. The store offers discounted groceries, household essentials, and clothing items. All proceeds go directly to our community outreach programs.',
      date: 'Dec 20, 2024',
      author: 'Community Outreach Team',
      category: 'community',
      tags: ['Store Opening', 'Community', 'Support'],
      views: 1542,
      comments: 78,
      featured: true,
      urgent: false
    },
    {
      id: 2,
      title: 'URGENT: Blood Donation Needed for Member',
      excerpt: 'Brother Michael Johnson urgently needs O+ blood donors after emergency surgery. Your donation could save a life.',
      content: 'Our beloved church member Michael Johnson underwent emergency surgery and requires O+ blood donations. The hospital has limited supply. If you have O+ blood type, please visit City Hospital Blood Bank today. Family members are available to coordinate donations.',
      date: 'Dec 18, 2024',
      author: 'Prayer & Care Ministry',
      category: 'urgent',
      tags: ['Blood Donation', 'Emergency', 'Hospital'],
      views: 2890,
      comments: 145,
      featured: true,
      urgent: true
    },
    {
      id: 3,
      title: 'Sister Maria Hospitalized - Prayer Request',
      excerpt: 'Our dear Sister Maria has been admitted to the hospital with pneumonia. Please keep her in your prayers.',
      content: 'Sister Maria Fernandez, a faithful member for 15 years, has been hospitalized with severe pneumonia at St. Mary\'s Hospital. She is in stable condition but needs our prayers for complete healing. Visiting hours are limited, but cards and prayers are welcome.',
      date: 'Dec 17, 2024',
      author: 'Pastoral Care Team',
      category: 'prayer',
      tags: ['Hospital', 'Prayer', 'Healing'],
      views: 1876,
      comments: 92,
      featured: true,
      urgent: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Updates', count: newsUpdates.length, icon: <FaNewspaper /> },
    { id: 'urgent', label: 'Urgent Needs', count: newsUpdates.filter(n => n.category === 'urgent').length, icon: <FaHospital /> },
    { id: 'prayer', label: 'Prayer Requests', count: newsUpdates.filter(n => n.category === 'prayer').length, icon: <FaPray /> },
    { id: 'community', label: 'Community', count: newsUpdates.filter(n => n.category === 'community').length, icon: <FaChurch /> }
  ];

  const filteredNews = newsUpdates.filter(news => {
    const matchesCategory = activeCategory === 'all' || news.category === activeCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (id) => {
    const newBookmarks = new Set(bookmarkedPosts);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarkedPosts(newBookmarks);
  };

  const sharePost = (post) => {
    const shareUrl = `${window.location.origin}/news/${post.id}`;
    const shareText = `Check out this update from LFNC: ${post.title}`;
    
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: shareText,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(`${shareText} - ${shareUrl}`);
      alert('Link copied to clipboard!');
    }
  };

  // Custom icons
  const NewsIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
    </svg>
  );

  const UrgentIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z"/>
    </svg>
  );

  // Coming Soon Image Component
  const ComingSoonImage = ({ urgent = false }) => (
    <div className={`w-full h-full flex flex-col items-center justify-center p-6 ${
      urgent 
        ? 'bg-gradient-to-br from-red-900/40 to-pink-900/30' 
        : 'bg-gradient-to-br from-purple-900/30 to-blue-900/20'
    }`}>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
        urgent 
          ? 'bg-gradient-to-r from-red-600/30 to-pink-600/30 border-2 border-red-500/30' 
          : 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 border-2 border-purple-500/30'
      }`}>
        {urgent ? (
          <svg className="w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.342 16.5c-.77.833.192 2.5 1.732 2.5z"/>
          </svg>
        ) : (
          <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        )}
      </div>
      <span className={`text-sm font-medium ${
        urgent ? 'text-red-200' : 'text-purple-200'
      }`}>
        Updates Coming Soon
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-400/25 to-red-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-gradient-to-br from-red-500/20 via-purple-400/25 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/15 via-purple-400/20 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-purple-600 rounded-full mb-8 shadow-xl">
            <NewsIcon />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            News <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">&</span> Updates
          </h1>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay informed about our church community: urgent needs, prayer requests, store openings, and celebrations
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-12">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for urgent needs, prayer requests, or community updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300"
              />
              <FaFilter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/15'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="font-medium">{cat.label}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Urgent Alerts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <UrgentIcon className="text-red-400" />
            Urgent Community Needs
            <span className="text-sm bg-gradient-to-r from-red-500 to-pink-600 px-3 py-1 rounded-full animate-pulse">
              Immediate Action Needed
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredNews.filter(n => n.urgent).slice(0, 2).map((urgent) => (
              <div key={urgent.id} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900/30 to-pink-900/20 backdrop-blur-lg border-2 border-red-500/30 shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <ComingSoonImage urgent={true} />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleBookmark(urgent.id)}
                      className={`p-2 rounded-full backdrop-blur-md ${
                        bookmarkedPosts.has(urgent.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white border border-white/30'
                      }`}
                    >
                      <FaBookmark />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-semibold rounded-full mb-2 animate-pulse">
                      🔴 URGENT
                    </span>
                    <h3 className="text-2xl font-bold text-white line-clamp-2">{urgent.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-red-300" />
                      <span className="text-red-200 text-sm">{urgent.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-red-200">
                        <FaEye />
                        <span>{urgent.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-red-200">
                        <FaComment />
                        <span>{urgent.comments}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-red-100 mb-6 line-clamp-3">{urgent.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-red-300" />
                      <span className="text-red-200 text-sm">{urgent.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => sharePost(urgent)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <FaShareAlt className="text-red-300" />
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                        View Details
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Community Updates Grid */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Latest Community Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <div key={news.id} className={`group bg-white/10 backdrop-blur-lg border rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:shadow-xl ${
                news.urgent 
                  ? 'border-red-500/30 hover:shadow-red-500/20' 
                  : 'border-white/20 hover:shadow-purple-500/20'
              }`}>
                <div className="relative h-48 overflow-hidden">
                  <ComingSoonImage urgent={news.urgent} />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => toggleBookmark(news.id)}
                      className={`p-2 rounded-full ${
                        bookmarkedPosts.has(news.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white backdrop-blur-md'
                      }`}
                    >
                      <FaBookmark />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                      news.urgent 
                        ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white' 
                        : 'bg-gradient-to-r from-purple-600/80 to-red-600/80 text-white'
                    }`}>
                      {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                      {news.urgent && ' 🔴'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaCalendarAlt />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{news.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaComment />
                        <span>{news.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {news.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                        <FaTags className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaUser className="w-4 h-4" />
                      <span>{news.author}</span>
                    </div>
                    <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      Read Full Story
                      <FaArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default NewsAndUpdates;