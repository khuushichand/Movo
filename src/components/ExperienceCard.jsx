import React from 'react';

const ExperienceCard = ({ image, category, title, description, location, price, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-stone-150/40 cursor-pointer"
    >
      
      {/* Image Container with Zoom & Badge */}
      <div className="relative w-full h-[260px] overflow-hidden bg-stone-100">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          />
        )}
        
        {/* Soft Gradient Overlay on Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent" />
        
        {/* Category Badge overlay on top-left of image */}
        {category && (
          <span className="absolute top-4 left-4 uppercase tracking-[0.18em] text-[9px] font-bold text-stone-950 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
            {category}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-serif text-xl font-light text-stone-950 group-hover:text-stone-800 transition-colors duration-300 leading-snug mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-xs md:text-sm text-stone-500 font-light leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Location & Price Footer */}
        {(location || price) && (
          <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
            {/* Location */}
            {location && (
              <div className="flex items-center gap-1.5 text-stone-400 font-light">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-3.5 h-3.5 shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="truncate max-w-[140px] md:max-w-[180px]">{location}</span>
              </div>
            )}

            {/* Price Tag */}
            {price && (
              <span className="font-sans font-bold text-stone-850 bg-stone-50 px-3 py-1 rounded-full border border-stone-100/50">
                {price}
              </span>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default ExperienceCard;
