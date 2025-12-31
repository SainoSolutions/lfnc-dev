import React, { useState } from 'react';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import CustomDropdown from '../../components/reuseable/CustomDropdown';
import { UnifiedService } from './UnifiedAPIservice';

const UnifiedServiceForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone_no: '',
    service_type: '',
    additional_message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ type: '', title: '', message: '' });

  const services = [
    { id: 1, name: 'Baptism Service', value: 'baptism' },
    { id: 2, name: 'Birthday Service', value: 'birthday' },
    { id: 3, name: 'Funeral Service', value: 'funeral' },
    { id: 4, name: 'Volunteer Services', value: 'volunteer' }
  ];

  const serviceDetails = {
    baptism: {
      label: 'Baptism Type',
      placeholder: 'Select your baptism preference',
      options: ['Individual Ceremony', 'Group Ceremony', 'Infant Baptism', 'Other']
    },
    birthday: {
      label: 'Age / Details',
      placeholder: 'Enter age and any special details'
    },
    funeral: {
      label: 'Additional Information',
      placeholder: 'Enter any specific details or preferences'
    },
    volunteer: {
      label: 'Area of Interest',
      placeholder: 'Select your area of interest',
      options: ['Community Outreach', 'Church Events', 'Hospitality', 'Media & Technology', 'Other']
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstname.trim()) {
      errors.firstname = 'First Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstname.trim())) {
      errors.firstname = 'First Name should only contain letters';
    }

    if (!formData.lastname.trim()) {
      errors.lastname = 'Last Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastname.trim())) {
      errors.lastname = 'Last Name should only contain letters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone_no.trim()) {
      errors.phone_no = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone_no.trim().replace(/\D/g, ''))) {
      errors.phone_no = 'Phone Number must be exactly 10 digits';
    }

    if (!formData.service_type) {
      errors.service_type = 'Please select a service';
    }


    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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

    if (!validateForm()) {
      showMessageModal(
        'error',
        'Validation Error',
        '❌ Please fix the errors in the form and try again'
      );
      return;
    }
console.log('Submitting form with data:', formData);
    setIsSubmitting(true);

     try {
      await UnifiedService.postServiceRequest(formData);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone_no: '',
        service_type: '',
        additional_message: ''
      });

      showMessageModal(
        'success',
        'Service Request Submitted!',
        '✅ Your service request has been submitted successfully! Our team will contact you shortly to confirm the details.'
      );

      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Submission Error:', error);
      showMessageModal('error', 'Submission Failed', '❌ Failed to submit request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden py-20 px-4">
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
                  <FaTimes className="w-8 h-8 text-white" />
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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-glow">
            Request A <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Service</span>
          </h1>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Fill out this form to request any of our spiritual services. Our team will get in touch with you shortly to confirm the details.
          </p>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="font-body text-gray-200 italic">
              "I came that they may have life, and have it to the full." - John 10:10
            </p>
          </div>
        </div>

        {/* Service Request Form */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">
          <h2 className="font-heading text-2xl font-semibold text-white mb-6 text-center">Service Request Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-body block text-white font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className={`font-body w-full px-4 py-3 border-2 rounded-xl focus:outline-none bg-white/20 text-white placeholder-gray-300 transition-colors ${
                    formErrors.firstname ? 'border-red-500 focus:border-red-500' : 'border-white/30 focus:border-purple-500'
                  }`}
                />
                {formErrors.firstname && <p className="text-red-400 text-sm mt-1">{formErrors.firstname}</p>}
              </div>
              <div>
                <label className="font-body block text-white font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className={`font-body w-full px-4 py-3 border-2 rounded-xl focus:outline-none bg-white/20 text-white placeholder-gray-300 transition-colors ${
                    formErrors.lastname ? 'border-red-500 focus:border-red-500' : 'border-white/30 focus:border-purple-500'
                  }`}
                />
                {formErrors.lastname && <p className="text-red-400 text-sm mt-1">{formErrors.lastname}</p>}
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-body block text-white font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`font-body w-full px-4 py-3 border-2 rounded-xl focus:outline-none bg-white/20 text-white placeholder-gray-300 transition-colors ${
                    formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-white/30 focus:border-purple-500'
                  }`}
                />
                {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label className="font-body block text-white font-medium mb-2">Phone Number (10 digits) *</label>
                <input
                  type="tel"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
                    setFormData({
                      ...formData,
                      phone_no: cleaned
                    });
                    if (formErrors.phone_no) {
                      setFormErrors({
                        ...formErrors,
                        phone_no: ''
                      });
                    }
                  }}
                  placeholder="Enter your 10-digit phone number"
                  maxLength="10"
                  className={`font-body w-full px-4 py-3 border-2 rounded-xl focus:outline-none bg-white/20 text-white placeholder-gray-300 transition-colors ${
                    formErrors.phone_no ? 'border-red-500 focus:border-red-500' : 'border-white/30 focus:border-purple-500'
                  }`}
                />
                {formErrors.phone_no && <p className="text-red-400 text-sm mt-1">{formErrors.phone_no}</p>}
                {formData.phone_no && <p className="text-gray-300 text-sm mt-1">{formData.phone_no.length}/10 digits</p>}
              </div>
            </div>

            {/* Service Type Selection */}
            <div>
              <label className="font-body block text-white font-medium mb-2">Select Service *</label>
              <CustomDropdown
                options={services.map(service => service.name)}
                value={services.find(s => s.value === formData.service_type)?.name || ''}
                onChange={(value) => {
                  const service = services.find(s => s.name === value);
                  setFormData({
                    ...formData,
                    service_type: service?.value || ''
                  });
                  if (formErrors.service_type) {
                    setFormErrors({
                      ...formErrors,
                      service_type: ''
                    });
                  }
                }}
                placeholder="Select a service"
              />
              {formErrors.service_type && <p className="text-red-400 text-sm mt-1">{formErrors.service_type}</p>}
            </div>

            
            {/* Additional Message */}
            <div>
              <label className="font-body block text-white font-medium mb-2">Additional Message (Optional)</label>
              <textarea
                name="additional_message"
                value={formData.additional_message}
                onChange={handleInputChange}
                placeholder="Add any additional details or special requests..."
                rows="4"
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            {/* Privacy Notice */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="font-body text-gray-300 text-sm">
                <strong>Privacy Notice:</strong> Your information will be kept confidential and used only for processing your service request and church communications.
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
              ) : 'Submit Service Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UnifiedServiceForm;
