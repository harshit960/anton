const express = require('express');
const router = express.Router();
const { 
    startMessageListener, 
    stopMessageListener, 
    getListenerStatus 
} = require('../controllers/messageListenerController');

// POST /api/message-listener/start
router.post('/start', startMessageListener);

// POST /api/message-listener/stop
router.post('/stop', stopMessageListener);

// GET /api/message-listener/status
router.get('/status', getListenerStatus);

module.exports = router; 