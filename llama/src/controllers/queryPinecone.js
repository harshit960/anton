import { Pinecone } from '@pinecone-database/pinecone';
import createEmbeddingModule from './createEmbedding.js';
import storePineconeModule from '../controllers/storePinecone.js';
import createPrompt from './createPrompt.js';
import dotenv from 'dotenv';
import queryEngineModule from './queryEngine.js';
import { formatDistanceToNow } from "date-fns";
dotenv.config();
const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
});
const pineconeIndex = pc.index('quickstart');
// const data = {
//     messageId: msg.id.toString(),
//     senderId: msg.fromId?.userId?.toString() || msg.userId?.toString(),
//     chatId: msg.peerId?.userId?.toString() || msg.userId?.toString(),
//     text: msg.message || '',
//     mediaType: 'none',
//     isCommand: false,
//     command: null,
//     isForwarded: !!msg.fwdFrom,
//     forwardedFrom: msg.fwdFrom?.fromName || null,
//     processed: false,
//     processedAt: null,
//     createdAt: new Date(msg.date * 1000) // Convert Unix timestamp to Date
// };

const queryPinecone = async (req, res) => {
    try {

        const data = req.body.data;
        const lastMessages = req.body.lastMessages.slice(0, 10);
        console.log("req received");
        // Create embedding for the new message
        const index = await createEmbeddingModule.createEmbeddingFn({ text: data.text, id: data.messageId });
        // Store the new message in Pinecone
        const res2 = await storePineconeModule.storePineconeFn(index, data, data.senderId);

        // Create a RAG prompt using the last messages and the new message
        const ragPrompt = await createPrompt.createRagPrompt(lastMessages, data.text, index);
        const ragIndex = await createEmbeddingModule.createEmbeddingFn({ text: ragPrompt, id: data.messageId });
        const aiPreference = await pineconeIndex.namespace("sample").query({
            topK: 3,
            vector: Object.values(ragIndex.vectorStores.TEXT.data.embeddingDict)[0],
            includeValues: false,
            includeMetadata: true,
            // filter: { genre: { '$eq': 'action' }}
        });
        const personal = await pineconeIndex.namespace("personal").query({
            topK: 10,
            vector: Object.values(ragIndex.vectorStores.TEXT.data.embeddingDict)[0],
            includeValues: false,
            includeMetadata: true,
            // filter: { genre: { '$eq': 'action' }}
        });
        const topK = await pineconeIndex.namespace(`${data.senderId}`).query({
            topK: 10,
            vector: Object.values(ragIndex.vectorStores.TEXT.data.embeddingDict)[0],
            includeValues: false,
            includeMetadata: true,
            // filter: { genre: { '$eq': 'action' }}
        });

        // Create user profile
        var msgs = ""
        for (const msg of req.body.lastMessages) {
            const timeAgo = formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true });
            msgs = msgs + ` (${timeAgo}) ` + msg.role + " : " + msg.text + " \n";
            // msgs = msgs + msg.role + " : " + msg.text + " \n"
        }
        var prompt1 = `
        Analyze the conversation history to extract key information about the person the agent is talking to.
        Specifically, identify:
        Their name
        Gender
        Their age (if available)
        The level of friendship or familiarity between them and the agent
        The duration of their conversation (based on timestamps)
        Use message timestamps to:
        Estimate how long they’ve been talking
        Help infer the depth of the relationship (e.g., casual acquaintance, close friend)
        Past Messages:
        ${msgs}`
        const chain1 = await createPrompt.createChain(prompt1, index);

        // Create a Mood for Ai
        const context = await createPrompt.createPrompt(aiPreference.matches, topK.matches, lastMessages, data.text, personal.matches);
        // Query Main LLM
        const output = await queryEngineModule.queryEngine(index, context, data.text, aiPreference.matches, lastMessages, topK.matches, personal.matches, chain1);
        // Gender Fix
        // var prompt2 = "Check the gender expression in the response. The response must always be written as if it is from a girl to a boy of the same age. If it does not match this, change it accordingly. Dont change yrr dude and such stuff. Strcitly Do not modify anything else. Return only the corrected response, nothing more.\n\n" + "message:" + output;
        // const chain2 = await createPrompt.createChain(prompt2, index);
        // Break the message into smaller chunks
        var prompt3 = `
        Check the gender expression in the response. The response must always be written as if it is from a girl to a boy of the same age. 
        If it does not match this, change it accordingly. Dont change yrr dude and such stuff.
        You will be given a message intended for a human chat.
        Your task is to decide whether this message should be broken into multiple shorter messages or kept as a single message.
        If the message is already appropriate in size for casual chat, DO NOT change or add anything — not even punctuation.
        Split the message when necessary to improve readability and flow in a human conversation.
        Keep the split messages short (5-10 words) and casual, as if they were sent in a normal chat.
        Return the result as a valid JSON string — a list (array) of message chunks, each as a string, in the correct order.
        Do NOT wrap the output in code blocks or Markdown formatting. No triple backticks. No "json" label.
        STRICTLY return only the raw JSON string — no explanation, no labels, no formatting, nothing else.

        Message: ${output}
        `
        const chain3 = await createPrompt.createChain(prompt3, index);
        const resJSON = JSON.parse(chain3);
        console.log("resJSON: ", resJSON);

        return res.status(200).json({ response: resJSON });

    } catch (error) {
        console.error('Error in queryPinecone:', error);
        return res.status(500).json({ error: 'Internal Server Error' });

    }
}

export default { queryPinecone };
