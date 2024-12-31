# Next.js Component Library Monorepo

A modern, scalable monorepo setup featuring multiple Next.js applications and a shared UI component library. Built with TypeScript, Tailwind CSS, and Turborepo for optimal development experience.

## Repository Structure

```
├── apps/
│   ├── docs/          # Documentation site
│   ├── focus/         # Focus theme application
│   ├── prime/         # Prime theme application
│   └── sharp/         # Sharp theme application
├── packages/
│   ├── config/        # Shared configuration
│   │   ├── tailwind/  # Tailwind themes and config
│   │   └── typescript/# TypeScript configuration
│   └── ui/            # Shared UI component library
```

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component Library:** Custom UI package with Storybook
- **Monorepo Management:** Turborepo with pnpm workspaces
- **Testing:** Jest with React Testing Library
- **CI/CD:** GitHub Actions with Vercel deployment
- **Code Quality:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm 8.0.0 or later

### Installation

```bash
# Install dependencies
pnpm install
```

## Development

```bash
# Start all applications in development mode
pnpm dev

# Start specific applications
pnpm dev:prime  # Start Prime theme app
pnpm dev:sharp  # Start Sharp theme app
pnpm dev:focus  # Start Focus theme app

# Start Storybook
pnpm storybook

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## Building

```bash
# Build all packages and applications
pnpm build

# Build Storybook
pnpm build:storybook
```

## Project Structure

### Applications

- **docs**: Documentation and examples
- **focus**: Focus theme implementation
- **prime**: Prime theme implementation
- **sharp**: Sharp theme implementation

### Packages

- **@repo/ui**: Shared UI component library

  - Built with TypeScript and Tailwind CSS
  - Includes Storybook for component documentation
  - Comprehensive test coverage with Jest

- **@repo/config**: Shared configuration
  - Tailwind themes and configuration
  - TypeScript configuration
  - Shared build settings

## Testing

The project uses Jest and React Testing Library for testing. Run tests with:

```bash
pnpm test
```

## Deployment

The project is configured for automatic deployment to Vercel through GitHub Actions. The deployment workflow:

1. Triggers on push to main branch
2. Installs dependencies with pnpm
3. Builds all packages and applications
4. Deploys to Vercel

## Cleaning

To clean all build artifacts and dependencies:

```bash
pnpm clean
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Run tests and ensure they pass
5. Submit a pull request

## License

This project is private and not available for public use.
