import React, { useState } from 'react';

const FuneralService = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    urgency: 'normal'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: '',
      message: '',
      urgency: 'normal'
    });
    setTimeout(() => setShowSuccess(false), 10000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl md:animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-blue-500/15 rounded-full mix-blend-multiply filter blur-3xl md:animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-8 animate-pulse">
                Funeral Support Services
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Finding Light<br />in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Times of Loss</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                When someone you love has died, our compassionate ministers provide comfort and hope. 
                We guide you through every step with dignity and care. Our dedicated support team is available 24/7 to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  View Our Services
                </a>
                <a href="#contactForm" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center">
                  Get Immediate Help
                </a>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">Contact Our Support Team</h3>
                <p className="text-gray-300">Fill out this form and our compassionate team will contact you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} id="contactForm" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter first name"
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Type of Service Needed *</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%239b23ea' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center',
                      backgroundSize: '16px'
                    }}
                  >
                    <option value="">Select a service...</option>
                    <option value="funeral-arrangement">Funeral Arrangement</option>
                    <option value="grief-counseling">Grief Counseling</option>
                    <option value="minister-contact">Contact a Minister</option>
                    <option value="funeral-attendance">Funeral Attendance Information</option>
                    <option value="after-funeral-support">After Funeral Support</option>
                    <option value="pre-planning">Pre-planning Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">How Can We Help You? *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Please share details..."
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Urgency Level</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%239b23ea' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center',
                      backgroundSize: '16px'
                    }}
                  >
                    <option value="normal">Normal - Get back within 24 hours</option>
                    <option value="urgent">Urgent - Need to speak today</option>
                    <option value="emergency">Emergency - Need immediate assistance</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Request
                </button>
              </form>

              {showSuccess && (
                <div className="mt-6 bg-green-500/20 border border-green-500/50 text-green-100 p-4 rounded-xl text-center">
                  <p><strong>Thank you!</strong><br />We will contact you within 24 hours.</p>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-300">
                  <strong>Need immediate help?</strong><br />
                  Call <strong className="text-white">+91 93538 09489</strong> for 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-white text-sm font-bold tracking-widest uppercase mb-4 relative">
              Our Funeral Support Services
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Care for Every Stage</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide complete support through every phase of the funeral process and beyond.
            </p>
          </div>

          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  01
                </div>
                <img src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&q=80" alt="Funeral arrangement" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">Complete Funeral Arrangement Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our compassionate team guides you through every detail of funeral planning. We handle all arrangements including venue booking, transportation, ceremony planning, and coordination with relevant authorities.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Complete ceremony planning', 'Venue & transportation', 'Documentation assistance', 'Cost guidance & budgeting'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Start Arrangements
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-white lg:order-1">
                <h3 className="text-3xl font-bold mb-4">Funeral Attendance & Participation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We provide guidance for attendees with custom guidance, virtual participation options, and meaningful ways to honor your loved one.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Virtual attendance options', 'Cultural tradition guidance', 'Participation coordination', 'Memorial service planning'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Get Attendance Info
                </a>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20 lg:order-2">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  02
                </div>
                <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80" alt="Funeral attendance" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  03
                </div>
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="After funeral support" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">After Funeral Care & Support</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Grief support doesn't end with the service. We offer ongoing bereavement counseling, support groups, and pastoral care.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Grief counseling sessions', 'Support group meetings', 'Pastoral care visits', 'Community connection'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Get Support Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuneralService;
