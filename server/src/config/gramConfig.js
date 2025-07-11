const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
require('dotenv').config();

const apiId = parseInt(process.env.apiId) || 0; // Get from https://my.telegram.org
const apiHash = process.env.apiHash || "YOUR_API_HASH_HERE"; // Get from https://my.telegram.org
const stringSession = new StringSession(process.env.stringSession || ""); // Generate using generateSession.js

const client = new TelegramClient(stringSession, apiId, apiHash, {
  autoReconnect: true,
});


const connectToGram = async () => {
  if (!client.connected) {
    await client.connect();
    console.log('Connected to Telegram successfully');
  }
  return client;
};

module.exports = {
  connectToGram, client
};
//   export default {connectToGram}