// For ENVironment Variables
import dotenv from 'dotenv';
dotenv.config();

// Express
import express from 'express';
const app = express();

// Terminal Colors
import colors from 'colors';

// MongoDB Connection
import connectDB from './config/db.js';
connectDB();

// Middlewares
app.use(express.json());

// Routes
import exampleRoute from './routes/example.routes.js';
app.use('/api/examples', exampleRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server Status: Connected...'.bold);
  console.log(`@http://localhost:${PORT}/`.cyan.bold);
});
