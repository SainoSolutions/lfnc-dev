import React, { useState } from 'react';
import CustomDropdown from '../components/reuseable/CustomDropdown';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    membershipStatus: '',
    prayerRequest: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Prayer request submitted:', formData);
  };

  const PrayIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-400/25 to-red-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-gradient-to-br from-red-500/20 via-purple-400/25 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/15 via-purple-400/20 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <PrayIcon />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-glow">
            Prayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Request</span>
          </h1>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We believe in the power of prayer. Share your prayer request with us, and our prayer team will lift you up in prayer.
          </p>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="font-body text-gray-200 italic">
              "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." - Mark 11:24
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">
          <h2 className="font-heading text-2xl font-semibold text-white mb-6 text-center">Share Your Prayer Request</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-body block text-white font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            <div>
              <label className="font-body block text-white font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            <div>
              <label className="font-body block text-white font-medium mb-2">Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="Enter your city/location"
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            <div>
              <label className="font-body block text-white font-medium mb-2">Membership Status *</label>
              <CustomDropdown
                options={['Current Member', 'New Member', 'Former Member']}
                value={formData.membershipStatus}
                onChange={(value) => setFormData({...formData, membershipStatus: value})}
                placeholder="Select your status"
                required
                className="membership-dropdown"
              />
            </div>

            <div>
              <label className="font-body block text-white font-medium mb-2">Prayer Request *</label>
              <textarea
                name="prayerRequest"
                value={formData.prayerRequest}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Please share your prayer request with us..."
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300 resize-none"
              />
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="font-body text-gray-300 text-sm">
                <strong>Privacy Notice:</strong> Your prayer request will be shared only with our prayer team. 
                We respect your privacy and will handle your request with complete confidentiality.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-heading font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Submit Prayer Request
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">Need Immediate Prayer?</h3>
            <p className="font-body text-gray-300 mb-4">
              For urgent prayer requests, you can contact our prayer team directly:
            </p>
            <div className="space-y-2 font-body text-gray-200 text-center">
              <p className="flex items-center justify-center gap-2"><FaPhone className="text-blue-400" /> Prayer Hotline: +91 98765 43210</p>
              <p className="flex items-center justify-center gap-2"><FaEnvelope className="text-red-400" /> Email: prayer@lfnc.org</p>
              <p className="flex items-center justify-center gap-2"><FaWhatsapp className="text-green-400" /> WhatsApp: +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequest;