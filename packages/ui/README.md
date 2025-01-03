# UI Component Library

A scalable and maintainable UI component library organized using Atomic Design principles.

## Directory Structure

```
src/
├── components/          # UI components organized by atomic design
│   ├── atoms/          # Basic building blocks (button, input, etc)
│   ├── molecules/      # Combinations of atoms (search bar, form field)
│   ├── organisms/      # Complex components (header, footer)
│   └── templates/      # Page templates/layouts
├── theme/              # Theme configuration and providers
├── utils/              # Utility functions and mock data
├── hooks/              # Custom React hooks
├── styles/             # Global styles
└── types/              # Shared TypeScript types
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run Storybook:
```bash
pnpm run storybook
```

3. Build the package:
```bash
pnpm run build
```

## Development Guidelines

1. **Component Creation**
   - Place new components in appropriate atomic design category
   - Follow the component structure defined in components/README.md
   - Include tests, stories, and proper documentation

2. **Code Style**
   - Use TypeScript for all components
   - Follow project's ESLint and Prettier configurations
   - Write comprehensive tests
   - Document component props and usage

3. **Theme Usage**
   - Use theme tokens for consistency
   - Follow design system guidelines
   - Maintain responsive design principles

4. **Testing**
   - Write unit tests for all components
   - Include visual regression tests in Storybook
   - Test across different themes and viewports

## Documentation

Each directory contains its own README.md with specific guidelines:

- [Components Documentation](src/components/README.md)
- [Theme Documentation](src/theme/README.md)
- [Utils Documentation](src/utils/README.md)

## Best Practices

1. Keep components focused and single-responsibility
2. Maintain consistent naming conventions
3. Document all props and component usage
4. Write comprehensive tests
5. Follow atomic design principles
6. Use TypeScript for type safety
7. Keep styling consistent with design system
8. Regular maintenance and updates
