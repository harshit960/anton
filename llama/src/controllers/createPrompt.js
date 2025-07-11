import { Gemini, GEMINI_MODEL, GeminiVertexSession } from "@llamaindex/google";
import { TextNode, getResponseSynthesizer, responseModeSchema } from "llamaindex";
import { Settings } from "llamaindex";
import { PROMPTS } from './prompts.js';

import dotenv from "dotenv";
import { formatDistanceToNow } from "date-fns";
dotenv.config();

Settings.llm = new Gemini({
    model: GEMINI_MODEL.GEMINI_2_5_FLASH_PREVIEW,
    apiKey: process.env.GOOGLE_API_KEY,
});

async function createPrompt(aiPreference, topK, lastMessages, query, personal) {

    const responseSynthesizer = getResponseSynthesizer(responseModeSchema.Enum.multi_modal);
    var agent = ""
    for (const node of aiPreference) {
        agent = agent + node.metadata.text + " \n"
    }
    var msgs = ""
    for (const msg of lastMessages) {
        const timeAgo = formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true });
        msgs = msgs + ` (${timeAgo}) ` + msg.role + " : " + msg.text + " \n";
    }

    const nodes = [
        ...personal.map(item => ({
            node: new TextNode({ text: item.metadata.text }),
            score: item.score || 0, // Default score to 0 if not provided
        })),
        ...topK.map(match => ({
            node: new TextNode({ text: match.metadata.text }),
            score: match.score,
        }))
    ];

    const PROMPT = PROMPTS.EMOTIONAL_CONTEXT(query, msgs);

    const response = await responseSynthesizer.synthesize({
        query: PROMPT,
        nodes,
    });
    console.log("return ", response.response);
    return response.response;
}
async function createChatPreference(topK) {

    const responseSynthesizer = getResponseSynthesizer(responseModeSchema.Enum.tree_summarize);
    const nodes = [
        topK.map(match => ({
            node: new TextNode({ text: match.metadata.text }),
            score: match.score,
        }))
    ];
    console.log(nodes);
    
    const PROMPT = PROMPTS.CHAT_PREFERENCE;

    const response = await responseSynthesizer.synthesize({
        query: PROMPT,
        nodes,
    });
    console.log("Personality ", response.response);
}
async function createRagPrompt(lastMessages, query, index) {
    const queryEngine = index.asQueryEngine();
    var msgs = ""
    for (const msg of lastMessages) {
        const timeAgo = formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true });
        msgs = msgs + ` (${timeAgo}) ` + msg.role + " : " + msg.text + " \n";
    }

    const PROMPT = PROMPTS.RAG_CONVERSATION_ANALYSIS(query, msgs);

    const response = await queryEngine.query({
        query: PROMPT,
    });



    console.log("RAG Prompt: ", response.response);
    return response.response;
}
async function createChain(PROMPT, index) {
    const queryEngine = index.asQueryEngine();
    const response = await queryEngine.query({
        query: PROMPT,
    });
    console.log("Chain: ", response.response);
    return response.response;
}
export default { createPrompt, createRagPrompt,createChain,createChatPreference };