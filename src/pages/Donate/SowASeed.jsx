import React, { useState } from 'react';
import CustomDropdown from '../../components/reuseable/CustomDropdown';
import scannerQR from '../../assets/images/scan.jpeg';

const SowASeed = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [showQR, setShowQR] = useState(false);

  const predefinedAmounts = ['₹500', '₹1000', '₹2500', '₹5000'];

  const HeartIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
    </svg>
  );

  const QRIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  );

  const CreditCardIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-400/25 to-red-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-gradient-to-br from-red-500/20 via-purple-400/25 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-500/15 via-purple-400/20 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <HeartIcon />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-glow">
            Sow a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Seed</span>
          </h1>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Your generous contribution helps us continue God's work in our community. Every seed sown in faith grows into a harvest of blessings for those in need.
          </p>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="font-body text-gray-200 italic">
              "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap." - Luke 6:38
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Amount Selection */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">
            <h2 className="font-heading text-2xl font-semibold text-white mb-6">Choose Your Contribution</h2>
            
            {/* Predefined Amounts */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {setSelectedAmount(amount); setCustomAmount('');}}
                  className={`font-heading py-4 px-6 rounded-xl border-2 transition-all duration-300 ${
                    selectedAmount === amount
                      ? 'bg-gradient-to-r from-purple-600 to-red-600 border-purple-500 text-white shadow-lg'
                      : 'bg-white/20 border-white/30 text-white hover:border-white/50 hover:bg-white/30'
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="font-body block text-white font-medium mb-2">Custom Amount</label>
              <input
                type="number"
                placeholder="Enter amount in ₹"
                value={customAmount}
                onChange={(e) => {setCustomAmount(e.target.value); setSelectedAmount('');}}
                className="font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none bg-white/20 text-white placeholder-gray-300"
              />
            </div>

            {/* Purpose Selection */}
            <div className="mb-6">
              <label className="font-body block text-white font-medium mb-2">Purpose (Optional)</label>
              <CustomDropdown
                options={['General Ministry', 'Youth Programs', 'Community Outreach', 'Building Fund', 'Missions']}
                value={''}
                onChange={() => {}}
                placeholder="Select purpose"
                className="membership-dropdown z-50"
              />
            </div>
          </div>

          {/* Right Column - Payment Methods */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-xl">
            <h2 className="font-heading text-2xl font-semibold text-white mb-6">Payment Methods</h2>
            
            <div className="space-y-4">
              {/* QR Code Payment */}
              <button
                onClick={() => {setSelectedMethod('qr'); setShowQR(true);}}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedMethod === 'qr'
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 border-amber-500 text-white'
                    : 'bg-white border-amber-200 hover:border-amber-400 hover:bg-amber-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <QRIcon />
                  <div>
                    <h3 className="font-heading font-semibold">UPI / QR Code</h3>
                    <p className="font-body text-sm opacity-90">Scan QR code for instant payment</p>
                  </div>
                </div>
              </button>

              {/* Contact Pastor */}
              {/* <button
                onClick={() => setSelectedMethod('contact')}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedMethod === 'contact'
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 border-amber-500 text-white'
                    : 'bg-white border-amber-200 hover:border-amber-400 hover:bg-amber-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <PhoneIcon />
                  <div>
                    <h3 className="font-heading font-semibold">Contact Pastor</h3>
                    <p className="font-body text-sm opacity-90">Speak directly with Pastor Roshan</p>
                  </div>
                </div>
              </button> */}

              {/* Card Payment */}
              <button
                onClick={() => setSelectedMethod('card')}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedMethod === 'card'
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 border-amber-500 text-white'
                    : 'bg-white border-amber-200 hover:border-amber-400 hover:bg-amber-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <CreditCardIcon />
                  <div>
                    <h3 className="font-heading font-semibold">Card Payment</h3>
                    <p className="font-body text-sm opacity-90">Secure online payment</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Payment Details */}
            {selectedMethod === 'qr' && (
              <div className="mt-6 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-center">
                  <div className="w-48 h-48 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center border-2 border-amber-300 overflow-hidden">
                    <img src={scannerQR} alt="UPI QR Code" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-body text-gray-700 font-semibold text-lg mb-2">UPI ID: 9986225964@sbi</p>
                  <p className="font-body text-gray-600 text-sm">Scan the QR code above with any UPI app to donate</p>
                </div>
              </div>
            )}

            {selectedMethod === 'contact' && (
              <div className="mt-6 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h4 className="font-heading font-semibold text-gray-900 mb-3">Contact Information</h4>
                <div className="space-y-2 font-body text-gray-700">
                  <p>📞 Pastor Roshan: +91 98765 43210</p>
                  <p>📧 Email: pastor@lfnc.org</p>
                  <p>💬 WhatsApp: +91 98765 43210</p>
                </div>
              </div>
            )}

            {selectedMethod === 'card' && (
              <div className="mt-6 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <p className="font-body text-gray-700 text-center">
                  Secure card payment processing will be available soon. Please use UPI or contact us directly.
                </p>
              </div>
            )}

            {/* Proceed Button */}
            {(selectedAmount || customAmount) && selectedMethod && (
              <button className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-heading font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Proceed with {selectedAmount || `₹${customAmount}`}
              </button>
            )}
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-16 text-center relative z-0">
          <h2 className="font-heading text-3xl font-semibold text-gray-900 mb-8">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-lg border border-amber-200/50 rounded-2xl p-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="font-body text-gray-700">Supporting families in need and community programs</p>
            </div>
            <div className="bg-white/60 backdrop-blur-lg border border-amber-200/50 rounded-2xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">Youth Development</h3>
              <p className="font-body text-gray-700">Empowering the next generation through education and mentorship</p>
            </div>
            <div className="bg-white/60 backdrop-blur-lg border border-amber-200/50 rounded-2xl p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">Global Missions</h3>
              <p className="font-body text-gray-700">Spreading God's love and Gospel to unreached communities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SowASeed;