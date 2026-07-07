import dotenv from 'dotenv';
import app from './app.js';
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();
console.log(process.env.MONGODB_URI);
const PORT = process.env.PORT || 5000;
await connectDB();
const server = app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
