import { Gemini, GEMINI_MODEL, GeminiEmbedding, GEMINI_EMBEDDING_MODEL } from "@llamaindex/google";
import { Document, VectorStoreIndex,SummaryIndex , Settings } from "llamaindex";
import dotenv from 'dotenv';
import storePineconeModule from "./storePinecone.js";

dotenv.config();

Settings.embedModel = new GeminiEmbedding({
  model: GEMINI_EMBEDDING_MODEL.TEXT_EMBEDDING_004,
  apiKey: process.env.GOOGLE_API_KEY,
});

const createEmbedding = async (req, res) => {
  const data = req.body.data;
  const document = new Document({ text: data.originalUpdate.message, id_: data.originalUpdate.id });
  const index = await VectorStoreIndex.fromDocuments([document]);
  const resp = await storePineconeModule.storePineconeFn(index, {
    id: data.originalUpdate.id,
    message: data.originalUpdate.message,
    // timestamp: data.originalUpdate.timestamp,
  });
  return res.status(200).json({ resp });
}
const createEmbeddingFn = async (data) => {
  const document = new Document({ text: data.text, id_: data.id });
  const index = await VectorStoreIndex.fromDocuments([document]);
  return index;
}

export default {createEmbedding, createEmbeddingFn};
