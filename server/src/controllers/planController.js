import Plan from '../models/Plan.js';
import AppError from '../utils/AppError.js';

/**
 * Create a new collaborative plan
 * @route POST /api/v1/plans
 */
export const createPlan = async (req, res, next) => {
  try {
    const { title, date, budget, location, description, participants, experiences, status } = req.body;

    // Create the plan using mongoose model
    const newPlan = await Plan.create({
      title,
      date,
      budget,
      location,
      description,
      participants,
      experiences,
      status
    });

    res.status(201).json({
      success: true,
      data: newPlan
    });
  } catch (error) {
    // Propagate the error to the centralized error handler middleware
    next(error);
  }
};
