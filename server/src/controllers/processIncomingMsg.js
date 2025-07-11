const { get } = require('mongoose');
const Message = require('../Models/Message');
const User = require('../Models/User');
const { sendTelegramMessage } = require('./messageController');

const saveToMongo = async (messageData) => {
    try {
        const message = new Message(messageData);
        const res = await message.save();
        console.log(res._id);
        message.processed = true;
        message.processedAt = new Date();
        await message.save();
        var user = await User.findOne({ userId: messageData.senderId });
        if (!user) {
            user = new User({ userId: messageData.senderId });
            await user.save();
            user.messages.push(res._id);
            await user.save();
        }
        else {
            user.messages.push(res._id);
            await user.save();
        }

        console.log(`Message ${messageData.messageId} stored in database`);
        // console.log(JSON.stringify(await User.find({}).populate("messages")));
    }
    catch (error) {
        console.error('Error saving to MongoDB:', error);
        throw error;
    }
}

/**
 * Process incoming Telegram messages and store them in MongoDB
 * @param {Object} e - The Telegram message event
 */
const processIncomingMessage = async (e) => {
    try {

        // Extract message from the update

        const msg = e.message || e.originalUpdate;

        // Extract message data
        const messageData = {
            messageId: msg.id.toString(),
            senderId: msg.fromId?.userId?.toString() || msg.userId?.toString() || Math.random().toString(36).substr(2, 9),
            chatId: msg.peerId?.userId?.toString() || msg.userId?.toString() || Math.random().toString(36).substr(2, 9),
            text: msg.message || '',
            mediaType: 'none',
            isCommand: false,
            command: null,
            isForwarded: !!msg.fwdFrom,
            forwardedFrom: msg.fwdFrom?.fromName || null,
            processed: false,
            processedAt: null,
            createdAt: new Date(msg.date * 1000) // Convert Unix timestamp to Date
        };
        const lastMessages = await User.find({ userId: messageData.senderId })
            .sort({ createdAt: -1 }).limit(1).populate({path:"messages",options: { sort: { createdAt: -1 }, limit: 10 }})
            ;
        console.log(lastMessages);
        
        // const lastMessages = []
        
        try {
            const res = await fetch(process.env.LLAMA_URL + '/api/query', {
                method: 'POST',
                body: JSON.stringify({
                    data: messageData,
                    lastMessages: lastMessages[0].messages || [],
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            console.log(data);
            var delay = 0
            for (const item of data.response) {
                const AgentmessageData = {
                    messageId: Math.random().toString(36).substr(2, 9), // Generate a random ID
                    senderId: msg.fromId?.userId?.toString() || msg.userId?.toString() || Math.random().toString(36).substr(2, 9),
                    chatId: msg.peerId?.userId?.toString() || msg.userId?.toString() || Math.random().toString(36).substr(2, 9),
                    text: item || '',
                    mediaType: 'none',
                    isCommand: false,
                    command: null,
                    isForwarded: !!msg.fwdFrom,
                    forwardedFrom: msg.fwdFrom?.fromName || null,
                    processed: false,
                    role: "agent",
                    processedAt: null,
                    // createdAt: new Date(msg.date * 1000) // Convert Unix timestamp to Date
                };
                await saveToMongo(AgentmessageData);
                await sendTelegramMessage(messageData.chatId, item, delay);
            
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
        // Check if message is a command
        if (messageData.text.startsWith('/')) {
            messageData.isCommand = true;
            messageData.command = messageData.text.split(' ')[0].toLowerCase();
        }

        // Check if message has media
        if (msg.media) {
            if (msg.media.photo) messageData.mediaType = 'photo';
            else if (msg.media.video) messageData.mediaType = 'video';
            else if (msg.media.document) messageData.mediaType = 'document';
            else if (msg.media.audio) messageData.mediaType = 'audio';
            else if (msg.media.voice) messageData.mediaType = 'voice';
            else if (msg.media.sticker) messageData.mediaType = 'sticker';
        }
        // Mark message as processed

        // Store message in MongoDB
        if (messageData.senderId == "1378915574") {
            messageData.role = "agent"
        }
        await saveToMongo(messageData);



        // return message;
    } catch (error) {

        console.error('Error processing message:', error);
        throw error;
    }
};

module.exports = { processIncomingMessage };
