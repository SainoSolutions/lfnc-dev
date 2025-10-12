import React from 'react';
import kidsImg from '../../assets/images/Ministries/Kids.jpg'
import teensImg from '../../assets/images/Ministries/Teens.jpg'
import youthImg from '../../assets/images/Ministries/Youth.jpg'
import mensImg from '../../assets/images/Ministries/Mens.jpg'

const Ministries = () => {
  const ministries = [
    {
      id: 1,
      image: kidsImg,
      title: "Kids Ministry",
      description: "Engaging activities and lessons for children to learn about faith."
    },
    {
      id: 2,
      image: teensImg,
      title: "Teens Ministry",
      description: "Dynamic programs and discussions for teenagers to explore their faith."
    },
    {
      id: 3,
      image: youthImg,
      title: "Youth Ministry",
      description: "Dynamic programs and discussions for young adults to explore their faith."
    },
    {
      id: 5,
      image: mensImg,
      title: "Men's Ministry",
      description: "Building camaraderie and spiritual growth among men through various activities."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-6 px-4 sm:py-8 sm:px-6">
      {/* Header */}
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our Ministries
        </h1>
      </header>

      {/* Ministries Grid - Same dimensions as Services */}
      <main className="max-w-7xl mx-auto w-full px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-9 sm:gap-8 w-full">
          {ministries.map((ministry) => (
            <div 
              key={ministry.id}
              className="bg-gray-100 p-4 sm:p-5 rounded-xl transform-gpu transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg text-center w-full border border-gray-200"
            >
              <img 
                src={ministry.image} 
                alt={ministry.title}
                className="w-full h-32 sm:h-36 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {ministry.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Ministries;