const mongoose = require('mongoose');

/**
 * MongoDB connection options
 */

/**
 * Connect to MongoDB
 * @param {string} uri - MongoDB connection URI
 * @returns {Promise} - Resolves when connected to MongoDB
 */
const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });
    
    // Handle application termination
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed through app termination');
      process.exit(0);
    });
    
    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

module.exports = {
  connectDB
}; 