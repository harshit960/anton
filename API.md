# Anton API Documentation

This document provides comprehensive documentation for the Anton conversational AI platform APIs.

## Base URLs

- **Server API**: `http://localhost:3000/api`
- **AI Service API**: `http://localhost:3001/api`

## Authentication

The APIs use Telegram session-based authentication. Ensure your environment is properly configured with valid Telegram credentials.

## Server API Endpoints

### Message Routes

#### Send Message
Send a message through Telegram.

**Endpoint:** `POST /api/messages/send`

**Request Body:**
```json
{
  "peer": "string|number",     // Telegram user ID or username
  "message": "string",         // Message content to send
  "scheduleDate": "number"     // Optional: Unix timestamp for scheduled message (delay in seconds)
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    // Telegram API response object
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Failed to send message",
  "error": "Error description"
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/api/messages/send \
  -H "Content-Type: application/json" \
  -d '{
    "peer": "123456789",
    "message": "Hello from Anton!",
    "scheduleDate": 10
  }'
```

### Message Listener Routes

#### Start Message Listener
Start the Telegram message listener service.

**Endpoint:** `POST /api/message-listener/start`

**Response:**
```json
{
  "success": true,
  "message": "Message listener started successfully"
}
```

#### Stop Message Listener
Stop the Telegram message listener service.

**Endpoint:** `POST /api/message-listener/stop`

**Response:**
```json
{
  "success": true,
  "message": "Message listener stopped successfully"
}
```

#### Get Listener Status
Get the current status of the message listener.

**Endpoint:** `GET /api/message-listener/status`

**Response:**
```json
{
  "status": "running|stopped",
  "uptime": "string",          // How long the service has been running
  "lastActivity": "timestamp"  // Last message processed
}
```

## AI Service API Endpoints

### Embedding Generation

#### Create Embedding
Generate embeddings for text input.

**Endpoint:** `POST /api/`

**Request Body:**
```json
{
  "text": "string",            // Text to generate embedding for
  "id": "string"             // Unique identifier for the embedding
}
```

**Response:**
```json
{
  "vectorStores": {
    "TEXT": {
      "data": {
        "embeddingDict": {
          "embedding_id": [0.1, 0.2, ...] // Vector embedding array
        }
      }
    }
  }
}
```

### Vector Storage

#### Store in Pinecone
Store embeddings and metadata in Pinecone vector database.

**Endpoint:** `POST /api/store`

**Request Body:**
```json
{
  "embedding": {
    "vectorStores": {
      "TEXT": {
        "data": {
          "embeddingDict": {
            "embedding_id": [0.1, 0.2, ...]
          }
        }
      }
    }
  },
  "metadata": {
    "messageId": "string",
    "senderId": "string",
    "chatId": "string", 
    "text": "string",
    "mediaType": "string",
    "isCommand": "boolean",
    "command": "string|null",
    "isForwarded": "boolean",
    "forwardedFrom": "string|null",
    "processed": "boolean",
    "processedAt": "timestamp|null",
    "createdAt": "timestamp"
  },
  "namespace": "string"        // Pinecone namespace to store in
}
```

**Response:**
```json
{
  "success": true,
  "upsertedCount": 1
}
```

### Query Processing

#### Query Pinecone
Process a user query through the complete AI pipeline including RAG, context generation, and response creation.

**Endpoint:** `POST /api/query`

**Request Body:**
```json
{
  "data": {
    "messageId": "string",
    "senderId": "string", 
    "chatId": "string",
    "text": "string",           // User's message
    "mediaType": "string",
    "isCommand": "boolean",
    "command": "string|null",
    "isForwarded": "boolean",
    "forwardedFrom": "string|null",
    "processed": "boolean",
    "processedAt": "timestamp|null",
    "createdAt": "timestamp"
  },
  "lastMessages": [
    {
      "role": "user|agent",
      "text": "string",
      "createdAt": "timestamp"
    }
  ]
}
```

**Response:**
```json
{
  "response": [
    "Message chunk 1",
    "Message chunk 2",
    "..."
  ]
}
```

## Health Check

### Server Health
**Endpoint:** `GET /`

**Response:**
```json
{
  "message": "Welcome to the API"
}
```

### AI Service Health
**Endpoint:** `GET /`

**Response:**
```json
{
  "message": "Llama API is running"
}
```

## Error Handling

All APIs follow consistent error response formats:

### 4xx Client Errors
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

### 5xx Server Errors
```json
{
  "error": "Internal Server Error",
  "message": "Something went wrong!"
}
```

## Rate Limiting

- **Server API**: No explicit rate limiting (handled by Telegram API limits)
- **AI Service API**: Subject to Google Gemini and Pinecone API rate limits

## Data Models

### Message Object
```json
{
  "messageId": "string",
  "senderId": "string",
  "chatId": "string", 
  "text": "string",
  "mediaType": "none|photo|video|document|sticker|voice|etc",
  "isCommand": "boolean",
  "command": "string|null",
  "isForwarded": "boolean",
  "forwardedFrom": "string|null",
  "processed": "boolean",
  "processedAt": "timestamp|null",
  "createdAt": "timestamp"
}
```

### Embedding Object
```json
{
  "vectorStores": {
    "TEXT": {
      "data": {
        "embeddingDict": {
          "embedding_id": "number[]"  // 768-dimensional vector
        }
      }
    }
  }
}
```

### Conversation Context
```json
{
  "role": "user|agent",
  "text": "string",
  "createdAt": "timestamp"
}
```

## Integration Flow

### Complete Message Processing Flow

1. **Receive Message** → Server receives Telegram message
2. **Store Message** → Message stored in MongoDB
3. **Generate Embedding** → `POST /api/` to create embedding
4. **Store Vector** → `POST /api/store` to save in Pinecone
5. **Query AI** → `POST /api/query` to generate response
6. **Send Response** → `POST /api/messages/send` to reply via Telegram

### Example Integration

```javascript
// 1. Generate embedding
const embedding = await fetch('http://localhost:3001/api/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'Hello', id: 'msg123' })
});

// 2. Query for response
const response = await fetch('http://localhost:3001/api/query', {
  method: 'POST', 
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    data: messageData,
    lastMessages: conversationHistory
  })
});

// 3. Send response
const sendResult = await fetch('http://localhost:3000/api/messages/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    peer: userId,
    message: aiResponse[0]
  })
});
```

## Environment Variables

### Required for Server API
- `MONGODB_URI` - MongoDB connection string
- `LLAMA_URL` - AI service base URL
- `apiId` - Telegram API ID
- `apiHash` - Telegram API hash
- `stringSession` - Telegram session string

### Required for AI Service API
- `GOOGLE_API_KEY` - Google Gemini API key
- `PINECONE_API_KEY` - Pinecone vector database API key

## Status Codes

- `200` - Success
- `400` - Bad Request (invalid parameters)
- `401` - Unauthorized (invalid credentials)
- `404` - Not Found (endpoint doesn't exist)
- `500` - Internal Server Error

## Contact & Support

For API questions and issues:
- **GitHub Issues**: [https://github.com/harshit960/anton/issues](https://github.com/harshit960/anton/issues)
- **Documentation**: [https://github.com/harshit960/anton/wiki](https://github.com/harshit960/anton/wiki)
- **Email**: [raj.harshit960@gmail.com](mailto:raj.harshit960@gmail.com)
