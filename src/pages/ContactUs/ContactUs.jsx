import { useState } from "react";

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => {
      e.target.submit(); // submits to formsubmit
    }, 800);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-950 to-slate-950 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(147,51,234,0.4)] animate-pulse">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-300 mb-6">
            We would love to hear from you and pray with you
          </p>

          <form
            id="contactForm"
            action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-950/70 border border-white/20"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-950/70 border border-white/20"
              />
            </div>

            <div>
              <label className="text-sm">Subject</label>
              <select
                name="subject"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-950/70 border border-white/20"
              >
                <option>Prayer Request</option>
                <option>Volunteering</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-950/70 border border-white/20"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-purple-600 hover:scale-105 transition-transform"
            >
              Send Message ✨
            </button>
          </form>
        </div>

        {/* MAP */}
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl">
          <h2 className="text-xl font-semibold mb-3">Visit Our Church</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5849161989913!2d77.62735537563888!3d12.934378615692049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1506251d82af%3A0x2c3d16cfa65f1c45!2sLiving%20Faith%20Nepali%20Church%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1766770222310!5m2!1sen!2sin"
            className="w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Living Faith Nepali Church Location"
            />

          <p className="mt-3 text-gray-300 text-sm">
            📍 Living Faith Nepali Church, Bengaluru – 560100 <br />
            📞 +91 6362222318
          </p>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-slate-950 p-8 rounded-2xl text-center shadow-[0_0_30px_rgba(34,197,94,0.6)]">
            <h3 className="text-green-400 font-bold text-lg mb-2">
              ✅ Message Submitted Successfully
            </h3>
            <p className="text-gray-300">
              Thank you for contacting us. <br />
              We will get back to you soon...
            </p>
          </div>
        </div>
      )}

      {/* FLOATING BUTTONS */}
      {/* <div className="fixed right-6 bottom-6 flex flex-col gap-4">
        <a
          href="https://wa.me/916362222318"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-xl"
        >
          💬
        </a>
        <a
          href="tel:+916362222318"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-500 text-xl"
        >
          📞
        </a>
      </div> */}
    </section>
  );
};

export default ContactPage;
