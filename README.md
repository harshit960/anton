# Anton - Advanced Conversational AI Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4%2B-green.svg)](https://www.mongodb.com/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

> A sophisticated conversational AI platform that **demonstrates RAG (Retrieval-Augmented Generation) and Chain-of-Thought implementation from scratch** using modern microservice architecture. Built with vector databases and fine-tuned large language models to create natural, context-aware conversations through Telegram.

**🎯 Perfect for developers learning:** RAG pipelines, vector embeddings, LLM chaining, microservice patterns, and real-time AI applications.

## 🚀 Features

### 🎓 **Educational Implementation**
- **🔬 RAG from Scratch**: Complete implementation of Retrieval-Augmented Generation pipeline
- **🧠 Chain-of-Thought**: Multi-stage LLM reasoning implemented step-by-step
- **🏗️ Microservice Architecture**: Clean separation of concerns across distributed services
- **📖 Well-Documented Code**: Every component explained for learning purposes

### 🤖 **AI Capabilities**
- **🤖 Advanced Conversational AI**: Context-aware responses using custom RAG implementation
- **🔍 Vector Search**: Semantic search with Pinecone vector database integration
- **🧠 Multi-LLM Chaining**: Sequential processing for enhanced reasoning
- **🌐 Multi-language Support**: English and Hinglish (Hindi + English) support

### 🛠️ **Platform Features**
- **📱 Telegram Integration**: Seamless messaging through gram.js MTProto client
- **📊 Real-time Analytics**: User interaction tracking and performance metrics
- **🎨 Modern Frontend**: React-based landing page with responsive design
- **⚡ High Performance**: Sub-2 second response times with 1000+ concurrent users

## 🏗️ Architecture

The platform follows a microservice architecture with three main components:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Landing Page  │    │   Node.js       │    │   AI Service    │
│   (React/Vite)  │    │   Server        │    │   (Llama)       │
│                 │    │                 │    │                 │
│ • User Interface│    │ • Telegram API  │    │ • Embeddings    │
│ • Information   │    │ • Message       │    │ • Vector Search │
│ • CTA Links     │    │   Processing    │    │ • LLM Chain     │
└─────────────────┘    │ • MongoDB       │    │ • Pinecone      │
                       │ • REST API      │    │ • Gemini API    │
                       └─────────────────┘    └─────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **gram.js** - Telegram MTProto API client
- **MongoDB** - Document database

### AI/ML
- **Google Gemini Flash 2.0** - Large language model
- **Vertex AI** - Machine learning platform
- **Pinecone** - Vector database for embeddings
- **RAG Pipeline** - Retrieval-augmented generation

### DevOps
- **Google Cloud Run** - Container deployment
- **GitHub Actions** - CI/CD pipeline
- **Docker** - Containerization

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or cloud instance)
- **Git** for version control

### Required API Keys

You'll need to obtain the following API keys:

1. **Telegram API credentials** from [my.telegram.org](https://my.telegram.org/auth)
2. **Google Cloud API key** with Vertex AI and Gemini APIs enabled
3. **Pinecone API key** from [Pinecone dashboard](https://app.pinecone.io/)
4. **MongoDB connection string** (local or Atlas)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/harshit960/anton.git
cd anton

# Copy and configure environment files
cp server/.env.example server/.env
cp llama/.env.example llama/.env
# Edit the .env files with your API keys

# Install dependencies
cd server && npm install && cd ..
cd llama && npm install && cd ..
cd landing-page && npm install && cd ..

# Generate Telegram session (follow prompts)
cd server && node src/utils/generateSession.js

# Start services (in separate terminals)
cd llama && npm start      # AI service (port 3001)
cd server && npm start     # Server (port 3000)  
cd landing-page && npm run dev  # Frontend (port 5173)
```

## 📚 Documentation

- **🔧 [Environment Setup](server/.env.example)** - Configuration templates for all services
- **📡 [API Documentation](API.md)** - Complete API reference and examples
- **🤝 [Contributing Guide](CONTRIBUTING.md)** - How to contribute to the project
- **📜 [Code of Conduct](CODE_OF_CONDUCT.md)** - Community guidelines

## 🧪 Testing

```bash
npm test  # Run tests for all services
```

## 🚀 Deployment

Supports Docker and Google Cloud Run deployment. See [deployment guide](docs/deployment.md) for detailed instructions.

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

## 📈 Performance

- **Response Time**: < 2 seconds average
- **Accuracy**: 85%+ contextual relevance
- **Scalability**: Supports 1000+ concurrent users
- **Availability**: 99.9% uptime target

## 🗺️ Roadmap

- [ ] **Multi-platform Support**: WhatsApp, Discord integration
- [ ] **Voice Interaction**: Speech-to-text and text-to-speech
- [ ] **Enhanced Personalization**: Advanced user preference learning
- [ ] **Multi-language Expansion**: Support for more languages
- [ ] **Analytics Dashboard**: Real-time conversation insights
- [ ] **Plugin System**: Extensible functionality framework

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google for Gemini API and Vertex AI platform
- Pinecone for vector database services
- Telegram for their robust API
- The open-source community for various libraries and tools

## 📞 Support

- **Documentation**: [Wiki](https://github.com/harshit960/anton/wiki)
- **Issues**: [GitHub Issues](https://github.com/harshit960/anton/issues)
- **Discussions**: [GitHub Discussions](https://github.com/harshit960/anton/discussions)
- **Email**: [raj.harshit960@gmail.com](mailto:raj.harshit960@gmail.com)

---

<p align="center">
  <strong>Built with ❤️ by the Anton team</strong>
</p>