import Plan from '../models/Plan.js';
import AppError from '../utils/AppError.js';

/**
 * Create a new collaborative plan
 * @route POST /api/v1/plans
 */
export const createPlan = async (req, res, next) => {
  try {
    const { title, date, budget, location, description, participants, experiences, status } = req.body;

    // Validate required fields
    if (!title || typeof title !== 'string' || !title.trim()) {
      return next(new AppError('Title is a required string and cannot be empty.', 400));
    }

    if (!location || typeof location !== 'string' || !location.trim()) {
      return next(new AppError('Location is a required string and cannot be empty.', 400));
    }

    if (!date) {
      return next(new AppError('Date is required.', 400));
    }

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
    // Handle Mongoose Validation Error
    if (error.name === 'ValidationError') {
      const message = Object.values(error.errors).map(val => val.message).join(', ');
      return next(new AppError(`Validation Error: ${message}`, 400));
    }

    // Handle Mongoose Cast Error (e.g. invalid Date format)
    if (error.name === 'CastError') {
      return next(new AppError(`Invalid value for ${error.path}: ${error.value}`, 400));
    }

    // Propagate the error to the centralized error handler middleware
    next(error);
  }
};

/**
 * Get all collaborative plans
 * @route GET /api/v1/plans
 */
export const getPlans = async (req, res, next) => {
  try {
    const plans = await Plan.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: plans.length,
      data: plans
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a specific collaborative plan by ID
 * @route GET /api/v1/plans/:id
 */
export const getPlanById = async (req, res, next) => {
  try {
    const plan = await Plan.findById(req.params.id);

    if (!plan) {
      return next(new AppError('No plan found with that ID', 404));
    }

    res.status(200).json({
      success: true,
      data: plan
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return next(new AppError(`Invalid plan ID format: ${req.params.id}`, 400));
    }
    next(error);
  }
};

/**
 * Update a specific collaborative plan by ID
 * @route PATCH /api/v1/plans/:id
 */
export const updatePlan = async (req, res, next) => {
  try {
    const { title, description, location, date, budget, participants, status } = req.body;

    const updates = {};
    if (title !== undefined) updates.title = title;
    if (description !== undefined) updates.description = description;
    if (location !== undefined) updates.location = location;
    if (date !== undefined) updates.date = date;
    if (budget !== undefined) updates.budget = budget;
    if (participants !== undefined) updates.participants = participants;
    if (status !== undefined) updates.status = status;

    const updatedPlan = await Plan.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        returnDocument: 'after',
        runValidators: true
      }
    );

    if (!updatedPlan) {
      return next(new AppError('No plan found with that ID', 404));
    }

    res.status(200).json({
      success: true,
      data: updatedPlan
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const message = Object.values(error.errors).map(val => val.message).join(', ');
      return next(new AppError(`Validation Error: ${message}`, 400));
    }

    if (error.name === 'CastError') {
      return next(new AppError(`Invalid plan ID format: ${req.params.id}`, 400));
    }
    next(error);
  }
};

/**
 * Delete a specific collaborative plan by ID
 * @route DELETE /api/v1/plans/:id
 */
export const deletePlan = async (req, res, next) => {
  try {
    const deletedPlan = await Plan.findByIdAndDelete(req.params.id);

    if (!deletedPlan) {
      return next(new AppError('No plan found with that ID', 404));
    }

    res.status(200).json({
      success: true,
      message: 'Plan deleted successfully'
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return next(new AppError(`Invalid plan ID format: ${req.params.id}`, 400));
    }
    next(error);
  }
};





