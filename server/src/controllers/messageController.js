const { client } = require("../config/gramConfig");
const { Api } = require("telegram");

/**
 * Sends a message using the Telegram client
 * @param {string} peer - The recipient's peer ID
 * @param {string} message - The message to send
 * @param {number} [scheduleDate] - Optional timestamp for scheduled messages
 * @returns {Promise<Object>} - The result from Telegram API
 */

const sendTelegramMessage = async (peer, message,delay) => {
    if (!peer || !message) {
        throw new Error('Peer and message are required');
    }

    try {
        // await client.connect();
        const scheduleDate = Math.floor(Date.now() / 1000) + delay;
        console.log(peer, message);
        let resolvedPeer = peer;
        if (typeof peer === 'string' || typeof peer === 'number') {
            try {
                // Try to get the input entity first
                resolvedPeer = await client.getInputEntity(peer);
            } catch (err) {
                // If direct resolution fails, try to fetch the user entity first
                console.log('Attempting to resolve entity from user ID:', peer);
                const user = await client.invoke(
                    new Api.users.GetUsers({
                        id: [new Api.InputUser({
                            userId: BigInt(peer),
                            accessHash: BigInt(0)
                        })]
                    })
                );

                if (user && user.length > 0) {
                    resolvedPeer = await client.getInputEntity(user[0]);
                } else {
                    throw new Error(`Could not resolve peer: ${peer}`);
                }
            }
        }

        const result = await client.invoke(
            new Api.messages.SendMessage({
                peer: peer,
                message: message.toString(),
                randomId: BigInt(Math.floor(Math.random() * 1000000000)),
                noWebpage: true,
                noforwards: true,
                
                scheduleDate: scheduleDate,
            })
        );

        // await client.disconnect();
        return result;
    } catch (error) {
        console.error('Error sending message:', error);
    }
};

const sendMessage = async (req, res) => {
    try {
        const { peer, message, scheduleDate } = req.body;

        const result = await sendTelegramMessage(peer, message, scheduleDate);

        res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error('Error in sendMessage controller:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message',
            error: error.message
        });
    }
};

// Export both functions
module.exports = {
    sendMessage,
    sendTelegramMessage
}; 