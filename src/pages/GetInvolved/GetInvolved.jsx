import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function GetInvolved() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Sunday Services",
      activities: [
        "Worship & The Word: 8:00 am – 9:30 am",
        "Kid’s Service: 8:30 am – 9:30 am",
        "Electronic City Branch: 8:00 am – 9:30 am",
      ],
    },
    {
      title: "House Fellowships",
      activities: [
        "HSR Layout: 1st & 3rd Monday, 8:00 pm – 9:30 pm",
        "Indiranagar: 1st Tuesday, 7:00 pm – 8:30 pm",
        "Ejipura & Neelasandra: 1st & 3rd Tuesday, 10:00 am – 11:30 am",
        "Bannerghatta: 1st Tuesday, 12:30 pm – 2:00 pm",
        "Koramangala: 1st & 3rd Wednesday, 7:30 am – 9:00 am",
        "Madiwala: 2nd & 4th Wednesday, 7:30 am – 9:00 am",
        "Visiting New Fellowship: Last Tuesday – Any time",
      ],
    },
    {
      title: "Bible & Prayer",
      activities: [
        "Bible Study: Thursday, 8:00 am – 9:00 am",
        "Intercessory Prayer: Friday, 7:30 am – 8:30 am",
        "Fasting Prayer: Friday, 11:00 am – 1:00 pm",
      ],
    },
    {
      title: "Youth & Teen Activities",
      activities: [
        "Youth Fellowship: Tuesday, 7:30 am – 9:00 am",
        "Teen’s Fellowship: Saturday, 4:00 pm – 5:30 pm",
      ],
    },
    {
      title: "Women & Couple Fellowships",
      activities: [
        "Couple Fellowship: 2nd Tuesday, 11:00 am – 12:30 pm",
        "Women’s Fellowship: Last Wednesday, 9:00 pm – 10:30 pm",
      ],
    },
    {
      title: "Saturday Worship & Practice",
      activities: ["Worship Practice: Saturday, 7:30 am – 9:30 am"],
    },
    {
      title: "Monthly Activities",
      activities: [
        "Communion Service: 1st Sunday of Every Month",
        "Sunday House Fellowship: 1st Sunday, 6:00 pm – 7:00 pm",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8 px-4 sm:py-12 sm:px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Header */}
      <header className="text-center mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-2xl mb-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <FaCalendarAlt className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 mb-6 tracking-tight">
          2025 – A Year of Provision
        </h1>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          Join our vibrant church activities and grow in faith together
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-red-500 to-purple-600 mx-auto rounded-full"></div>
      </header>

      {/* Activities Section */}
      <section className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glassmorphism Card */}
              <div className="bg-white/90 rounded border border-white/20 shadow-lg hover:shadow-xl transition-all duration-150 ease-out overflow-hidden">
                {/* Header */}
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none group hover:bg-gray-50/50 transition-colors duration-150"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded flex items-center justify-center">
                      <FaCalendarAlt className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-150">
                      {section.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <FaChevronUp className="w-5 h-5 text-red-600 transition-transform duration-150" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors duration-150" />
                    )}
                  </div>
                </button>

                {/* Content */}
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <ul className="space-y-3">
                        {section.activities.map((item, i) => {
                          const hasTime = /\d{1,2}:\d{2}\s?(am|pm|AM|PM)/.test(item);
                          return (
                            <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded transition-colors duration-150 hover:bg-gray-100">
                              {!hasTime && <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>}
                              <span className="text-gray-700 leading-relaxed flex items-center gap-2">
                                {hasTime && <FaClock className="w-3 h-3 text-red-600 flex-shrink-0" />}
                                {item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
