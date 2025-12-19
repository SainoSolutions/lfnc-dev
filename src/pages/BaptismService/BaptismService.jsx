import React, { useState } from 'react';

const BaptismService = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    baptismType: '',
    preferredDate: '',
    message: ''
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
      baptismType: '',
      preferredDate: '',
      message: ''
    });
    setTimeout(() => setShowSuccess(false), 10000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl md:animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-purple-500/15 rounded-full mix-blend-multiply filter blur-3xl md:animate-pulse delay-1000" />
      </div>

      <section className="relative z-10 min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-8 animate-pulse">
                Water Baptism Services
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Begin Your<br />Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Faith</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Baptism is a sacred step of obedience and public declaration of your faith in Jesus Christ. 
                Our senior pastor conducts meaningful baptism ceremonies that celebrate your commitment to following Christ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  Learn About Baptism
                </a>
                <a href="#contactForm" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center">
                  Schedule Your Baptism
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">Request Baptism Service</h3>
                <p className="text-gray-300">Fill out this form and we'll contact you to schedule your baptism ceremony.</p>
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
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Baptism Type *</label>
                  <select
                    name="baptismType"
                    value={formData.baptismType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%233b82f6' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center',
                      backgroundSize: '16px'
                    }}
                  >
                    <option value="">Select baptism type...</option>
                    <option value="adult">Adult Baptism</option>
                    <option value="youth">Youth Baptism (13-17 years)</option>
                    <option value="child">Child Baptism (with parental consent)</option>
                    <option value="group">Group Baptism</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Additional Information</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Share your testimony or any questions..."
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Request
                </button>
              </form>

              {showSuccess && (
                <div className="mt-6 bg-green-500/20 border border-green-500/50 text-green-100 p-4 rounded-xl text-center">
                  <p><strong>Thank you!</strong><br />We will contact you soon to schedule your baptism.</p>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-300">
                  <strong>Questions?</strong><br />
                  Call <strong className="text-white">+91 93538 09489</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-white text-sm font-bold tracking-widest uppercase mb-4 relative">
              Understanding Baptism
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What to Expect</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your baptism is a special moment. Here's everything you need to know about the process.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  01
                </div>
                <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80" alt="Baptism preparation" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">Pre-Baptism Preparation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Before your baptism, you'll meet with our pastoral team for a preparation session. We'll discuss the meaning of baptism, answer your questions, and help you prepare your testimony to share with the congregation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['One-on-one counseling', 'Testimony preparation', 'Biblical teaching', 'Q&A session'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-white lg:order-1">
                <h3 className="text-3xl font-bold mb-4">The Baptism Ceremony</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our senior pastor conducts the baptism ceremony during Sunday service or special baptism events. You'll share your testimony, and be baptized by full immersion as a symbol of your new life in Christ.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Senior pastor officiation', 'Public testimony', 'Full immersion baptism', 'Photography available'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Schedule Baptism
                </a>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20 lg:order-2">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  02
                </div>
                <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80" alt="Baptism ceremony" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  03
                </div>
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" alt="Post baptism" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">After Your Baptism</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your baptism is just the beginning! We'll help you grow in your faith through discipleship programs, small groups, and ongoing spiritual mentorship within our church family.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Discipleship classes', 'Small group connection', 'Mentorship program', 'Ministry opportunities'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BaptismService;
