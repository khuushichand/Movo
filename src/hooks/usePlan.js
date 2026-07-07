import { useState, useEffect, useCallback } from 'react';
import { getPlanById } from '../services/api';

/**
 * Custom React hook to fetch and manage a single plan's state
 * @param {string} id - The MongoDB ObjectId of the plan
 */
const usePlan = (id) => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlan = useCallback(async () => {
    if (!id) {
      setError('No plan ID specified.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await getPlanById(id);
      setPlan(res.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch plan.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPlan();
  }, [fetchPlan]);

  return {
    plan,
    loading,
    error,
    refresh: fetchPlan
  };
};

export default usePlan;
