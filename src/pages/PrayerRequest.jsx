import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import CustomDropdown from '../components/reuseable/CustomDropdown';
import { FaPhone, FaEnvelope, FaWhatsapp, FaTimes, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    membershipStatus: '',
    prayerRequest: '',
    email: '' // Added email field for API
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
      // Prepare API payload according to the required format
      const apiPayload = {
        fullname: formData.name,
        phonenumber: formData.phone,
        email: formData.email || 'not-provided@example.com',
        address: formData.location,
        membership_status: formData.membershipStatus.toLowerCase().replace(' ', '_'),
        prayer_request: formData.prayerRequest
      };

      // Send to backend API first
      const apiResponse = await axios.post(
        'https://lfnc-dev-backend.onrender.com/api/prayer-requests',
        apiPayload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('API Response:', apiResponse.data);

      // Then send email using EmailJS
      const templateParams = {
        to_email: 'prayer@lfnc.org',
        from_name: formData.name,
        phone: formData.phone,
        location: formData.location,
        membership_status: formData.membershipStatus,
        prayer_request: formData.prayerRequest,
        timestamp: new Date().toLocaleString(),
        reply_to: 'prayer@lfnc.org',
        email: formData.email || 'not-provided@example.com'
      };

      await emailjs.send(
        'service_sd17lis',
        'template_8o97lah',
        templateParams,
        'A4TKGje66VVg0M-2k'
      );

      // Reset form
      setFormData({
        name: '',
        phone: '',
        location: '',
        membershipStatus: '',
        prayerRequest: '',
        email: ''
      });

      // Show success modal
      showMessageModal(
        'success',
        'Prayer Request Sent Successfully!',
        '✅ Your prayer request has been sent successfully! Our prayer team will contact you shortly.'
      );

      console.log('Prayer request submitted to API and email sent:', formData);

    } catch (error) {
      console.error('Submission Error:', error);
      
      let errorTitle = 'Submission Failed';
      let errorMessage = '❌ Failed to send prayer request. Please try again or contact us directly.';
      
      if (error.response) {
        console.error('API Error Response:', error.response.data);
        console.error('API Error Status:', error.response.status);
        
        if (error.response.status === 404) {
          errorMessage = '❌ The server endpoint was not found. Please contact support.';
        } else if (error.response.status === 400) {
          errorMessage = '❌ Please check your information and try again.';
        } else if (error.response.status === 500) {
          errorMessage = '❌ Server error. Please try again later or contact us directly.';
        }
      } else if (error.request) {
        console.error('No API Response:', error.request);
        errorMessage = '❌ Unable to connect to the server. Please check your internet connection.';
      } else {
        console.error('Request Setup Error:', error.message);
      }
      
      // Show error modal
      showMessageModal('error', errorTitle, errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const PrayIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
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

            {/* Added Email Field */}
            <div>
              <label className="font-body block text-white font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
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
                  Sending...
                </span>
              ) : 'Submit Prayer Request'}
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
              <p className="flex items-center justify-center gap-2"><FaEnvelope className="text-red-400" /> <a href="mailto:lfncit2025@gmail.com">lfncit2025@gmail.com</a></p>
              <p className="flex items-center justify-center gap-2"><FaWhatsapp className="text-green-400" /> <a href="tel:+916362222318">+91 6362222318</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequest;