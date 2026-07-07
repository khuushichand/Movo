import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import AppError from './utils/AppError.js';
import errorHandler from './middleware/errorHandler.js';
import planRouter from './routes/planRoutes.js';


const app = express();

// Standard middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check endpoint
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Plany API is running',
    version: '1.0.0'
  });
});

// Mount routes
app.use('/api/v1/plans', planRouter);

// Handle unhandled routes (404)
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Centralized Error Handling Middleware
app.use(errorHandler);

export default app;
