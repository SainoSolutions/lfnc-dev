import { useState, useRef } from "react";
import { api } from '../../api/apiClient';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import CustomDropdown from '../../components/reuseable/CustomDropdown';

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [subject, setSubject] = useState('');
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    const formData = new FormData(formRef.current);
    const payload = {
      fullname: formData.get('fullname') || '',
      email: formData.get('email') || '',
      mobile: String(formData.get('mobile') || ''),
      subject: formData.get('subject') || 'General Enquiry',
      message: formData.get('message') || ''
    };

    try {
      setIsSubmitting(true);
      setSubmitMessage(null);
      const res = await api.post('/api/contact-us', payload);
      setShowPopup(true);
      formRef.current.reset();
      setSubject('');
      setSubmitMessage({ type: 'success', text: 'Message sent successfully.' });
    } catch (err) {
      console.error('Contact API error:', err);
      setSubmitMessage({ type: 'error', text: err.message || 'Failed to send message.' });
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowPopup(false), 2500);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="p-8 rounded-3xl bg-white/8 backdrop-blur-lg border border-white/10 shadow-2xl">
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">Contact Us</span>
          </h1>
          <p className="text-gray-300 mb-6">We'd love to pray with you or help however we can.</p>

          <form
            ref={formRef}
            id="contactForm"
            action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {submitMessage && (
              <div className={`p-3 rounded-md text-sm ${submitMessage.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                {submitMessage.text}
              </div>
            )}
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="text-sm text-gray-200">Full Name</label>
              <input
                type="text"
                name="fullname"
                required
                placeholder="Your full name"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Mobile Number</label>
         <input
              type="text"
              name="mobile"
              required
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="10-digit mobile number"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
              }}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            </div>

            <div>
              <label className="text-sm text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Subject</label>
              <CustomDropdown
                options={['Prayer Request', 'Volunteering', 'General Enquiry']}
                value={subject}
                onChange={(val) => setSubject(val)}
                placeholder="Select a subject"
                className=""
              />
              <input type="hidden" name="subject" value={subject || 'General Enquiry'} />
            </div>

            <div>
              <label className="text-sm text-gray-200">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="How can we pray or help?"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-4 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-purple-600 hover:scale-105 transition-transform ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message ✨'}
              </button>
              <a href="tel:+916362222318" className="px-6 py-4 rounded-xl bg-white/6 border border-white/10 flex items-center gap-3">
                <FaPhoneAlt className="text-white/90" />
                <span className="text-white/90">Call</span>
              </a>
            </div>
          </form>
        </div>

        {/* CONTACT CARD + MAP */}
        <div className="p-6 rounded-3xl bg-white/6 backdrop-blur-lg border border-white/10 shadow-2xl flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-r from-red-500 to-purple-600 rounded-xl text-white">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="text-lg font-bold">Visit Our Church</h3>
              <p className="text-gray-300">Living Faith Nepali Church, Bengaluru – 560100</p>
              <p className="text-gray-300 mt-2">We meet every Sunday — all are welcome.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5849161989913!2d77.62735537563888!3d12.934378615692049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1506251d82af%3A0x2c3d16cfa65f1c45!2sLiving%20Faith%20Nepali%20Church%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1766770222310!5m2!1sen!2sin"
              className="w-full h-60 sm:h-72 md:h-80"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Living Faith Nepali Church Location"
            />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-between bg-white/6 rounded-lg px-4 py-3 border border-white/10">
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <p className="font-semibold">+91 6362222318</p>
              </div>
              <a href="tel:+916362222318" className="text-sm text-purple-300">Call</a>
            </div>

            <div className="flex items-center justify-between bg-white/6 rounded-lg px-4 py-3 border border-white/10">
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="font-semibold">lfncit2025@gmail.com</p>
              </div>
              <a href="mailto:lfncit2025@gmail.com" className="text-sm text-purple-300">Email</a>
            </div>
          </div>
        </div>

      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white/6 p-8 rounded-3xl text-center border border-white/10 shadow-2xl">
            <h3 className="text-green-400 font-bold text-lg mb-2">✅ Message Submitted Successfully</h3>
            <p className="text-gray-300">Thank you for contacting us. We will get back to you soon...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactPage;
