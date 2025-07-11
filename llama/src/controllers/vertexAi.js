import { GoogleAuth } from 'google-auth-library';
import { GoogleGenAI } from '@google/genai';

const SERVICE_ACCOUNT_PATH = 'wtfai-456904-55296f8cb865.json'; 


// Function to initialize the chat instance
async function initChat(systemPrompt,lastMessages) {
  const contents = lastMessages.map(message => ({
    parts: [{ text: message.text }],
    role: message.role === 'agent' ? 'model' : message.role // convert agent -> model
  }));
  while (contents.length > 0 && contents[0].role !== 'user') {
    contents.shift(); // remove from front
  }
console.log(contents);

  const auth = new GoogleAuth({
    keyFile: SERVICE_ACCOUNT_PATH,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  const ai = new GoogleGenAI({
    authClient: await auth.getClient(),
    vertexai: true,
    project: '710809779131',
    location: 'us-central1',
  });

  // const model = 'projects/710809779131/locations/us-central1/endpoints/271083492316545024';
  const model = 'gemini-2.5-flash-preview-05-20';

  const generationConfig = {
    maxOutputTokens: 8192,
    temperature: 0.8,
    topP: 0.9,
    responseModalities: ["TEXT"],
    safetySettings: [
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'OFF' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'OFF' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'OFF' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'OFF' },
    ],
    systemInstruction: {
      parts: [{ text: systemPrompt || 'Never sound too formal or robotic.' }],
    },
  };

  return ai.chats.create({ model, config: generationConfig, history: contents });
}

/**
 * Generate chat response from Vertex AI
 * @param {string} query - User message
 * @param {string} [systemPrompt] - Optional system-level instruction
 * @returns {Promise<string>} - Final generated response
 */
export async function generateChatResponse(query, systemPrompt,lastMessages) {
  const chat = await initChat(systemPrompt,lastMessages);

  const response = await chat.sendMessageStream({
    message: [{ text: query }],
  });

  let result = '';
  for await (const chunk of response) {
    if (chunk.text) result += chunk.text;
  }

  return result;
}
