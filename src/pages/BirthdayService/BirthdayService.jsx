import React, { useState } from 'react';

const BirthdayService = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    celebrantName: '',
    age: '',
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
      celebrantName: '',
      age: '',
      preferredDate: '',
      message: ''
    });
    setTimeout(() => setShowSuccess(false), 10000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-orange-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl md:animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-orange-500/15 rounded-full mix-blend-multiply filter blur-3xl md:animate-pulse delay-1000" />
      </div>

      <section className="relative z-10 min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-bold tracking-wider mb-8 animate-pulse">
                Birthday Celebration Services
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Celebrate Life<br />with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300">God's Blessings</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Mark your special day with a meaningful celebration that combines joy, gratitude, and spiritual blessings. 
                Our church family comes together to celebrate your life and God's faithfulness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  View Celebration Options
                </a>
                <a href="#contactForm" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center">
                  Book Your Celebration
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">Book Birthday Service</h3>
                <p className="text-gray-300">Schedule a special birthday celebration with prayers and blessings.</p>
              </div>

              <form onSubmit={handleSubmit} id="contactForm" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Your First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter first name"
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Your Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter last name"
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Celebrant Name *</label>
                  <input
                    type="text"
                    name="celebrantName"
                    value={formData.celebrantName}
                    onChange={handleChange}
                    required
                    placeholder="Birthday person's name"
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Age"
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Special Requests</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any special requests or preferences..."
                    className="w-full px-4 py-3 bg-white/90 border border-white/20 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Request
                </button>
              </form>

              {showSuccess && (
                <div className="mt-6 bg-green-500/20 border border-green-500/50 text-green-100 p-4 rounded-xl text-center">
                  <p><strong>Thank you!</strong><br />We will contact you to confirm your celebration.</p>
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
              Celebration Services
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Celebrate</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every birthday is a gift from God. We celebrate with joy, gratitude, and meaningful blessings.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  01
                </div>
                <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80" alt="Birthday celebration" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">Special Birthday Blessings</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  During Sunday service, we recognize birthdays with special prayers and blessings. Our pastor and congregation celebrate with you, thanking God for your life and praying for the year ahead.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Public recognition', 'Pastor\'s blessing', 'Congregational prayer', 'Birthday song'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Book Now
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-white lg:order-1">
                <h3 className="text-3xl font-bold mb-4">Group Celebrations</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Celebrate with your church family! We organize group birthday celebrations where members born in the same month come together for fellowship, cake, and shared blessings.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Monthly gatherings', 'Fellowship time', 'Cake & refreshments', 'Photo opportunities'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Join Celebration
                </a>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20 lg:order-2">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  02
                </div>
                <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80" alt="Group celebration" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-white/20">
                <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg">
                  03
                </div>
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Milestone birthday" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">Milestone Birthdays</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Celebrating a significant milestone? We offer special recognition for milestone birthdays with extended prayer time, testimony sharing, and a memorable celebration with your church family.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {['Extended blessing', 'Testimony time', 'Special recognition', 'Memory keepsake'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#contactForm" className="inline-block bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Plan Milestone
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdayService;
