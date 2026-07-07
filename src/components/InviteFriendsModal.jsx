import React, { useState } from 'react';
import FriendAvatar from './FriendAvatar';

const RECENT_FRIENDS = [
  { id: "ananya", name: "Ananya" },
  { id: "vaish", name: "Vaish" },
  { id: "rohan", name: "Rohan" },
];

const SUGGESTED_FRIENDS = [
  { id: "dev", name: "Dev" },
  { id: "priya", name: "Priya" },
  { id: "kabir", name: "Kabir" },
];

const InviteFriendsModal = ({ isOpen, onClose, invitedFriends = [], onToggleFriend }) => {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [sentMessage, setSentMessage] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText("https://plany.co/join/weekend-escape");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (email.trim()) {
      if (!invitedFriends.includes(email.trim())) {
        onToggleFriend(email.trim());
      }
      setSentMessage(true);
      setEmail('');
      setTimeout(() => setSentMessage(false), 3000);
    }
  };

  const isInvited = (name) => invitedFriends.includes(name);

  const filteredRecents = RECENT_FRIENDS.filter(f => 
    f.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const filteredSuggested = SUGGESTED_FRIENDS.filter(f => 
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#F8F6F2] rounded-[32px] w-full max-w-lg p-8 md:p-10 border border-stone-200/50 shadow-2xl flex flex-col gap-6 overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.8} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-stone-950 tracking-tight mb-2">
            Invite Friends
          </h2>
          <p className="font-sans text-xs md:text-sm text-stone-500 font-light leading-relaxed">
            Collaborate together to build the perfect weekend plan.
          </p>
        </div>

        {/* Search Friend */}
        <div className="flex flex-col gap-2">
          <label className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
            Search Friends
          </label>
          <div className="relative">
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name..." 
              className="w-full bg-white text-stone-900 placeholder-stone-400 font-light text-xs px-5 py-3.5 rounded-xl border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Recently Contacted */}
        {filteredRecents.length > 0 && (
          <div className="flex flex-col gap-3">
            <label className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
              Recently Contacted
            </label>
            <div className="flex flex-col gap-2">
              {filteredRecents.map((friend) => (
                <div 
                  key={friend.id} 
                  className="flex items-center justify-between bg-white border border-stone-150/50 rounded-xl p-3 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <FriendAvatar name={friend.name} size="w-8 h-8" />
                    <span className="font-sans text-xs font-semibold text-stone-750">{friend.name}</span>
                  </div>
                  <button 
                    onClick={() => onToggleFriend(friend.name)}
                    className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer ${isInvited(friend.name) ? 'bg-stone-900 text-white' : 'bg-[#4A6B82]/10 text-[#4A6B82] hover:bg-[#4A6B82]/20'}`}
                  >
                    {isInvited(friend.name) ? 'Added' : '+ Invite'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggested Friends */}
        {filteredSuggested.length > 0 && (
          <div className="flex flex-col gap-3">
            <label className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
              Suggested Friends
            </label>
            <div className="flex flex-col gap-2">
              {filteredSuggested.map((friend) => (
                <div 
                  key={friend.id} 
                  className="flex items-center justify-between bg-white border border-stone-150/50 rounded-xl p-3 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <FriendAvatar name={friend.name} size="w-8 h-8" />
                    <span className="font-sans text-xs font-semibold text-stone-750">{friend.name}</span>
                  </div>
                  <button 
                    onClick={() => onToggleFriend(friend.name)}
                    className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer ${isInvited(friend.name) ? 'bg-stone-900 text-white' : 'bg-[#4A6B82]/10 text-[#4A6B82] hover:bg-[#4A6B82]/20'}`}
                  >
                    {isInvited(friend.name) ? 'Added' : '+ Invite'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Invite via Email */}
        <form onSubmit={handleSendEmail} className="flex flex-col gap-2">
          <label className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
            Invite via Email
          </label>
          <div className="flex gap-2">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address..." 
              required
              className="flex-grow bg-white text-stone-900 placeholder-stone-400 font-light text-xs px-5 py-3.5 rounded-xl border border-stone-200/60 focus:outline-none focus:border-stone-400 transition-colors duration-300"
            />
            <button 
              type="submit"
              className="px-5 py-3.5 bg-[#4A6B82] hover:bg-[#3d596d] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer shrink-0"
            >
              Send Invite
            </button>
          </div>
          {sentMessage && (
            <span className="text-[10px] text-[#4A6B82] font-semibold animate-pulse">
              ✓ Invite link sent to inbox and added to group
            </span>
          )}
        </form>

        {/* Share Invite Link */}
        <div className="flex flex-col gap-2">
          <label className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
            Share Invite Link
          </label>
          <div className="flex items-center justify-between bg-white border border-stone-200/65 rounded-xl px-5 py-3 text-xs text-stone-600 font-light gap-4">
            <span className="truncate select-all">https://plany.co/join/weekend-escape</span>
            <button 
              onClick={handleCopy}
              className={`shrink-0 text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${copied ? 'text-green-600' : 'text-[#4A6B82] hover:text-[#3d596d]'}`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InviteFriendsModal;
