import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ImageGallery from '../components/ImageGallery';
import { EXPERIENCES } from '../data/experiences';

const ExperienceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const sharedData = EXPERIENCES.find(e => e.id === id);

  if (!sharedData) {
    return (
      <div className="min-h-screen bg-[#F8F6F2] text-stone-900 flex flex-col items-center justify-center p-6 text-center">
        <Navbar />
        <div className="max-w-md">
          <span className="text-4xl mb-4 block">✨</span>
          <h2 className="font-serif text-3xl font-light text-stone-950 mb-3 tracking-tight">
            Experience Not Found
          </h2>
          <p className="font-sans text-stone-550 font-light text-sm mb-8 leading-relaxed">
            We couldn't find the experience you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link 
            to="/discover" 
            className="px-6 py-3 rounded-full bg-[#4A6B82] hover:bg-[#3d596d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer inline-block"
          >
            Back to Discover
          </Link>
        </div>
      </div>
    );
  }

  const DEMO_EXPERIENCE = {
    ...sharedData,
    heroImage: sharedData.image,
    bestTime: sharedData.bestTime || "4:00 PM – 7:00 PM (Golden Hour)",
    gallery: sharedData.gallery || [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    ],
    whyLoveIt: sharedData.whyLoveIt || [
      {
        icon: "🌿",
        title: "Natural Light",
        text: "Flooded with floor-to-ceiling sunbeams, making it an aesthetic, organic greenhouse sanctuary.",
      },
      {
        icon: "☕",
        title: "Artisanal Roasts",
        text: "Curated single-origin brews sourced from local shade-grown organic estates, poured slowly.",
      },
      {
        icon: "🤫",
        title: "Silent Sanctuary",
        text: "A strictly enforced low-volume environment, perfect for peaceful decompression with friends.",
      },
    ],
    reviews: sharedData.reviews || [
      {
        author: "Ananya R.",
        rating: 5,
        text: "An absolute dream. We sat by the window for three hours just watching the rain filter through the leaves. Best weekend spot in the city.",
      },
      {
        author: "Rohan M.",
        rating: 5,
        text: "The pour-over coffee is exceptional, but the atmosphere is why you'll keep coming back. Highly recommend adding it to any group plan.",
      },
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-stone-900 select-none pb-32">
      {/* Reusable Navbar */}
      <Navbar />

      <div className="max-w-6xl mx-auto pt-28 px-6 md:px-12">
        
        {/* 1. Hero Image (16:9) */}
        <div className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden shadow-sm mb-12 bg-stone-100 group border border-stone-200/50">
          <img 
            src={DEMO_EXPERIENCE.heroImage} 
            alt={DEMO_EXPERIENCE.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-101"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Info Grid (2 Columns on Desktop) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Details */}
          <div className="flex-1">
            {/* 2. Category badge */}
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-stone-500 bg-stone-150/40 px-3.5 py-1.5 rounded-full mb-4 inline-block">
              {DEMO_EXPERIENCE.category}
            </span>

            {/* 3. Title */}
            <h1 className="font-serif text-3xl md:text-5xl font-light text-stone-950 mb-4 tracking-tight leading-tight">
              {DEMO_EXPERIENCE.title}
            </h1>

            {/* 4. Location */}
            <div className="flex items-center gap-2 text-stone-400 font-light text-sm mb-8">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-4 h-4 shrink-0 text-stone-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>{DEMO_EXPERIENCE.location}</span>
            </div>

            {/* 8. Editorial description */}
            <p className="font-sans text-stone-600 text-base md:text-lg font-light leading-relaxed mb-12">
              {DEMO_EXPERIENCE.description}
            </p>
          </div>

          {/* Right Column: Sticky Stats Box */}
          <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-32">
            <div className="bg-white rounded-[24px] p-8 border border-stone-150/40 shadow-sm flex flex-col gap-6">
              
              {/* 5. Estimated budget */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-stone-400 block mb-1">
                  Estimated Budget
                </span>
                <span className="font-sans font-semibold text-lg text-stone-850">
                  {DEMO_EXPERIENCE.budget}
                </span>
              </div>

              <div className="h-[1px] bg-stone-100" />

              {/* 6. Duration */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-stone-400 block mb-1">
                  Duration
                </span>
                <span className="font-sans font-semibold text-lg text-stone-850">
                  {DEMO_EXPERIENCE.duration}
                </span>
              </div>

              <div className="h-[1px] bg-stone-100" />

              {/* 7. Best time to visit */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-stone-400 block mb-1">
                  Best Time to Visit
                </span>
                <span className="font-sans font-semibold text-base text-stone-850">
                  {DEMO_EXPERIENCE.bestTime}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* 9. Photo Gallery */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-light text-stone-950 mb-6 pb-2 border-b border-stone-200/40">
            Gallery
          </h2>
          <ImageGallery images={DEMO_EXPERIENCE.gallery} />
        </section>

        {/* 10. Why you'll love it */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl font-light text-stone-950 mb-8 pb-2 border-b border-stone-200/40">
            Why you'll love it
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_EXPERIENCE.whyLoveIt.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white border border-stone-150/40 rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{reason.icon}</div>
                <h3 className="font-serif text-lg font-light text-stone-900 mb-2">
                  {reason.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-stone-500 font-light leading-relaxed">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Reviews preview */}
        <section className="mt-20">
          <h2 className="font-serif text-2xl font-light text-stone-950 mb-8 pb-2 border-b border-stone-200/40">
            Guest Thoughts
          </h2>
          <div className="flex flex-col gap-6">
            {DEMO_EXPERIENCE.reviews.map((rev, index) => (
              <div 
                key={index} 
                className="bg-white/60 p-6 rounded-2xl border border-stone-150/40 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-sans text-xs font-semibold text-stone-600">
                    {rev.author[0]}
                  </div>
                  <span className="font-sans text-sm font-semibold text-stone-850">{rev.author}</span>
                  <span className="text-xs text-stone-400 font-light ml-auto">Verified Plan</span>
                </div>
                <p className="font-sans text-xs md:text-sm text-stone-600 font-light italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 12. Sticky Bottom Action Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-xl border border-stone-200/50 rounded-full px-8 py-3 flex items-center justify-between gap-8 max-w-md w-[calc(100%-2rem)] z-55 transition-all duration-300">
        
        {/* Save Button */}
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className={`flex flex-col items-center gap-0.5 text-[9px] uppercase tracking-wider font-semibold transition-colors duration-300 cursor-pointer ${isSaved ? 'text-red-500' : 'text-stone-500 hover:text-stone-900'}`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill={isSaved ? "currentColor" : "none"} 
            viewBox="0 0 24 24" 
            strokeWidth={1.8} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </button>

        {/* Share Button */}
        <button 
          className="flex flex-col items-center gap-0.5 text-[9px] uppercase tracking-wider font-semibold text-stone-500 hover:text-stone-900 transition-colors duration-300 cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.8} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
          <span>Share</span>
        </button>

        {/* Divider */}
        <div className="w-[1px] h-8 bg-stone-200" />

        {/* Add to Plan Button */}
        <button 
          onClick={() => {
            setIsAdded(!isAdded);
            navigate('/create-plan', { state: { experience: DEMO_EXPERIENCE } });
          }}
          className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${isAdded ? 'bg-stone-900 text-white' : 'bg-[#4A6B82] text-white hover:bg-[#3d596d]'}`}
        >
          {isAdded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>Added</span>
            </>
          ) : (
            <>
              <span>+ Add to Plan</span>
            </>
          )}
        </button>

      </div>

    </div>
  );
};

export default ExperienceDetails;
