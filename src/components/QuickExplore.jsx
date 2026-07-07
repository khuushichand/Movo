import React from 'react';

const CATEGORIES = [
  {
    id: "movie-nights",
    title: "Movie Nights",
    caption: "Late releases, indie cinemas and unforgettable evenings.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cafes",
    title: "Cafés & Restaurants",
    caption: "Hidden cafés you'll want to revisit.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "experiences",
    title: "Experiences",
    caption: "Pottery, workshops, adventures and unforgettable moments.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hidden-gems",
    title: "Hidden Gems",
    caption: "Unexpected places worth discovering.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
];

const QuickExplore = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] text-stone-900 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight text-stone-950 mb-4">
            Start with a feeling.
          </h2>
          <p className="font-sans text-stone-600 text-lg md:text-xl font-light">
            Choose a mood. We'll help you turn it into a plan.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group relative h-[480px] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-700 cursor-pointer bg-stone-100 flex flex-col justify-end p-8"
            >
              {/* Background Image Container */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent transition-opacity duration-700" />

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col w-full text-white">
                {/* Title */}
                <h3 className="font-serif text-2xl font-light tracking-wide mb-2 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  {category.title}
                </h3>

                {/* Caption */}
                <p className="font-sans text-xs sm:text-sm text-stone-200/90 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                  {category.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickExplore;
