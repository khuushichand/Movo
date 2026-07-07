import React from 'react';

const PICKS = [
  {
    id: "rainy-day-cafes",
    category: "Cozy Spaces",
    title: "Rainy Day Cafés",
    description: "Where time slows down, coffee tastes richer, and pages turn warmer.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    height: "440px",
  },
  {
    id: "movie-nights",
    category: "Cinematic Escapes",
    title: "Movie Nights",
    description: "Revisit the classics and discover indie films in intimate, historic theatres.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    height: "520px",
  },
  {
    id: "sunset-spots",
    category: "Outdoor Moments",
    title: "Sunset Spots",
    description: "The absolute best golden hour viewpoints to watch the day come to a close.",
    image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80",
    height: "480px",
  },
  {
    id: "creative-weekends",
    category: "Workshops",
    title: "Creative Weekends",
    description: "Hands-on afternoon pottery sessions to sculpt something uniquely yours.",
    image: "https://images.unsplash.com/photo-1565192647048-f997ded879ab?auto=format&fit=crop&w=1200&q=80",
    height: "440px",
  },
  {
    id: "live-music",
    category: "Intimate Sounds",
    title: "Live Music",
    description: "Dimly lit jazz cafés and late-night acoustic sets that capture the local pulse.",
    image: "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?auto=format&fit=crop&w=1200&q=80",
    height: "520px",
  },
  {
    id: "hidden-gems",
    category: "Quiet Corners",
    title: "Hidden Gems",
    description: "Tucked away bookstore alcoves where you can lose yourself for hours.",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=1200&q=80",
    height: "460px",
  },
];

const EditorsPicks = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8F6F2] text-stone-900 select-none border-t border-stone-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-stone-950 mb-4">
            Editor's Picks
          </h2>
          <p className="font-sans text-stone-600 text-lg md:text-xl font-light">
            Handpicked experiences for your next unforgettable weekend.
          </p>
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 md:columns-2 gap-8 [column-fill:_balance]">
          {PICKS.map((pick) => (
            <div
              key={pick.id}
              className="group relative w-full rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-700 cursor-pointer bg-stone-100 mb-8 break-inside-avoid flex flex-col justify-between p-8 border border-stone-150/30"
              style={{ height: pick.height }}
            >
              {/* Background Image Container */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-103"
                style={{
                  backgroundImage: `url(${pick.image})`,
                }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-black/20" />

              {/* Top: Category label */}
              <div className="relative z-10">
                <span className="uppercase tracking-[0.2em] text-[10px] font-semibold text-stone-100 bg-black/20 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                  {pick.category}
                </span>
              </div>

              {/* Bottom: Content */}
              <div className="relative z-10 text-white flex flex-col gap-2">
                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  {pick.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs md:text-sm text-stone-300 font-light leading-relaxed max-w-md">
                  {pick.description}
                </p>

                {/* Explore Link */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-semibold text-white mt-2">
                  <span>Explore</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-3.5 h-3.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPicks;
