const API_BASE_URL = 'http://localhost:5000/api/v1';

/**
 * Handle HTTP response and consistently throw formatted errors
 */
const handleResponse = async (response) => {
  let data;
  try {
    data = await response.json();
  } catch (err) {
    throw new Error('Invalid JSON response from server');
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'An error occurred while calling the API');
  }
  return data;
};

/**
 * Create a new collaborative plan
 */
export const createPlan = async (planData) => {
  const response = await fetch(`${API_BASE_URL}/plans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(planData),
  });
  return handleResponse(response);
};

/**
 * Get all plans sorted by newest first
 */
export const getPlans = async () => {
  const response = await fetch(`${API_BASE_URL}/plans`);
  return handleResponse(response);
};

/**
 * Get a specific plan by ID
 */
export const getPlanById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/plans/${id}`);
  return handleResponse(response);
};

/**
 * Update a specific plan by ID
 */
export const updatePlan = async (id, planData) => {
  const response = await fetch(`${API_BASE_URL}/plans/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(planData),
  });
  return handleResponse(response);
};

/**
 * Delete a specific plan by ID
 */
export const deletePlan = async (id) => {
  const response = await fetch(`${API_BASE_URL}/plans/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};
