import React from 'react';

const VoteButton = ({ emoji, label, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${active ? 'bg-stone-900 border-stone-900 text-white shadow-sm scale-102 font-bold' : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300'}`}
    >
      <span>{emoji}</span>
      <span>{label}</span>
    </button>
  );
};

export default VoteButton;
