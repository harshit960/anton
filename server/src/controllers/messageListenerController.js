
const { NewMessage } = require("telegram/events/NewMessage");
const { processIncomingMessage } = require("./processIncomingMsg");
const { client } = require("../config/gramConfig");

let isListening = false;

const startMessageListener = async (req, res) => {
    try {
        if (isListening) {
            return res.status(400).json({
                success: false,
                message: 'Message listener is already running'
            });
        }

        await client.start()
        // Add event handler
        client.addEventHandler(async (event) => {
            const message = event.message;
            console.log("Received a new message:", message.text);
            await processIncomingMessage(event);
        }, new NewMessage({}));

        isListening = true;
        console.log("Listening for incoming messages...");

        res.status(200).json({
            success: true,
            message: 'Message listener started successfully'
        });

    } catch (error) {
        console.error('Error starting message listener:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to start message listener',
            error: error.message
        });
    }
};
const startMessageListenerFn = async () => {
    try {
        if (isListening) {
            return {
                success: false,
                message: 'Message listener is already running'
            };
        }
        await client.start()

        // Add event handler
        client.addEventHandler(async (event) => {
            const message = event.message;
            console.log("Received a new message:", message.text);
            await processIncomingMessage(event);
        }, new NewMessage({}));

        isListening = true;
        console.log("Listening for incoming messages...");

        return {
            success: true,
            message: 'Message listener started successfully'
        };

    } catch (error) {
        console.error('Error starting message listener:', error);
        return {
            success: false,
            message: 'Failed to start message listener',
            error: error.message
        };
    }
};

const stopMessageListener = async (req, res) => {
    try {
        if (!isListening || !client) {
            return res.status(400).json({
                success: false,
                message: 'Message listener is not running'
            });
        }

        await client.disconnect();
        client = null;
        isListening = false;

        res.status(200).json({
            success: true,
            message: 'Message listener stopped successfully'
        });

    } catch (error) {
        console.error('Error stopping message listener:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to stop message listener',
            error: error.message
        });
    }
};

const getListenerStatus = (req, res) => {
    res.status(200).json({
        success: true,
        isListening
    });
};

module.exports = {
    startMessageListener,
    stopMessageListener,
    getListenerStatus,
    startMessageListenerFn
};