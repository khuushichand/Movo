import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard';
import FriendChip from '../components/FriendChip';
import InviteFriendsModal from '../components/InviteFriendsModal';
import VotingCard from '../components/VotingCard';
import GroupProgress from '../components/GroupProgress';
import VoteSummary from '../components/VoteSummary';
import AIRecommendationCard from '../components/AIRecommendationCard';

const INITIAL_ACTIVITIES = [
  {
    id: "morning-coffee",
    title: "Morning Coffee at The Conservatory",
    time: "9:30 AM",
    addedBy: "Khuushi",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    location: "Borivali West",
    budget: "₹250 pp",
    votes: { love: 3, maybe: 1, pass: 0 },
    userVote: null,
  },
  {
    id: "movie-night",
    title: "Indie Cinema Night at Le Rêve",
    time: "6:00 PM",
    addedBy: "Ananya",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    location: "Bandra West",
    budget: "₹450 pp",
    votes: { love: 3, maybe: 1, pass: 0 },
    userVote: null,
  },
  {
    id: "italian-dinner",
    title: "Italian Dinner at Osteria",
    time: "9:00 PM",
    addedBy: "Vaish",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80",
    location: "Juhu",
    budget: "₹900 pp",
    votes: { love: 2, maybe: 1, pass: 1 },
    userVote: null,
  },
];

const PlanningSession = () => {
  const navigate = useNavigate();
  const [friends, setFriends] = useState(["Khuushi", "Vaish", "Ananya"]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);

  const handleToggleFriend = (name) => {
    if (friends.includes(name)) {
      setFriends(friends.filter(f => f !== name));
    } else {
      setFriends([...friends, name]);
    }
  };

  const handleVote = (activityId, type) => {
    setActivities((prev) =>
      prev.map((act) => {
        if (act.id === activityId) {
          if (act.userVote === type) return act; // Toggle/ignore if identical
          
          const newVotes = { ...act.votes };
          if (act.userVote) {
            newVotes[act.userVote] = Math.max(0, newVotes[act.userVote] - 1);
          }
          newVotes[type] += 1;
          
          return {
            ...act,
            userVote: type,
            votes: newVotes,
          };
        }
        return act;
      })
    );
  };

  // Calculate Compatibility Match (Average of highest agreement per activity)
  const totalAgreed = activities.reduce((acc, act) => {
    const total = act.votes.love + act.votes.maybe + act.votes.pass;
    if (total === 0) return acc;
    const max = Math.max(act.votes.love, act.votes.maybe, act.votes.pass);
    return acc + (max / total);
  }, 0);
  const compatibilityScore = Math.round((totalAgreed / activities.length) * 100) || 0;

  // Calculate Current Winner (weighted score: love = 3, maybe = 1, pass = -2)
  const getWinnerName = () => {
    let bestAct = null;
    let maxVal = -Infinity;
    activities.forEach((act) => {
      const score = act.votes.love * 3 + act.votes.maybe * 1 - act.votes.pass * 2;
      if (score > maxVal) {
        maxVal = score;
        bestAct = act;
      }
    });
    return bestAct ? bestAct.title : "No votes yet";
  };
  const currentWinner = getWinnerName();

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-stone-900 select-none pb-32">
      {/* Reusable Navbar */}
      <Navbar />

      <div className="max-w-6xl mx-auto pt-28 px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-stone-200/50">
          <div>
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-stone-400 block mb-1">
              Group Collaboration
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-light text-stone-950 tracking-tight">
              Saturday Plan
            </h1>
            <span className="font-sans text-stone-500 font-light text-sm md:text-base mt-1 block">
              12 July
            </span>
          </div>
          
          {/* Participants */}
          <div className="flex flex-col md:items-end gap-2.5">
            <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400">
              Participants ({friends.length})
            </span>
            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              {friends.map((friend) => (
                <FriendChip 
                  key={friend} 
                  name={friend} 
                  onRemove={() => handleToggleFriend(friend)} 
                />
              ))}
              <button 
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-xs font-semibold text-stone-750 transition-colors shadow-sm cursor-pointer flex items-center gap-1"
              >
                <span>+ Invite Friend</span>
              </button>
            </div>
          </div>
        </div>

        {/* Today's Ideas Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-light text-stone-950 mb-8 border-b border-stone-200/40 pb-4">
            Today's Ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((idea) => (
              <VotingCard
                key={idea.id}
                image={idea.image}
                title={idea.title}
                budget={idea.budget}
                time={idea.time}
                addedBy={idea.addedBy}
                votes={idea.votes}
                userVote={idea.userVote}
                onVote={(type) => handleVote(idea.id, type)}
              />
            ))}
          </div>
        </section>

        {/* Group Decision Section */}
        <section className="mb-8">
          <GroupProgress score={compatibilityScore} />
        </section>

        {/* Winner Summary Section */}
        <VoteSummary winnerName={currentWinner} />

        {/* AI Planner Section */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-light text-stone-950 mb-8 border-b border-stone-200/40 pb-4">
            AI Planner Recommendation
          </h2>
          <AIRecommendationCard 
            onAccept={() => navigate('/final-itinerary')}
            onRegenerate={() => {}}
            onEdit={() => alert("Manual editing enabled.")}
          />
        </section>

      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-2xl border border-stone-200/60 rounded-full px-6 py-3 flex items-center justify-between gap-4 max-w-xl w-[calc(100%-2rem)] z-50">
        
        {/* Add Experience */}
        <button 
          className="px-5 py-3 rounded-full hover:bg-stone-50 text-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 border border-stone-100"
        >
          <span>+ Add Experience</span>
        </button>

        {/* Start Voting */}
        <button 
          className="px-5 py-3 rounded-full hover:bg-stone-50 text-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 border border-stone-100"
        >
          <span>Start Voting</span>
        </button>

        {/* Finalize Plan */}
        <button 
          onClick={() => navigate('/final-itinerary')}
          className="px-6 py-3 rounded-full bg-[#4A6B82] hover:bg-[#3d596d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#4A6B82]/20 cursor-pointer"
        >
          Finalize Plan
        </button>

      </div>

      {/* Reusable Modal */}
      <InviteFriendsModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        invitedFriends={friends}
        onToggleFriend={handleToggleFriend}
      />

    </div>
  );
};

export default PlanningSession;

