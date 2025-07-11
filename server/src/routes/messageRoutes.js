const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/messageController');

// POST /api/messages/send
router.post('/send', sendMessage);

module.exports = router; 