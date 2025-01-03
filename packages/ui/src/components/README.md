# Components Directory Structure

This directory contains all UI components organized using Atomic Design principles:

## Directory Structure

```
components/
├── atoms/        # Basic building blocks
├── molecules/    # Combinations of atoms
├── organisms/    # Complex components
└── templates/    # Page templates/layouts
```

## Guidelines

### Atoms
- Basic building blocks of the interface
- Single responsibility
- Examples: buttons, inputs, labels, icons
- Should be highly reusable and not dependent on other components

### Molecules
- Combinations of atoms
- Simple groups of UI elements functioning together
- Examples: search bars, form fields, menu items
- Should be relatively simple and focused on a single responsibility

### Organisms
- Complex UI components
- Combinations of molecules and/or atoms
- Examples: headers, footers, forms, data tables
- Can be more specific to your application's needs

### Templates
- Page-level objects
- Define content structure
- Examples: page layouts, grid systems
- Focus on content structure rather than the actual content

## Component Structure

Each component should follow this structure:
```
component-name/
├── index.ts           # Exports
├── component-name.tsx # Main component
├── types.ts          # TypeScript interfaces/types
├── variants.ts       # Component variants/styles
├── component-name.stories.tsx  # Storybook stories
└── __tests__/        # Tests directory
    └── component-name.test.tsx
```

## Best Practices

1. Each component should have its own directory
2. Use index.ts files for clean exports
3. Keep components focused and single-responsibility
4. Write comprehensive tests and stories
5. Document props and usage in stories
6. Use TypeScript for type safety
7. Follow project's naming conventions
8. Keep styling consistent with design system
