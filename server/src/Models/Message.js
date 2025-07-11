const mongoose = require('mongoose');

/**
 * Message Schema for storing Telegram messages
 */
const messageSchema = new mongoose.Schema({
  messageId: {
    type: String,
    required: true,
    unique: true
  },
  senderId: {
    type: String,
    required: true
  },
  chatId: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  },
  mediaType: {
    type: String,
    enum: ['none', 'photo', 'video', 'document', 'audio', 'voice', 'sticker'],
    default: 'none'
  },
  isCommand: {
    type: Boolean,
    default: false
  },
  command: {
    type: String,
    default: null
  },
  isForwarded: {
    type: Boolean,
    default: false
  },
  forwardedFrom: {
    type: String,
    default: null
  },
  processed: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['user', 'agent'],
    default: 'user'
  },
  processedAt: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create indexes for faster queries
messageSchema.index({ senderId: 1, createdAt: -1 });
messageSchema.index({ chatId: 1, createdAt: -1 });
messageSchema.index({ messageId: 1 });

// Create a model from the schema
const Message = mongoose.model('Message', messageSchema);

module.exports = Message; 