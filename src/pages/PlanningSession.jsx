import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard';
import FriendChip from '../components/FriendChip';
import InviteFriendsModal from '../components/InviteFriendsModal';
import VotingCard from '../components/VotingCard';
import GroupProgress from '../components/GroupProgress';
import VoteSummary from '../components/VoteSummary';
import AIRecommendationCard from '../components/AIRecommendationCard';

const PlanningSession = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [friends, setFriends] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activities, setActivities] = useState([]);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError('No plan ID specified.');
      setLoading(false);
      return;
    }

    const fetchPlan = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:5000/api/v1/plans/${id}`);
        const resData = await response.json();

        if (!response.ok || !resData.success) {
          throw new Error(resData.message || 'Plan not found.');
        }

        setPlan(resData.data);
        setFriends(resData.data.participants || []);

        const mapped = (resData.data.experiences || []).map((exp, idx) => ({
          id: exp.id || `exp-${idx}`,
          title: exp.title,
          time: exp.time || "Flexible",
          addedBy: exp.addedBy || "Group",
          image: exp.image || "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
          location: exp.location || resData.data.location,
          budget: exp.price || `₹${resData.data.budget} pp`,
          votes: exp.votes || { love: 1, maybe: 0, pass: 0 },
          userVote: exp.userVote || null
        }));

        setActivities(mapped);
      } catch (err) {
        setError(err.message || 'Failed to fetch plan.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [id]);

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
          if (act.userVote === type) return act;
          
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

  const totalAgreed = activities.reduce((acc, act) => {
    const total = act.votes.love + act.votes.maybe + act.votes.pass;
    if (total === 0) return acc;
    const max = Math.max(act.votes.love, act.votes.maybe, act.votes.pass);
    return acc + (max / total);
  }, 0);
  const compatibilityScore = activities.length > 0 ? Math.round((totalAgreed / activities.length) * 100) : 0;

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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F6F2] text-stone-900 flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-stone-950 animate-pulse">Loading your collaborative plan...</p>
        </div>
      </div>
    );
  }

  if (error || !plan) {
    return (
      <div className="min-h-screen bg-[#F8F6F2] text-stone-900 flex items-center justify-center">
        <div className="text-center p-8 bg-white border border-stone-200 rounded-[28px] max-w-md shadow-sm">
          <h2 className="font-serif text-3xl font-light text-stone-950 mb-4">Plan Not Found</h2>
          <p className="font-sans text-stone-500 font-light text-sm mb-6">
            We couldn't retrieve the collaborative planning session. It may have been deleted or the link is invalid.
          </p>
          <button 
            onClick={() => navigate('/discover')}
            className="px-6 py-3 rounded-full bg-[#4A6B82] hover:bg-[#3d596d] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Explore Experiences
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-stone-900 select-none pb-32">
      <Navbar />

      <div className="max-w-6xl mx-auto pt-28 px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-stone-200/50">
          <div>
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold text-stone-400 block mb-1">
              Group Collaboration • {plan.location}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-light text-stone-950 tracking-tight">
              {plan.title}
            </h1>
            <span className="font-sans text-stone-500 font-light text-sm md:text-base mt-1 block">
              {new Date(plan.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} • Budget: ₹{plan.budget}
            </span>
          </div>
          
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

        <section className="mb-16">
          <h2 className="font-serif text-2xl font-light text-stone-950 mb-8 border-b border-stone-200/40 pb-4">
            Today's Ideas
          </h2>
          {activities.length > 0 ? (
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
          ) : (
            <div className="text-center py-12 bg-white rounded-[24px] border border-dashed border-stone-200 p-8">
              <p className="font-sans text-stone-400 font-light text-sm">
                No experiences selected for this plan.
              </p>
            </div>
          )}
        </section>

        {activities.length > 0 && (
          <>
            <section className="mb-8">
              <GroupProgress score={compatibilityScore} />
            </section>

            <VoteSummary winnerName={currentWinner} />
          </>
        )}

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

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-2xl border border-stone-200/60 rounded-full px-6 py-3 flex items-center justify-between gap-4 max-w-xl w-[calc(100%-2rem)] z-50">
        
        <button 
          onClick={() => navigate('/discover')}
          className="px-5 py-3 rounded-full hover:bg-stone-50 text-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1 border border-stone-100"
        >
          <span>+ Add Experience</span>
        </button>

        <button 
          onClick={() => navigate('/final-itinerary')}
          className="px-6 py-3 rounded-full bg-[#4A6B82] hover:bg-[#3d596d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#4A6B82]/20 cursor-pointer"
        >
          View Final Itinerary
        </button>

      </div>

      <InviteFriendsModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        friends={friends} 
        onToggleFriend={handleToggleFriend}
      />

    </div>
  );
};

export default PlanningSession;
