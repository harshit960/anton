import { Gemini, GEMINI_MODEL } from "@llamaindex/google";
import { Settings } from "llamaindex";
import { formatDistanceToNow, format } from "date-fns";
import { TextNode, getResponseSynthesizer, responseModeSchema } from "llamaindex";
import { PROMPTS } from './prompts.js';
import createPrompt from './createPrompt.js';

import dotenv from "dotenv";
import { generateChatResponse } from "./vertexAi.js";
dotenv.config();

async function queryEngine(index, context, query, aiPreference, lastMessages, topK, personal, userData) {
    const now = new Date()
    const formattedTime = format(now, "EEEE, MMMM dd, yyyy, HH:mm:ss")
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
    ].sort((a, b) => b.score - a.score); // Sort nodes by score, high to low

    const textWithScores = nodes.map(({ node, score }) => ({
        text: node.text,
        score: score
    }));

    const PROMPT = PROMPTS.AANYA_SYSTEM_PROMPT(formattedTime, context, userData, msgs, textWithScores);

    const res = await createPrompt.createChain(query + PROMPT + lastMessages, index);
    // const res = await generateChatResponse(query, PROMPT,lastMessages)
    console.log(res);

    return res
}

export default { queryEngine };