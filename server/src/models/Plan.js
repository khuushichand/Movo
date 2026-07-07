import mongoose from 'mongoose';

const { Schema } = mongoose;

const planSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'A plan must have a title'],
      trim: true
    },
    date: {
      type: Date,
      required: [true, 'A plan must have a date']
    },
    budget: {
      type: Number,
      default: 0
    },
    location: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    participants: {
      type: [String],
      default: []
    },
    experiences: {
      type: [Object],
      default: []
    },
    status: {
      type: String,
      enum: {
        values: ['draft', 'active', 'completed'],
        message: 'Status must be either draft, active, or completed'
      },
      default: 'draft'
    }
  },
  {
    timestamps: true
  }
);

const Plan = mongoose.model('Plan', planSchema);

export default Plan;
