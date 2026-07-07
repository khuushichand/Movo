import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard';

const INITIAL_EXPERIENCES = [
  {
    id: "glasshouse-cafe",
    title: "The Glasshouse Café",
    category: "Cafés",
    description: "A secret glass greenhouse café tucked deep inside the botanical grounds.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
    location: "Borivali West",
    price: "₹800 for two",
  }
];

const CreatePlan = () => {
  const navigate = useNavigate();
  const locationState = useLocation();
  const passedExperience = locationState.state?.experience;

  const [experiences, setExperiences] = useState(() => {
    if (passedExperience) {
      const exists = INITIAL_EXPERIENCES.some((exp) => exp.id === passedExperience.id);
      if (exists) return INITIAL_EXPERIENCES;
      return [passedExperience, ...INITIAL_EXPERIENCES];
    }
    return INITIAL_EXPERIENCES;
  });
  const [friends, setFriends] = useState(["Khuushi", "Vaish", "Ananya"]);
  
  const removeExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const inviteFriend = () => {
    const name = prompt("Enter friend's name:");
    if (name && name.trim()) {
      setFriends([...friends, name.trim()]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-stone-900 select-none pb-32">
      {/* Reusable Navbar */}
      <Navbar />

      <div className="max-w-4xl mx-auto pt-28 px-6 md:px-12">
        
        {/* Header */}
        <header className="mb-12 text-center md:text-left">
          <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-stone-400 block mb-1">
            New Workspace
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-stone-950 tracking-tight mb-3">
            Create a new plan
          </h1>
          <p className="font-sans text-stone-500 font-light text-sm md:text-base">
            Turn ideas into a weekend everyone is excited for.
          </p>
        </header>

        {/* Form Card */}
        <section className="bg-white rounded-[28px] p-8 md:p-10 border border-stone-150/40 shadow-sm mb-12">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Plan Name */}
            <div>
              <label className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-2">
                Plan Name
              </label>
              <input 
                type="text" 
                placeholder="e.g., Summer Escape, Sunday Brunch Crawl"
                className="w-full bg-[#F8F6F2]/30 text-stone-900 placeholder-stone-400 font-light text-sm px-5 py-3.5 rounded-xl border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300"
              />
            </div>

            {/* Date & Time Picker */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-2">
                  Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-[#F8F6F2]/30 text-stone-900 font-light text-sm px-5 py-3.5 rounded-xl border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-2">
                  Time
                </label>
                <input 
                  type="time" 
                  className="w-full bg-[#F8F6F2]/30 text-stone-900 font-light text-sm px-5 py-3.5 rounded-xl border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300"
                />
              </div>
            </div>

            {/* Budget & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-2">
                  Estimated Budget
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., ₹1000 pp"
                  className="w-full bg-[#F8F6F2]/30 text-stone-900 placeholder-stone-400 font-light text-sm px-5 py-3.5 rounded-xl border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-2">
                  Location
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., Bandra West"
                  className="w-full bg-[#F8F6F2]/30 text-stone-900 placeholder-stone-400 font-light text-sm px-5 py-3.5 rounded-xl border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-2">
                Description
              </label>
              <textarea 
                rows="4"
                placeholder="Share notes, outline ideas, or write a welcoming description for your friends..."
                className="w-full bg-[#F8F6F2]/30 text-stone-900 placeholder-stone-400 font-light text-sm px-5 py-3.5 rounded-xl border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300 resize-none"
              />
            </div>

          </form>
        </section>

        {/* Invite Friends Section */}
        <section className="mb-12 bg-white rounded-[28px] p-8 md:p-10 border border-stone-150/40 shadow-sm">
          <h2 className="font-serif text-2xl font-light text-stone-950 mb-6">
            Invite Friends
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {friends.map((friend, i) => (
              <div 
                key={i}
                className="px-4 py-2 bg-stone-50 border border-stone-150 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-stone-200 text-[10px] flex items-center justify-center font-sans font-bold text-stone-600">
                  {friend[0]}
                </div>
                <span>{friend}</span>
              </div>
            ))}
            
            {/* Invite Button */}
            <button 
              onClick={inviteFriend}
              className="px-4 py-2 bg-white border border-stone-200 hover:border-stone-400 text-stone-850 hover:bg-stone-50 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm transition-all duration-300 cursor-pointer flex items-center gap-1"
            >
              <span>+ Invite Friend</span>
            </button>
          </div>
        </section>

        {/* Selected Experiences Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-light text-stone-950 mb-8 border-b border-stone-200/40 pb-4">
            Selected Experiences
          </h2>

          {experiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  <ExperienceCard
                    image={exp.image}
                    category={exp.category}
                    title={exp.title}
                    description={exp.description}
                    location={exp.location}
                    price={exp.price}
                  />
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeExperience(exp.id)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors duration-300 cursor-pointer"
                    aria-label="Remove Experience"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-[24px] border border-dashed border-stone-200 p-8">
              <p className="font-sans text-stone-400 font-light text-sm">
                No experiences selected. Go back to Discover to add some.
              </p>
            </div>
          )}
        </section>

      </div>

      {/* Sticky Footer Action Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-2xl border border-stone-200/60 rounded-full px-6 py-3 flex items-center justify-between gap-4 max-w-xl w-[calc(100%-2rem)] z-50">
        
        {/* Cancel */}
        <button 
          className="px-5 py-3 rounded-full hover:bg-stone-50 text-stone-550 hover:text-stone-900 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Cancel
        </button>

        {/* Save Draft */}
        <button 
          className="px-5 py-3 rounded-full hover:bg-stone-50 text-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 border border-stone-100"
        >
          <span>Save Draft</span>
        </button>

        {/* Create Plan */}
        <button 
          onClick={() => navigate('/planning')}
          className="px-6 py-3 rounded-full bg-[#4A6B82] hover:bg-[#3d596d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#4A6B82]/20 cursor-pointer"
        >
          Create Plan
        </button>

      </div>

    </div>
  );
};

export default CreatePlan;
