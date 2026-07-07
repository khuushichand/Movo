import express from 'express';
import { createPlan } from '../controllers/planController.js';

const router = express.Router();

// Define route (maps to POST /api/v1/plans when mounted)
router.post('/', createPlan);

export default router;
