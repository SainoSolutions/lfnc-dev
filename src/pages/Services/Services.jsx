import React from 'react';
import baptismImg from '../../assets/images/Baptisim.jpg';
import birthdayImg from '../../assets/images/birthday.jpg';
import funeralImg from '../../assets/images/Funeral.jpg';
import volunteerImg from '../../assets/images/Volunteer.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      image: baptismImg,
      title: "Baptism Service",
      description: "We offer a special baptism service for infants and adults alike, conducted by our senior pastor."
    },
    {
      id: 2,
      image: birthdayImg,
      title: "Birthday Service",
      description: "Celebrate your special day with a personalized birthday service, including prayers and blessings."
    },
    {
      id: 3,
      image: funeralImg,
      title: "Funeral Service",
      description: "We provide compassionate funeral services to honor and remember your loved ones."
    },
    {
      id: 4,
      image: volunteerImg,
      title: "Volunteer Services",
      description: "Opportunities to serve the community and church through volunteering."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-6 px-4 sm:py-8 sm:px-6">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
      </header>

      <main className="max-w-7xl mx-auto w-full px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-9 sm:gap-8 w-full">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-100 p-4 sm:p-5 rounded-xl transform-gpu transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg text-center w-full border border-gray-200"
            >
              {/* Shorter image height and more balanced card */}
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-32 sm:h-36 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;