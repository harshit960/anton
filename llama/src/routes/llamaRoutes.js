import express from 'express';
import createEmbeddingModule from '../controllers/createEmbedding.js';
import queryPineconeModule from '../controllers/queryPinecone.js';
import storePineconeModule from '../controllers/storePinecone.js';
const router = express.Router();

// POST endpoint to query the Llama model
router.post('/', createEmbeddingModule.createEmbedding);
router.post('/query', queryPineconeModule.queryPinecone);
router.post('/store', storePineconeModule.storePinecone);

export default router; 