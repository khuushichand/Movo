import React from 'react';
import ExperienceCard from './ExperienceCard';

const DEFAULT_SUGGESTIONS = [
  {
    id: "vintage-bookstore-ai",
    title: "The Vintage Archive Bookstore",
    category: "Recommended Coffee",
    description: "Quiet bookshelves and slow drip coffee to start the morning peacefully.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    location: "Fort",
    price: "₹300 pp",
  },
  {
    id: "jazz-club-ai",
    title: "The Back Alley Jazz Club",
    category: "Recommended Dinner",
    description: "A quiet dimly lit room for warm food and soft live jazz sets.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    location: "Juhu",
    price: "₹700 pp",
  },
];

const DEFAULT_ITINERARY = [
  "☕ 9:30 AM • Coffee",
  "🎬 4:00 PM • Movie",
  "🍝 8:00 PM • Dinner",
];

const AISuggestionsPanel = ({ 
  insight = "Based on your group’s preferences, everyone prefers cozy, indoor locations with a soft atmosphere and an average budget of ₹800. We've crafted a slow, cohesive day that flows seamlessly.",
  itinerary = DEFAULT_ITINERARY,
  suggestions = DEFAULT_SUGGESTIONS
}) => {
  return (
    <div className="flex flex-col gap-8 w-full select-none">
      
      {/* AI Insight Card */}
      <div className="bg-[#4A6B82]/5 border border-[#4A6B82]/20 rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
        <div className="w-14 h-14 rounded-2xl bg-[#4A6B82]/10 flex items-center justify-center text-2xl shrink-0 text-[#4A6B82]">
          ✨
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4A6B82] block mb-1.5">
            AI Itinerary Suggestion
          </span>
          <p className="font-serif text-lg md:text-xl font-light text-stone-900 leading-relaxed max-w-2xl">
            {insight}
          </p>
        </div>
      </div>

      {/* Suggested Itinerary Steps Flow */}
      {itinerary && itinerary.length > 0 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white border border-stone-150/40 rounded-2xl p-6 shadow-sm">
          {itinerary.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs uppercase tracking-wider font-semibold text-stone-700 bg-stone-50 border border-stone-100/50 px-4 py-2 rounded-full shadow-sm">
                  {step}
                </span>
              </div>
              {index < itinerary.length - 1 && (
                <div className="hidden md:block text-stone-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Suggested Alternative Cards */}
      {suggestions && suggestions.length > 0 && (
        <div>
          <h3 className="font-serif text-xl font-light text-stone-950 mb-6">
            Suggested Alternatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.map((item) => (
              <ExperienceCard
                key={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
                location={item.location}
                price={item.price}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default AISuggestionsPanel;
