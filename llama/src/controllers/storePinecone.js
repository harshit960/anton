import { Pinecone } from '@pinecone-database/pinecone';
import createEmbeddingModule from './createEmbedding.js';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
});
const pineconeIndex = pc.index('quickstart');

const storePineconeFn = async (index, metadata,senderId) => {
    // const index = await createEmbeddingModule.createEmbeddingFn(data);
    const response = await pineconeIndex.namespace(`${senderId}`).upsert([{
        values: Object.values(index.vectorStores.TEXT.data.embeddingDict)[0],
        metadata: {
            id:metadata.messageId,
            text:metadata.text,
            query:metadata.query || "",
            senderId:metadata.senderId,
            chatId:metadata.chatId,
            mediaType:metadata.mediaType,
            isCommand:metadata.isCommand,
        },
        id:metadata.messageId
    }]);
    return response;
}
const storePinecone = async (req,res) => {
    const { metadata,senderId} = req.body;
    const content = await fs.promises.readFile("chat.json", 'utf8');
    // const lines = content.split('\n');
    const lines = JSON.parse(content);
    for (let i = 0; i < lines.length; i++) {
        console.log(i);
        // const [sender, message] = lines[i];
        const index = await createEmbeddingModule.createEmbeddingFn({text: lines[i].query, id: i});
        const response = await storePineconeFn(index, {text:lines[i].response, query:lines[i].query, messageId:Date.now().toString(), chatId:Date.now().toString(), mediaType:"text", isCommand:false},"personal");
        console.log(i,lines[i],response);
    }

    // return res.status(200).json({ response });
}
export default { storePineconeFn, storePinecone };
