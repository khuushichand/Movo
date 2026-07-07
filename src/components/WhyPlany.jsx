import React from 'react';

const WhyPlany = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8F6F2] text-stone-900 select-none border-t border-stone-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-950 mb-6">
            Plan less.
            <br />
            Experience more.
          </h2>
          <p className="font-sans text-stone-600 text-lg md:text-xl font-light max-w-xl mx-auto">
            Stop spending 45 minutes deciding where to go.
          </p>
        </div>

        {/* Vertical Stack of Horizontal Cards */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Card 1 */}
          <div className="w-full bg-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 shadow-sm hover:shadow-md transition-all duration-500 group border border-stone-100/50">
            <div className="w-16 h-16 rounded-2xl bg-stone-55/40 flex items-center justify-center text-3xl shrink-0 group-hover:scale-105 transition-transform duration-500 bg-[#F8F6F2]">
              💡
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl md:text-2xl font-light text-stone-950 mb-2">
                Everyone shares ideas.
              </h3>
              <p className="font-sans text-stone-600 text-sm md:text-base font-light leading-relaxed">
                Friends can add restaurants, cafés, movies and activities in one place.
              </p>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="text-stone-300 py-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 animate-pulse"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 shadow-sm hover:shadow-md transition-all duration-500 group border border-stone-100/50">
            <div className="w-16 h-16 rounded-2xl bg-stone-55/40 flex items-center justify-center text-3xl shrink-0 group-hover:scale-105 transition-transform duration-500 bg-[#F8F6F2]">
              🗳
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl md:text-2xl font-light text-stone-950 mb-2">
                Decide together.
              </h3>
              <p className="font-sans text-stone-600 text-sm md:text-base font-light leading-relaxed">
                Vote, compare and quickly find what everyone agrees on.
              </p>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="text-stone-300 py-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 animate-pulse"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 shadow-sm hover:shadow-md transition-all duration-500 group border border-stone-100/50">
            <div className="w-16 h-16 rounded-2xl bg-stone-55/40 flex items-center justify-center text-3xl shrink-0 group-hover:scale-105 transition-transform duration-500 bg-[#F8F6F2]">
              🎉
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl md:text-2xl font-light text-stone-950 mb-2">
                Actually enjoy the weekend.
              </h3>
              <div className="font-sans text-stone-600 text-sm md:text-base font-light leading-relaxed">
                Less time planning.
                <br />
                More time making memories.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyPlany;
