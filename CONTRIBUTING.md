# Contributing to Anton

Thank you for your interest in contributing to Anton! We welcome contributions from developers of all skill levels. This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community Guidelines](#community-guidelines)

## 📜 Code of Conduct

This project adheres to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- Node.js 16+ installed
- MongoDB running locally or access to MongoDB Atlas
- Required API keys (Telegram, Google Cloud, Pinecone)
- Git for version control
- A code editor (VS Code recommended)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/anton.git
   cd anton
   ```
3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/harshit960/anton.git
   ```

## 🛠️ Development Setup

### 1. Environment Configuration

```bash
# Copy environment files
cp server/.env.example server/.env
cp llama/.env.example llama/.env
cp landing-page/.env.example landing-page/.env

# Edit the .env files with your configuration
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm run install:all

# Or install individually
cd server && npm install && cd ..
cd llama && npm install && cd ..
cd landing-page && npm install && cd ..
```

### 3. Start Development Servers

```bash
# Start all services in development mode
npm run dev

# Or start individually
npm run dev:server    # Server on port 3000
npm run dev:llama     # AI service on port 3001
npm run dev:frontend  # Frontend on port 5173
```

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **🐛 Bug fixes**: Fix issues and improve stability
- **✨ New features**: Add new functionality or enhancements
- **📚 Documentation**: Improve docs, tutorials, and examples
- **🎨 UI/UX improvements**: Enhance user interface and experience
- **⚡ Performance optimizations**: Make the system faster and more efficient
- **🧪 Tests**: Add or improve test coverage
- **🔧 Refactoring**: Improve code quality and maintainability

### Before You Start

1. **Check existing issues** to avoid duplicating work
2. **Create an issue** to discuss major changes before implementing
3. **Assign yourself** to an issue you want to work on
4. **Join our discussions** for questions and coordination

## 📝 Coding Standards

### JavaScript/Node.js

- Use **ES6+** features and modern JavaScript
- Follow **ESLint** configuration provided in the project
- Use **async/await** instead of callbacks when possible
- Prefer **const** over **let**, and avoid **var**
- Use **camelCase** for variables and functions
- Use **PascalCase** for classes and constructors

### Code Style

```javascript
// ✅ Good
const getUserMessages = async (userId) => {
  try {
    const messages = await Message.find({ userId });
    return messages;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

// ❌ Avoid
function getUserMessages(userId, callback) {
  Message.find({ userId }, function(err, messages) {
    if (err) return callback(err);
    callback(null, messages);
  });
}
```

### React/Frontend

- Use **functional components** with hooks
- Follow **React best practices** and patterns
- Use **TypeScript** for new components (if applicable)
- Implement **responsive design** with TailwindCSS
- Ensure **accessibility** standards (WCAG 2.1)

### File Organization

```
src/
├── components/          # Reusable UI components
├── controllers/         # Business logic handlers
├── models/             # Data models and schemas
├── routes/             # API route definitions
├── utils/              # Utility functions
├── config/             # Configuration files
└── tests/              # Test files
```

## 💬 Commit Guidelines

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

### Commit Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (white-space, formatting)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```bash
feat(server): add message encryption functionality
fix(llama): resolve embedding generation timeout issue
docs(readme): update installation instructions
style(frontend): fix eslint warnings in Message component
refactor(api): simplify user authentication logic
test(server): add unit tests for message controller
```

## 🔄 Pull Request Process

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number-description
```

### 2. Make Your Changes

- Write clear, concise code
- Add tests for new functionality
- Update documentation as needed
- Follow the coding standards

### 3. Test Your Changes

```bash
# Run all tests
npm test

# Run linting
npm run lint

# Check formatting
npm run format:check
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat(scope): add your feature description"
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:

- **Clear title** following commit conventions
- **Detailed description** of changes made
- **Screenshots** for UI changes
- **Testing instructions** for reviewers
- **Link to related issues**

### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] New and existing unit tests pass locally with my changes
```

## 🐛 Issue Guidelines

### Reporting Bugs

When reporting bugs, please include:

1. **Clear title** describing the issue
2. **Steps to reproduce** the bug
3. **Expected behavior** vs actual behavior
4. **Environment details** (OS, Node.js version, etc.)
5. **Screenshots** or error logs if applicable
6. **Additional context** that might be helpful

### Feature Requests

For feature requests, please provide:

1. **Clear description** of the proposed feature
2. **Use case** explaining why this feature would be valuable
3. **Proposed implementation** (if you have ideas)
4. **Alternatives considered**
5. **Additional context** or examples

### Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 🏘️ Community Guidelines

### Communication

- **Be respectful** and inclusive in all interactions
- **Use clear, constructive language** when providing feedback
- **Ask questions** if something is unclear
- **Help others** when you can
- **Stay on topic** in discussions

### Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and community chat
- **Documentation**: Check the Wiki for detailed guides
- **Code Reviews**: Learn from feedback and help others improve

### Recognition

We appreciate all contributions and will:

- **Acknowledge contributors** in release notes
- **Maintain a contributors list** in the project
- **Provide feedback** on pull requests promptly
- **Celebrate milestones** and achievements together

## 📚 Resources

### Documentation

- [Project Wiki](https://github.com/harshit960/anton/wiki)
- [API Documentation](./API.md)
- [Architecture Overview](./docs/architecture.md)

### Tools and Setup

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [MongoDB](https://www.mongodb.com/) - Database
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [Postman](https://www.postman.com/) - API testing

### Learning Resources

- [JavaScript ES6+ Guide](https://javascript.info/)
- [React Documentation](https://reactjs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/)
- [MongoDB University](https://university.mongodb.com/)

## 🙏 Thank You

Thank you for taking the time to contribute to Anton! Your contributions make this project better for everyone. We look forward to collaborating with you!

---

**Questions?** Feel free to reach out to the maintainers at [raj.harshit960@gmail.com](mailto:raj.harshit960@gmail.com) or open a discussion on GitHub.

**Happy coding!** 🚀 