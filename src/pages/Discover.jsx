import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard';
import { EXPERIENCES } from '../data/experiences';

const TRENDING_ITEMS = EXPERIENCES.slice(0, 4);

const BROWSE_BY_MOODS = [
  { label: "Romantic", emoji: "💖" },
  { label: "Cozy", emoji: "🕯" },
  { label: "Adventure", emoji: "🎒" },
  { label: "Luxury", emoji: "✨" },
  { label: "Creative", emoji: "🎨" },
  { label: "Nature", emoji: "🌿" },
  { label: "Nightlife", emoji: "🌙" },
];

const COLLECTIONS = [
  {
    id: "perfect-first-dates",
    badge: "Volume I • Date Nights",
    title: "Perfect First Dates",
    subtitle: "Low-pressure, high-connection plans that spark authentic conversation.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rainy-day-escapes",
    badge: "Volume III • Cozy sanctuary",
    title: "Rainy Day Escapes",
    subtitle: "Tucked away alcoves, indie screening rooms, and hot cocoa spots.",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "weekend-under-1000",
    badge: "Volume V • Budget Friendly",
    title: "Weekend under ₹1000",
    subtitle: "Local street food crawls, free entry art spaces, and park picnics.",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hidden-gems-spots",
    badge: "Volume VIII • Secret Spots",
    title: "Hidden Gems",
    subtitle: "Unmarked speakeasies, quiet rooftop gardens, and historic alleys.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
];

const NEAR_YOU = EXPERIENCES.slice(4, 7);


const Discover = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8F6F2] text-stone-900 select-none pb-24">
      {/* Reusable Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto pt-28 px-6 md:px-12 lg:px-24">
        
        {/* Header Greeting & Search */}
        <header className="mb-16">
          <p className="font-sans text-stone-500 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Good evening 👋
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-950 mb-8 leading-tight">
            What are you in the mood for today?
          </h1>

          {/* Search Input */}
          <div className="relative max-w-2xl">
            <input 
              type="text" 
              placeholder="Search cafés, restaurants, movies or experiences..." 
              className="w-full bg-white text-stone-900 placeholder-stone-400 font-light text-sm md:text-base px-6 py-4.5 rounded-full border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300 shadow-sm"
            />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-stone-400">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.8} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
              </svg>
            </div>
          </div>
        </header>

        {/* 1. Trending this Weekend */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-stone-950 mb-8 border-b border-stone-200/40 pb-4">
            Trending this Weekend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRENDING_ITEMS.map((item) => (
              <ExperienceCard
                key={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
                onClick={() => navigate(`/experience/${item.id}`)}
              />
            ))}
          </div>
        </section>

        {/* 2. Browse by Mood */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-stone-950 mb-8 border-b border-stone-200/40 pb-4">
            Browse by Mood
          </h2>
          <div className="flex gap-3.5 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {BROWSE_BY_MOODS.map((mood) => (
              <button 
                key={mood.label} 
                className="px-6 py-4 rounded-full bg-white border border-stone-200/80 text-stone-850 hover:bg-stone-950 hover:text-white hover:border-stone-950 transition-all duration-300 font-sans text-xs uppercase tracking-wider font-bold shadow-sm cursor-pointer flex items-center gap-2 shrink-0"
              >
                <span>{mood.emoji}</span>
                <span>{mood.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 3. Collections */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-stone-950 mb-8 border-b border-stone-200/40 pb-4">
            Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COLLECTIONS.map((col) => (
              <div 
                key={col.id}
                className="group relative h-[360px] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer flex flex-col justify-end p-6 border border-stone-150/40"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-102"
                  style={{ backgroundImage: `url(${col.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                <div className="relative z-10 text-white flex flex-col gap-1.5">
                  <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-stone-300">
                    {col.badge}
                  </span>
                  <h3 className="font-serif text-xl font-light leading-snug">
                    {col.title}
                  </h3>
                  <p className="font-sans text-[11px] text-stone-300 font-light leading-relaxed">
                    {col.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Near You */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-tight text-stone-950 mb-8 border-b border-stone-200/40 pb-4">
            Near You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEAR_YOU.map((place) => (
              <ExperienceCard
                key={place.id}
                image={place.image}
                title={place.title}
                description={place.description}
                location={place.location}
                onClick={() => navigate(`/experience/${place.id}`)}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Discover;
