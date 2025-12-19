import React, { useState } from 'react';

const VolunteerService = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    volunteerArea: '',
    availability: '',
    experience: '',
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
      volunteerArea: '',
      availability: '',
      experience: '',
      message: ''
    });
    setTimeout(() => setShowSuccess(false), 10000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl md:animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-teal-500/15 rounded-full mix-blend-multiply filter blur-3xl md:animate-pulse delay-1000" />
      </div>

      <section className="relative z-10 min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-8 animate-pulse">
                Volunteer Opportunities
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Serve with<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">Purpose & Passion</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Join our vibrant community of volunteers making a real difference. Whether you have a few hours a week or want to commit to a ministry, 
                there's a place for you to serve and grow in your faith.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  Explore Opportunities
                </a>
                <a href="#contactForm" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center">
                  Sign Up Today
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">Volunteer Application</h3>
                <p className="text-gray-300">Fill out this form to start your volunteer journey with us.</p>
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
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Area of Interest *</label>
                  <select
                    name="volunteerArea"
                    value={formData.volunteerArea}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2310b981' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center',
                      backgroundSize: '16px'
                    }}
                  >
                    <option value="">Select area of interest...</option>
                    <option value="worship">Worship Team (Music/Vocals)</option>
                    <option value="children">Children's Ministry</option>
                    <option value="youth">Youth Ministry</option>
                    <option value="hospitality">Hospitality & Welcome</option>
                    <option value="media">Media & Technology</option>
                    <option value="prayer">Prayer Ministry</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="admin">Administrative Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Availability *</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2310b981' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center',
                      backgroundSize: '16px'
                    }}
                  >
                    <option value="">Select availability...</option>
                    <option value="weekly">Weekly commitment</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="events">Special events only</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Previous Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Brief description of relevant experience"
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Why do you want to volunteer?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Share your motivation and any questions..."
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Application
                </button>
              </form>

              {showSuccess && (
                <div className="mt-6 bg-green-500/20 border border-green-500/50 text-green-100 p-4 rounded-xl text-center">
                  <p><strong>Thank you!</strong><br />We'll contact you soon about volunteer opportunities.</p>
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
              Volunteer Ministries
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ways to Serve</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover meaningful ways to use your gifts and talents to serve God and our community.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  01
                </div>
                <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" alt="Worship ministry" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">Worship & Creative Arts</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Use your musical talents, technical skills, or creative abilities to enhance our worship experience. Join our worship team, media crew, or creative arts ministry.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Music & vocals', 'Sound & lighting', 'Video production', 'Graphic design'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Join Team
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-white lg:order-1">
                <h3 className="text-3xl font-bold mb-4">Children & Youth Ministry</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Make an eternal impact by investing in the next generation. Help teach, mentor, and guide children and youth in their faith journey.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Sunday school teaching', 'Youth group leadership', 'VBS coordination', 'Mentorship programs'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Get Involved
                </a>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20 lg:order-2">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  02
                </div>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" alt="Children ministry" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  03
                </div>
                <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80" alt="Community outreach" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">Community Outreach</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Be the hands and feet of Jesus in our community. Participate in outreach programs, food drives, hospital visits, and other compassionate ministries.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Food distribution', 'Hospital visitation', 'Street ministry', 'Charity events'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Start Serving
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerService;
