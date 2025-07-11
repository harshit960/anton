import { Gemini, GEMINI_MODEL, GeminiEmbedding, GEMINI_EMBEDDING_MODEL } from "@llamaindex/google";
import { Document, VectorStoreIndex, Settings } from "llamaindex";
import dotenv from "dotenv";
import fs from "fs";
import { parse } from "csv-parse/sync";  // CSV parser

dotenv.config();


Settings.embedModel = new GeminiEmbedding({
    model: GEMINI_EMBEDDING_MODEL.TEXT_EMBEDDING_004,
    apiKey: process.env.GOOGLE_API_KEY,
});

async function localCSV(query) {
    const csvData = fs.readFileSync("convo.csv", "utf8");
    const records = parse(csvData, {
        columns: true, // Get rows as objects with column names
        skip_empty_lines: true
    });
    const documents = records.map((row) => {
        const text = `Q: ${row.input}\nA: ${row.output}`;
        return new Document({ text });
    });

    // 4. Create the index
    const index = await VectorStoreIndex.fromDocuments(documents);
    const retriever = index.asRetriever({
        similarityTopK: 10,  // <--- set Top K here
      });
      
      // 5. Run retrieval
    const nodes = await retriever.retrieve(query);
    console.log(nodes);
    
    // const document = new Document({ text: "wtfff bro, i wanna be crazy", id_: "essay" });

    // Load and index documents
    // const index = await VectorStoreIndex.fromDocuments([document]);
    // console.log(index);
    // console.log(Object.values(index.vectorStores.TEXT.data.embeddingDict)[0]);

}

export default { localCSV };