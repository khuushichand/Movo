import React from 'react';
import VoteButton from './VoteButton';

const VotingCard = ({ id, image, title, budget, time, addedBy, votes = { love: 0, maybe: 0, pass: 0 }, userVote, onVote }) => {
  const totalVotes = votes.love + votes.maybe + votes.pass;
  const lovePct = totalVotes > 0 ? Math.round((votes.love / totalVotes) * 100) : 0;
  const maybePct = totalVotes > 0 ? Math.round((votes.maybe / totalVotes) * 100) : 0;
  const passPct = totalVotes > 0 ? Math.round((votes.pass / totalVotes) * 100) : 0;

  return (
    <div className="group relative flex flex-col md:flex-row bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 border border-stone-150/40 p-6 gap-6">
      
      {/* Thumbnail Image */}
      <div className="relative w-full md:w-[180px] h-[135px] rounded-2xl overflow-hidden shrink-0 bg-stone-100 border border-stone-100">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
          />
        )}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Info & Action Block */}
      <div className="flex-grow flex flex-col justify-between">
        
        {/* Top: Details */}
        <div>
          <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400 block mb-1">
            {time} • Added by {addedBy}
          </span>
          <h3 className="font-serif text-lg font-light text-stone-950 leading-snug mb-1 group-hover:text-stone-850 transition-colors">
            {title}
          </h3>
          <span className="text-xs text-[#4A6B82] font-semibold">{budget}</span>
        </div>

        {/* Bottom: Interactive Voting */}
        <div className="mt-6 flex flex-col gap-4">
          
          {/* Buttons Row */}
          <div className="flex flex-wrap gap-2.5">
            <VoteButton emoji="❤️" label="Love it" active={userVote === 'love'} onClick={() => onVote('love')} />
            <VoteButton emoji="🤔" label="Maybe" active={userVote === 'maybe'} onClick={() => onVote('maybe')} />
            <VoteButton emoji="❌" label="Pass" active={userVote === 'pass'} onClick={() => onVote('pass')} />
          </div>

          {/* Results Progress Bars */}
          {totalVotes > 0 && (
            <div className="flex flex-col gap-2.5 border-t border-stone-100 pt-3 animate-fade-in">
              {/* Love progress */}
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700 flex items-center gap-1">
                  <span>❤️ Love it</span>
                  <span className="text-stone-400 font-light">({votes.love})</span>
                </span>
                <span>{lovePct}%</span>
              </div>
              <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#4A6B82] rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${lovePct}%` }}
                />
              </div>

              {/* Maybe progress */}
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700 flex items-center gap-1">
                  <span>🤔 Maybe</span>
                  <span className="text-stone-450 font-light">({votes.maybe})</span>
                </span>
                <span>{maybePct}%</span>
              </div>
              <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#A29B8E] rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${maybePct}%` }}
                />
              </div>

              {/* Pass progress */}
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700 flex items-center gap-1">
                  <span>❌ Pass</span>
                  <span className="text-stone-400 font-light">({votes.pass})</span>
                </span>
                <span>{passPct}%</span>
              </div>
              <div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-stone-300 rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${passPct}%` }}
                />
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default VotingCard;
