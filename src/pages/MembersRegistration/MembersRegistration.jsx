import React, { useState } from 'react';
import { FaTimes, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const MembersRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    location: '',
    memberSince: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ type: '', title: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showMessageModal = (type, title, message) => {
    setModalContent({ type, title, message });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ type: '', title: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Form validation
      if (!formData.fullName || !formData.phoneNumber || !formData.address || !formData.location || !formData.memberSince) {
        showMessageModal(
          'error',
          'Missing Required Fields',
          '❌ Please fill in all required fields (*)'
        );
        setIsSubmitting(false);
        return;
      }

      // Show success message (API integration will be done later)
      showMessageModal(
        'success',
        'Registration Successful!',
        '✅ Your membership registration has been submitted successfully! Welcome to LFNC.'
      );

      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        address: '',
        location: '',
        memberSince: ''
      });

      console.log('Form submitted:', formData);

    } catch (error) {
      console.error('Submission Error:', error);
      showMessageModal('error', 'Submission Failed', '❌ Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const MemberIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Success/Error Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className={`relative max-w-md w-full rounded-2xl overflow-hidden transform transition-all duration-300 scale-100 ${
            modalContent.type === 'success' 
              ? 'bg-gradient-to-br from-green-900/90 to-emerald-900/90 border border-green-500/30' 
              : 'bg-gradient-to-br from-red-900/90 to-pink-900/90 border border-red-500/30'
          }`}>
            {/* Modal Header */}
            <div className="p-6 text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                modalContent.type === 'success' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                  : 'bg-gradient-to-r from-red-500 to-pink-600'
              }`}>
                {modalContent.type === 'success' ? (
                  <FaCheckCircle className="w-8 h-8 text-white" />
                ) : (
                  <FaExclamationTriangle className="w-8 h-8 text-white" />
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {modalContent.title}
              </h3>
              
              <p className="text-gray-200 mb-6">
                {modalContent.message}
              </p>
              
              <button
                onClick={closeModal}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  modalContent.type === 'success'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800'
                    : 'bg-gradient-to-r from-red-600 to-pink-700 text-white hover:from-red-700 hover:to-pink-800'
                }`}
              >
                OK
              </button>
            </div>
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaTimes className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-400/25 to-red-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-gradient-to-br from-red-500/20 via-purple-400/25 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/15 via-purple-400/20 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <MemberIcon />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-glow">
            Members <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Registration</span>
          </h1>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join our church family and become an official member of Living Faith Nepali Church. Register now to access exclusive member benefits and ministries.
          </p>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="font-body text-gray-200 italic">
              "Let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing." - Hebrews 10:24-25
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">
          <h2 className="font-heading text-2xl font-semibold text-white mb-6 text-center">Membership Registration Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="font-body block text-white font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="font-body block text-white font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="font-body block text-white font-medium mb-2">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address (Optional)"
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            {/* Address */}
            <div>
              <label className="font-body block text-white font-medium mb-2">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter your street address"
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            {/* Location */}
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

            {/* Journey with LFNC (Years) */}
            <div>
              <label className="font-body block text-white font-medium mb-2">Journey with LFNC (Years) *</label>
              <input
                type="text"
                name="memberSince"
                value={formData.memberSince}
                onChange={handleInputChange}
                required
                placeholder="e.g., 1, 2, 3..."
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            {/* Privacy Notice */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="font-body text-gray-300 text-sm">
                <strong>Privacy Notice:</strong> Your information will be kept confidential and used only for church member services and communications.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-purple-600 to-red-600 text-white font-heading font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform shadow-lg ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:scale-105 hover:from-purple-700 hover:to-red-700'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Register as Member'}
            </button>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 text-center">
          <h2 className="font-heading text-2xl font-semibold text-white mb-8">Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-heading font-semibold text-white mb-2">Exclusive Access</h3>
              <p className="font-body text-gray-300">Access to member-only events, programs, and resources</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-heading font-semibold text-white mb-2">Community</h3>
              <p className="font-body text-gray-300">Join a vibrant community of believers and supporters</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-heading font-semibold text-white mb-2">Growth</h3>
              <p className="font-body text-gray-300">Spiritual growth through discipleship and mentoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersRegistration;
