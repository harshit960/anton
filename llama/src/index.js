import express from 'express';
import cors from 'cors';
import dotenv, { config } from 'dotenv';
import llamaRoutes from './routes/llamaRoutes.js';
import bodyParser from 'body-parser';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Llama API is running' });
});

// API routes
app.use('/api/', llamaRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Llama API server running on port ${PORT}`);
});
