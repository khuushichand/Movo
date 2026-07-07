import React from 'react';
import FriendAvatar from './FriendAvatar';

const FriendChip = ({ name, image, onRemove }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-150 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm animate-fade-in group hover:bg-stone-100 transition-colors duration-300">
      <FriendAvatar name={name} image={image} size="w-6 h-6" />
      <span className="font-sans text-[10px] text-stone-700 tracking-wider font-semibold">{name}</span>
      {onRemove && (
        <button 
          onClick={onRemove}
          className="w-4 h-4 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-200/50 transition-all duration-300 cursor-pointer ml-1"
          aria-label={`Remove ${name}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-2.5 h-2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default FriendChip;
