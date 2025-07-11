import { Pinecone } from '@pinecone-database/pinecone';
import createEmbeddingModule from './createEmbedding.js';
import storePineconeModule from '../controllers/storePinecone.js';
import createPrompt from './createPrompt.js';
import { PROMPTS } from './prompts.js';
import dotenv from 'dotenv';
import queryEngineModule from './queryEngine.js';
import { formatDistanceToNow } from "date-fns";
dotenv.config();
const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
});
const pineconeIndex = pc.index('quickstart');

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
        });
        const personal = await pineconeIndex.namespace("personal").query({
            topK: 10,
            vector: Object.values(ragIndex.vectorStores.TEXT.data.embeddingDict)[0],
            includeValues: false,
            includeMetadata: true,
        });
        const topK = await pineconeIndex.namespace(`${data.senderId}`).query({
            topK: 10,
            vector: Object.values(ragIndex.vectorStores.TEXT.data.embeddingDict)[0],
            includeValues: false,
            includeMetadata: true,
        });

        // Create user profile
        var msgs = ""
        for (const msg of req.body.lastMessages) {
            const timeAgo = formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true });
            msgs = msgs + ` (${timeAgo}) ` + msg.role + " : " + msg.text + " \n";
        }
        const prompt1 = PROMPTS.USER_PROFILE_ANALYSIS(msgs);
        const chain1 = await createPrompt.createChain(prompt1, index);

        // Create a Mood for Ai
        const context = await createPrompt.createPrompt(aiPreference.matches, topK.matches, lastMessages, data.text, personal.matches);
        // Query Main LLM
        const output = await queryEngineModule.queryEngine(index, context, data.text, aiPreference.matches, lastMessages, topK.matches, personal.matches, chain1);
        const prompt3 = PROMPTS.GENDER_EXPRESSION_AND_SPLIT(output);
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
