import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FriendAvatar from '../components/FriendAvatar';
import TimelinePreview from '../components/TimelinePreview';
import BudgetBreakdown from '../components/BudgetBreakdown';
import InsightBadge from '../components/InsightBadge';

const ITINERARY_DATA = {
  title: "Bandra Slow Sunday Escape",
  date: "Saturday, 12 July",
  heroImage: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=2000&q=80",
  participants: ["Khuushi", "Vaish", "Ananya"],
  timeline: [
    { time: "5:30 PM", title: "Coffee at Third Wave Coffee", subtitle: "Start with hand-brewed coffee and dynamic planning chats", icon: "☕" },
    { time: "7:00 PM", title: "Silent Cinema Screening", subtitle: "Watch the latest indie selections at Le Rêve", icon: "🎬" },
    { time: "9:30 PM", title: "Warm Dinner at Osteria", subtitle: "Cozy fireside Italian pizzas & pastas to close the evening", icon: "🍝" }
  ],
  budget: [
    { label: "Third Wave Coffee", cost: 250 },
    { label: "Cinema Ticket", cost: 450 },
    { label: "Italian Dinner", cost: 800 }
  ],
  notes: "Remember to carry umbrellas just in case it drizzles. Vaish is picking up Ananya at 5:00 PM. See everyone there!",
  routeSummary: "Total travel distance: 5.2 km • Est. transit overhead: 20 mins"
};

const FinalItinerary = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    alert("Shareable link copied to clipboard: https://plany.co/share/itinerary-bandra");
  };

  const handleDownload = () => {
    alert("Downloading PDF itinerary... Your digital guide is ready.");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-stone-900 select-none pb-32">
      {/* Reusable Navbar */}
      <Navbar />

      <div className="max-w-4xl mx-auto pt-28 px-6 md:px-12">
        
        {/* Editorial Guide Header */}
        <header className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200/40">
          <div>
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-stone-400 block mb-1">
              Your Weekend Guide
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-light text-stone-950 tracking-tight leading-tight">
              {ITINERARY_DATA.title}
            </h1>
            <span className="font-sans text-stone-500 font-light text-sm md:text-base mt-2 block">
              {ITINERARY_DATA.date}
            </span>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-2 justify-center shrink-0">
            <button 
              onClick={handleShare}
              className="px-4 py-2 bg-white border border-stone-200 hover:border-stone-400 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm transition-colors cursor-pointer"
            >
              Share Plan
            </button>
            <button 
              onClick={handleDownload}
              className="px-4 py-2 bg-white border border-stone-200 hover:border-stone-400 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm transition-colors cursor-pointer"
            >
              Download PDF
            </button>
          </div>
        </header>

        {/* 1. Hero Image */}
        <div className="relative aspect-[21/9] w-full rounded-[32px] overflow-hidden shadow-sm mb-12 border border-stone-200/50 bg-stone-100">
          <img 
            src={ITINERARY_DATA.heroImage} 
            alt={ITINERARY_DATA.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Left Column (2/3 width) - Timeline & Notes */}
          <div className="md:col-span-2 flex flex-col gap-10">
            
            {/* Participants */}
            <section className="bg-white border border-stone-150/40 rounded-[24px] p-6 shadow-sm">
              <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-3">
                Invited Group
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {ITINERARY_DATA.participants.map((name) => (
                  <div key={name} className="flex items-center gap-2 bg-stone-50 border border-stone-150 px-3 py-1 rounded-full text-xs font-medium text-stone-700">
                    <FriendAvatar name={name} size="w-5 h-5" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <section className="bg-white border border-stone-150/40 rounded-[28px] p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-light text-stone-950 mb-8 border-b border-stone-100 pb-3">
                Schedule
              </h2>
              <TimelinePreview events={ITINERARY_DATA.timeline} />
            </section>

            {/* Notes Section */}
            <section className="bg-[#FAF8F5] border border-stone-200/60 rounded-[24px] p-6 shadow-sm relative">
              <div className="absolute top-6 right-6 text-xl opacity-20">✍️</div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-2">
                Organizer Notes
              </span>
              <p className="font-sans text-xs md:text-sm text-stone-605 italic leading-relaxed">
                "{ITINERARY_DATA.notes}"
              </p>
            </section>

          </div>

          {/* Right Column (1/3 width) - Stats, Budget & Maps */}
          <div className="flex flex-col gap-8">
            
            {/* Metadata Badges (Weather) */}
            <div className="bg-white border border-stone-150/40 rounded-[24px] p-6 shadow-sm flex flex-col gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                  Weather Forecast
                </span>
                <span className="font-sans font-semibold text-sm text-stone-850 flex items-center gap-1.5">
                  <span>⛅ Cozy & Cool 24°C</span>
                </span>
              </div>
              <div className="h-[1px] bg-stone-100" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                  Transit Info
                </span>
                <span className="font-sans text-xs text-stone-550 leading-relaxed block font-light">
                  {ITINERARY_DATA.routeSummary}
                </span>
              </div>
            </div>

            {/* Budget Breakdown */}
            <BudgetBreakdown items={ITINERARY_DATA.budget} />

            {/* Map Placeholder */}
            <div className="bg-white border border-stone-150/40 rounded-[24px] p-6 shadow-sm flex flex-col gap-3 relative overflow-hidden h-[180px] justify-between">
              {/* Fake aesthetic grid map background */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8ca3b8_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
                  Route Map
                </span>
                <span className="text-xs text-stone-550 font-light block">
                  Bandra West → Juhu
                </span>
              </div>

              <div className="relative z-10 w-full bg-[#4A6B82]/10 border border-[#4A6B82]/20 rounded-xl px-4 py-2.5 text-[10px] text-center uppercase tracking-wider font-bold text-[#4A6B82] hover:bg-[#4A6B82]/20 transition duration-300 cursor-pointer">
                Open in Maps
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-2xl border border-stone-200/60 rounded-full px-6 py-3 flex items-center justify-between gap-4 max-w-xl w-[calc(100%-2rem)] z-50">
        
        {/* Back to Discover */}
        <button 
          onClick={() => navigate('/discover')}
          className="px-5 py-3 rounded-full hover:bg-stone-50 text-stone-600 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Back to Discover
        </button>

        {/* Edit Plan */}
        <button 
          onClick={() => navigate('/create-plan')}
          className="px-5 py-3 rounded-full hover:bg-stone-50 text-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 border border-stone-100"
        >
          Edit Plan
        </button>

        {/* Home */}
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-full bg-[#4A6B82] hover:bg-[#3d596d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#4A6B82]/20 cursor-pointer"
        >
          Home
        </button>

      </div>

    </div>
  );
};

export default FinalItinerary;
