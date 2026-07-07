import React from 'react';

const VoteSummary = ({ winnerName, reason = "Highest voted activity" }) => {
  return (
    <div className="bg-white border border-stone-150/40 rounded-[28px] p-8 shadow-sm flex items-center justify-between gap-6 animate-fade-in mb-16">
      <div>
        <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
          Current Winner
        </span>
        <span className="font-serif text-2xl font-light text-[#4A6B82] leading-snug">
          {winnerName || "No votes yet"}
        </span>
      </div>
      <div className="text-right shrink-0">
        <span className="inline-block bg-[#4A6B82]/10 text-[#4A6B82] text-[10px] uppercase tracking-widest font-bold px-3.5 py-2 rounded-full border border-[#4A6B82]/10">
          {reason}
        </span>
      </div>
    </div>
  );
};

export default VoteSummary;
