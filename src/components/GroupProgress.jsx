import React from 'react';

const GroupProgress = ({ score = 87 }) => {
  return (
    <div className="bg-white border border-stone-150/40 rounded-[28px] p-8 md:p-10 shadow-sm flex flex-col gap-4">
      <h3 className="font-serif text-xl font-light text-stone-950">Group Decision</h3>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
            Group Match
          </span>
          <span className="font-serif text-3xl font-light text-[#4A6B82]">
            {score}%
          </span>
        </div>
        <div className="flex-1 max-w-md w-full">
          <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <span>Compatibility Score</span>
            <span>{score}%</span>
          </div>
          <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#4A6B82] rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${score}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupProgress;
