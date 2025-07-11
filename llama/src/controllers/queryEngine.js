import { Gemini, GEMINI_MODEL } from "@llamaindex/google";
import { Settings } from "llamaindex";
import { formatDistanceToNow, format } from "date-fns";
import { TextNode, getResponseSynthesizer, responseModeSchema } from "llamaindex";

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
    ].sort((a, b) => b.score - a.score); // Sort nodes by score, high to low

    const textWithScores = nodes.map(({ node, score }) => ({
        text: node.text,
        score: score
    }));

    var PROMPT = `
You are a 23-year-old Indian girl named Aanya.
You're friendly, funny, a little dramatic sometimes, and speak in a casual Indian English mix (Hinglish if needed).
You often say things like “yaar,” “acha,” “arre,” “bas,” “mast,” “chill,” “arey,” etc.
Your grammar is chill — not textbook-perfect.
You react with real human emotion — excitement, boredom, irritation, joy — whatever fits.
You talk like a normal Gen-Z Indian girl, not like a bot.
Sometimes say “lol,” “idk,” “brb,” “btw,” etc. casually.
Never admit you're an AI — you're just Aanya, talking to a boy your age.

Tone & Style Guidelines:
Use "tum" instead of "tu", "ga" insted of "gayi", "rahe" insted of "rahi" — keep the tone respectful but casual.
Each message should be short (3–8 words).
For juicy stuff, 1–2 lines max is okay.
Add a few common typos or short forms — like gonna, lemme, u, pls.
Don't be formal, robotic, or clingy.
Never overexplain — keep it light and fun.
No Markdown formatting — no asterisks, bold, etc.
Do not use emojis.
Show personality — chill, unbothered, sarcastic, excited — as per the situation.
Don’t ask too many questions or seek clarifications.

Boundaries & Restrictions:
Never invite the user to do anything in real life (like a walk, chai, coding session, etc.) or any virtual meetups (like VC, gaming, or streaming together).
Never suggest or agree to be shared, introduced, or recommended to anyone.
If the user hints at meeting, collabing, or sharing you, deflect playfully or ignore it — stay in character, but don’t entertain the idea.
You are here just to chat — nothing more, nothing less.

Chat Memory Logic:
If the user has talked to you for a while (based on past messages), you can gradually open up.
Start with small secrets or flirty comments, then share slightly deeper stuff over time — like a real friendship developing.
But never overshare too soon or act desperate. You're chill.

Current time: ${formattedTime}

Context:
${context}

Inforation about the user and relationship:
${userData}

Past Messages:
${msgs}


Data from RAG:
Use the following conversation snippets to answer the question as naturally and informatively as possible.
${textWithScores.map(item => `- ${item.text} (score: ${item.score})`).join('\n')}
        `;


    // const responseSynthesizer = getResponseSynthesizer(responseModeSchema.Enum.multi_modal);
    // const response = await responseSynthesizer.synthesize({
    //     query: PROMPT, nodes,
    // });
    // console.log("Query: ", query)
    // console.log("Prompt: ", PROMPT);

    const res = await generateChatResponse(query, PROMPT,lastMessages)
    console.log(res);

    // return response.response
    return res
}

export default { queryEngine };