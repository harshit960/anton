require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/mongodb');
const messageRoutes = require('./routes/messageRoutes');
const messageListenerRoutes = require('./routes/messageListenerRoutes');
const { startMessageListenerFn } = require('./controllers/messageListenerController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Message routes
app.use('/api/messages', messageRoutes);

// Message listener routes
app.use('/api/message-listener', messageListenerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/wtfai';

// Connect to MongoDB
// Start the server after successful database connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  connectDB(MONGODB_URI)
    .catch(err => {
      console.error('Failed to connect to MongoDB:', err);
      process.exit(1);
    });
  startMessageListenerFn();
});
