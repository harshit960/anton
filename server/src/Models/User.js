const mongoose = require('mongoose');

/**
 * User Schema for Telegram users
 */
const userSchema = new mongoose.Schema({
  
  userId: {
    type: String,
    required: true,
    unique: true
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }],
  
  lastActiveAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Add index for faster queries
userSchema.index({ userId: 1 });
userSchema.index({ lastActiveAt: -1 });

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;