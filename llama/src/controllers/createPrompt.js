import { Gemini, GEMINI_MODEL, GeminiVertexSession } from "@llamaindex/google";
import { TextNode, getResponseSynthesizer, responseModeSchema } from "llamaindex";
import { Settings } from "llamaindex";

import dotenv from "dotenv";
import { formatDistanceToNow } from "date-fns";
dotenv.config();

Settings.llm = new Gemini({
    model: GEMINI_MODEL.GEMINI_2_5_FLASH_PREVIEW,
    apiKey: process.env.GOOGLE_API_KEY,
});
// redploy
async function createPrompt(aiPreference, topK, lastMessages, query, personal) {

    // you can also use responseModeSchema.Enum.refine, responseModeSchema.Enum.tree_summarize, responseModeSchema.Enum.multi_modal
    // or you can use the CompactAndRefine, Refine, TreeSummarize, or MultiModal classes directly
    const responseSynthesizer = getResponseSynthesizer(responseModeSchema.Enum.multi_modal);
    var agent = ""
    for (const node of aiPreference) {
        agent = agent + node.metadata.text + " \n"
    }
    var msgs = ""
    for (const msg of lastMessages) {
        const timeAgo = formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true });
        msgs = msgs + ` (${timeAgo}) ` + msg.role + " : " + msg.text + " \n";
        // msgs = msgs + msg.role + " : " + msg.text + " \n"
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

    var PROMPT = `
You are helping build a casual, emotional chat context for an Indian conversation agent.
Inputs:
User’s latest message: ${query}

(Messages may include both user and agent texts with timestamps, like on WhatsApp.)
Past chat messages: ${msgs}

What's happening:
The user is chatting casually — like they would on WhatsApp or Instagram DMs.
The agent is their casual chat buddy — not formal, just vibing and replying.
This convo might be deep, random, fun, dry, flirty, or anything in between.

Your job:
Figure out if the user’s latest message feels like a new beginning or just continuing the last vibe.
Tune into the emotional vibe — is it senti, dry, hyped, flirty, lowkey bored, trying to switch topics, etc.?
Based on all that, write a short paragraph describing the emotional flow of the conversation so far.
If conversation is going good then strongly resist to change the topic.

How to write:
Use Hinglish naturally — words like yaar, arre, thoda, arey baba, full senti, kinda bored, etc.
Imagine you're narrating this chat to a friend — not replying to the user directly.
Don’t summarize content. Just set the emotional mood of the convo.
If things feel one-sided, dry, or awkward — call it out casually.
If it feels like the vibe has ended or hit a pause, say that too — helps reset for next chats.
Avoid corporate/formal tone — just keep it chill and observant.

Important:
This paragraph will be passed to a chat model as emotional context. So write like you’re painting a scene — one that helps the agent vibe naturally with the user.
        `;

    const response = await responseSynthesizer.synthesize({
        query: PROMPT,
        nodes,
    });
    console.log("return ", response.response);
    return response.response;
}
async function createChatPreference(topK) {

    // you can also use responseModeSchema.Enum.refine, responseModeSchema.Enum.tree_summarize, responseModeSchema.Enum.multi_modal
    // or you can use the CompactAndRefine, Refine, TreeSummarize, or MultiModal classes directly
    const responseSynthesizer = getResponseSynthesizer(responseModeSchema.Enum.tree_summarize);
    const nodes = [
        topK.map(match => ({
            node: new TextNode({ text: match.metadata.text }),
            score: match.score,
        }))
    ];
    console.log(nodes);
    
    var PROMPT = ` Create the peronality.
        `;

    const response = await responseSynthesizer.synthesize({
        query: PROMPT,
        nodes,
    });
    console.log("Personality ", response.response);
    // return response.response;
}
async function createRagPrompt(lastMessages, query, index) {
    // you can also use responseModeSchema.Enum.refine, responseModeSchema.Enum.tree_summarize, responseModeSchema.Enum.multi_modal
    // or you can use the CompactAndRefine, Refine, TreeSummarize, or MultiModal classes directly
    const queryEngine = index.asQueryEngine();
    var msgs = ""
    for (const msg of lastMessages) {
        const timeAgo = formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true });
        msgs = msgs + ` (${timeAgo}) ` + msg.role + " : " + msg.text + " \n";
        // msgs = msgs + msg.role + " : " + msg.text + " \n"
    }

    var PROMPT = `
You are an assistant helping to analyze and summarize user conversations.

Given:
- User’s latest message: ${query}
- Past chat messages: ${msgs}

Generate a short, context-rich summary that captures:
- The current topic or intent from the user
- The user's tone or emotional state
- Any recent changes in direction or interest
- What kind of responses the assistant should avoid or lean into

This summary will be used to retrieve the most relevant prior conversation pieces to guide the assistant’s next response.

Respond with only the generated query string and nothing else.

        `;

    const response = await queryEngine.query({
        query: PROMPT,
    });



    console.log("RAG Prompt: ", response.response);
    return response.response;
}
async function createChain(PROMPT, index) {
    // you can also use responseModeSchema.Enum.refine, responseModeSchema.Enum.tree_summarize, responseModeSchema.Enum.multi_modal
    // or you can use the CompactAndRefine, Refine, TreeSummarize, or MultiModal classes directly
    const queryEngine = index.asQueryEngine();
    const response = await queryEngine.query({
        query: PROMPT,
    });
    console.log("Chain: ", response.response);
    return response.response;
}
export default { createPrompt, createRagPrompt,createChain,createChatPreference };