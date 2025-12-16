import { Calendar, Users, Heart } from 'lucide-react';
import { EventService } from './EventService';
import slide3 from '../../assets/images/Hero/slide3.jpg';
import { useEffect, useState } from 'react';

export default function ChurchEvents() {
  const [eventData, setEventData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    EventService.getAllEvents().then((data) => {
      if (data && data[0]) {
        setEventData(data[0]);
      }
      setIsLoading(false);
    }).catch((error) => {
      console.error("Error fetching events:", error);
      setIsLoading(false);
    });
  }, [])
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          {isLoading ? (
            <div className="w-full h-full bg-gradient-to-b from-zinc-800 to-zinc-950 animate-pulse" />
          ) : (
            <>
              <img
                src={eventData?.eventheader?.eventheader_image}
                alt="Church interior"
                className="w-full h-full object-cover opacity-40"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950" />
            </>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center w-full">
          {/* Church Events Title */}
          {isLoading ? (
            <div className="h-24 bg-white/10 rounded-lg animate-pulse mb-12 mx-auto w-3/4 max-w-4xl" />
          ) : (
            <h1 
              className="mb-12 px-6 mx-auto max-w-full overflow-visible"
              style={{ 
                fontSize: 'clamp(3rem, 14vw, 9rem)', 
                lineHeight: '0.9', 
                fontWeight: '900', 
                letterSpacing: '-0.02em'
              }}
            >
              <span style={{
                background: 'linear-gradient(to right, #EF4444, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Church </span><span style={{
                background: 'linear-gradient(to right, #EF4444, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }} className="animate-pulse">Events</span>
            </h1>
          )}

          {/* Join Us Button */}
          {!isLoading && (
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-cyan-400/60 rounded-xl text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
              <Heart className="w-5 h-5 text-cyan-400" />
              <span>Join Our Community</span>
            </button>
          )}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="px-4 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-center mb-12 text-3xl font-bold">
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400"></div>
                <span>Loading Events, stay tuned...</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            ) : (eventData?.events?.length > 0 ? 'Upcoming Events' : 'No Events Available')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading ? (
              // Loading Skeleton
              [...Array(4)].map((_, idx) => (
                <div key={idx} className="relative h-80 rounded-2xl overflow-hidden bg-white/10 animate-pulse" />
              ))
            ) : (
              // Events Content
              eventData?.events?.map((event) => (
                <button key={event.id} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = event.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm opacity-90">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm text-zinc-300 mt-3">
                      <Users className="w-4 h-4" />
                      <span>{event.audience}</span>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>

          {/* View All Events Button */}
          {!isLoading && (
            <div className="text-center mt-12">
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 mx-auto">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">View All Events</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
