# Contributing to Amarjit Portfolio

First off, thank you for considering contributing! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**When creating a bug report, include:**

- A clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior
- Screenshots if applicable
- Your environment (OS, browser, Node.js version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**When creating an enhancement suggestion, include:**

- A clear and descriptive title
- Detailed description of the proposed feature
- Explanation of why this would be useful
- Examples of how it would work

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`pnpm test && pnpm lint`)
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Development Setup

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Create .env.local
cp .env.example .env.local

# Start development server
pnpm dev
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### Code Style

This project uses:

- **ESLint** for linting
- **Prettier** for code formatting
- **TypeScript** for type checking

Run these commands before committing:

```bash
pnpm lint:fix
pnpm format
pnpm type-check
```

### Commit Messages

We use conventional commit messages:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add dark mode toggle to header`

## Project Structure

```
src/
├── app/           # Next.js pages and API routes
├── components/    # React components
├── lib/           # Utility functions
├── styles/        # Global styles
└── types/         # TypeScript types
```

### Component Guidelines

- Use functional components with hooks
- Place component tests in `__tests__` folder
- Export components from index files
- Use TypeScript interfaces for props

### Styling Guidelines

- Use Tailwind CSS utility classes
- Create custom classes in `globals.css` for reusable patterns
- Follow the existing design system (colors, spacing, etc.)

## Questions?

Feel free to open an issue with your question or reach out directly.

Thank you for contributing! 🙏
