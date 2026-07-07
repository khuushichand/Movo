import React, { useState } from 'react';
import InsightBadge from './InsightBadge';
import TimelinePreview from './TimelinePreview';
import BudgetBreakdown from './BudgetBreakdown';

const DEFAULT_TIMELINE = [
  { time: "5:30 PM", title: "Coffee at Third Wave Coffee", subtitle: "Start with hand-brewed coffee and dynamic planning chats", icon: "☕" },
  { time: "7:00 PM", title: "Silent Cinema Screening", subtitle: "Watch the latest indie selections at Le Rêve", icon: "🎬" },
  { time: "9:30 PM", title: "Warm Dinner at Osteria", subtitle: "Cozy fireside Italian pizzas & pastas to close the evening", icon: "🍝" }
];

const DEFAULT_BUDGET = [
  { label: "Third Wave Coffee", cost: 250 },
  { label: "Cinema Ticket", cost: 450 },
  { label: "Italian Dinner", cost: 800 }
];

const AIRecommendationCard = ({ onAccept, onRegenerate, onEdit }) => {
  const [regenerating, setRegenerating] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleRegenerate = () => {
    setRegenerating(true);
    setTimeout(() => {
      setRegenerating(false);
      if (onRegenerate) onRegenerate();
    }, 800);
  };

  const handleAccept = () => {
    setAccepted(true);
    if (onAccept) onAccept();
  };

  return (
    <div className="bg-white border border-stone-150/40 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col gap-8 select-none relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-stone-100 pb-6">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-2xl bg-[#4A6B82]/10 flex items-center justify-center text-xl shrink-0 text-[#4A6B82]">
            ✨
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4A6B82] block mb-1.5">
              AI Recommendation
            </span>
            <h3 className="font-serif text-xl font-light text-stone-900 max-w-lg leading-relaxed">
              "Because everyone preferred indoor activities, has a budget under ₹1000, and is free after 5 PM..."
            </h3>
          </div>
        </div>
        
        {/* Action Triggers */}
        <div className="flex items-center gap-2 md:self-end">
          <button 
            onClick={handleRegenerate}
            disabled={regenerating}
            className="px-4 py-2 border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 rounded-full text-xs font-semibold uppercase tracking-wider text-stone-600 transition duration-300 cursor-pointer disabled:opacity-40"
          >
            {regenerating ? 'Regenerating...' : 'Regenerate'}
          </button>
          <button 
            onClick={onEdit}
            className="px-4 py-2 border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 rounded-full text-xs font-semibold uppercase tracking-wider text-stone-600 transition duration-300 cursor-pointer"
          >
            Edit Manually
          </button>
        </div>
      </div>

      {/* Metadata Badges */}
      <div className="flex flex-wrap gap-3">
        <InsightBadge icon="🎯" label="AI Confidence" value="94%" />
        <InsightBadge icon="🚗" label="Travel Time" value="25 mins" />
        <InsightBadge icon="⛅" label="Weather" value="Cozy & Cool 24°C" />
      </div>

      {/* Dynamic Body grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Timeline Flow */}
        <div className={`transition-opacity duration-300 ${regenerating ? 'opacity-30' : 'opacity-100'}`}>
          <TimelinePreview events={DEFAULT_TIMELINE} />
        </div>

        {/* Right: Budget Breakdown */}
        <div className={`transition-opacity duration-300 ${regenerating ? 'opacity-30' : 'opacity-100'}`}>
          <BudgetBreakdown items={DEFAULT_BUDGET} />
        </div>
      </div>

      {/* Footer Accept Trigger */}
      <div className="border-t border-stone-100 pt-6 flex items-center justify-between flex-wrap gap-4">
        <p className="font-sans text-xs text-stone-400 font-light max-w-md">
          *This recommendation flows continuously in time and minimizes travel overheads between spots.
        </p>
        <button 
          onClick={handleAccept}
          disabled={accepted}
          className={`px-6 py-3 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer ${accepted ? 'bg-green-600 text-white shadow-none' : 'bg-[#4A6B82] hover:bg-[#3d596d] text-white shadow-[#4A6B82]/20'}`}
        >
          {accepted ? '✓ Plan Accepted' : 'Accept Plan'}
        </button>
      </div>

    </div>
  );
};

export default AIRecommendationCard;
