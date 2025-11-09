import { Calendar, Users, Heart } from 'lucide-react';
import slide3 from '../../assets/images/Hero/slide3.jpg';

export default function ChurchEvents() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={slide3}
            alt="Church interior"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center w-full">
          {/* Church Events Title */}
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
            }}>Church Events</span>
          </h1>

          {/* Join Us Button */}
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-cyan-400/60 rounded-xl text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
            <Heart className="w-5 h-5 text-cyan-400" />
            <span>Join Our Community</span>
          </button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="px-4 py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-center mb-12 text-3xl font-bold">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Event 1 */}
            <button className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
              <img
                src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
                alt="Christmas celebration"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541559476219-e24ff719af30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold">December 24</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Christmas Eve Service</h3>
                <p className="text-sm opacity-90">Special candlelight service with carols and celebration</p>
                <div className="flex items-center gap-2 text-sm text-zinc-300 mt-3">
                  <Users className="w-4 h-4" />
                  <span>All Ages Welcome</span>
                </div>
              </div>
            </button>

            {/* Event 2 */}
            <button className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
                alt="Prayer gathering"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541559476219-e24ff719af30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold">December 31</span>
                </div>
                <h3 className="text-xl font-bold mb-2">New Year's Prayer Night</h3>
                <p className="text-sm opacity-90">Reflect and pray as we welcome the new year together</p>
                <div className="flex items-center gap-2 text-sm text-zinc-300 mt-3">
                  <Users className="w-4 h-4" />
                  <span>Teens & Adults</span>
                </div>
              </div>
            </button>

            {/* Event 3 */}
            <button className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
                alt="Baptism ceremony"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541559476219-e24ff719af30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold">January 7</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Baptism Sunday</h3>
                <p className="text-sm opacity-90">Celebrating new life in Christ through water baptism</p>
                <div className="flex items-center gap-2 text-sm text-zinc-300 mt-3">
                  <Users className="w-4 h-4" />
                  <span>All Congregation</span>
                </div>
              </div>
            </button>

            {/* Event 4 - Youth Meetings */}
            <button className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
                alt="Youth meeting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541559476219-e24ff719af30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold">January 14</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Youth Meetings</h3>
                <p className="text-sm opacity-90">Engaging discussions and activities for young people</p>
                <div className="flex items-center gap-2 text-sm text-zinc-300 mt-3">
                  <Users className="w-4 h-4" />
                  <span>Ages 13-18</span>
                </div>
              </div>
            </button>
          </div>

          {/* View All Events Button */}
          <div className="text-center mt-12">
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 mx-auto">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">View All Events</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}