const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");
require("dotenv").config();

const apiId = parseInt(process.env.apiId);
const apiHash = process.env.apiHash ; // Use your API Hash

(async () => {
  // Create a new StringSession (this will create an empty session)
  const stringSession = new StringSession("");
  
  console.log("Connecting to Telegram...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  
  await client.start({
    phoneNumber: async () => await input.text("Please enter your phone number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () => await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  
  console.log("Connection successful!");
  
  // Save the session string
  console.log("Your session string is:", client.session.save());
  
  await client.disconnect();
})();