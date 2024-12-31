# Design System Style Guide

This document outlines the design system used across our projects. Each project has its own distinct theme while sharing a common foundation of design tokens and utilities.

## Themes Overview

### Focus Theme
A modern, clean design system optimized for readability and focus:
- Colors: Blue-based primary with purple secondary and amber accents
- Typography: Inter for body text, Lexend for headings
- Characteristics: Balanced spacing, subtle shadows, smooth transitions

### Prime Theme
A bold, vibrant design system that makes a strong impact:
- Colors: Electric blue primary with vibrant purple secondary and hot pink accents
- Typography: SF Pro Display for body text, Montserrat for headings
- Characteristics: Larger spacing, dramatic shadows, energetic animations

### Sharp Theme
A minimalist, high-contrast design system emphasizing clarity:
- Colors: Monochromatic base with bold red accents
- Typography: Archivo for body text, Space Grotesk for headings
- Characteristics: Precise spacing, architectural shadows, quick transitions

## Design Tokens

### Colors

Each theme includes the following color tokens:
\`\`\`css
--color-primary
--color-primary-light
--color-primary-dark
--color-secondary
--color-secondary-light
--color-secondary-dark
--color-accent
--color-accent-light
--color-accent-dark
--color-background
--color-background-alt
--color-surface
--color-surface-hover
--color-surface-active
--color-text
--color-text-muted
--color-text-inverted
--color-border
--color-border-focus
--color-success
--color-success-light
--color-error
--color-error-light
--color-warning
--color-warning-light
--color-info
--color-info-light
\`\`\`

Usage:
\`\`\`tsx
<div className="bg-primary text-primary-light border-primary-dark" />
\`\`\`

### Typography

Font Families:
\`\`\`css
font-sans      /* Primary text font */
font-heading   /* Heading font */
font-mono      /* Monospace font */
\`\`\`

Font Sizes:
\`\`\`css
text-display-1  /* Largest display text */
text-display-2  /* Secondary display text */
text-h1        /* Main heading */
text-h2        /* Section heading */
text-h3        /* Subsection heading */
text-h4        /* Small heading */
text-body-lg   /* Large body text */
text-body      /* Default body text */
text-body-sm   /* Small body text */
text-caption   /* Caption text */
\`\`\`

Usage:
\`\`\`tsx
<h1 className="font-heading text-h1">Heading</h1>
<p className="font-sans text-body">Body text</p>
\`\`\`

### Spacing

Consistent spacing scale across all themes:
\`\`\`css
spacing-2xs    /* Extra extra small */
spacing-xs     /* Extra small */
spacing-sm     /* Small */
spacing-md     /* Medium */
spacing-lg     /* Large */
spacing-xl     /* Extra large */
spacing-2xl    /* Extra extra large */
spacing-3xl    /* Extra extra extra large */
\`\`\`

Usage:
\`\`\`tsx
<div className="p-md mb-lg gap-sm" />
\`\`\`

### Border Radius

Border radius tokens:
\`\`\`css
rounded-none   /* No radius */
rounded-sm     /* Small radius */
rounded-md     /* Medium radius */
rounded-lg     /* Large radius */
rounded-xl     /* Extra large radius */
rounded-full   /* Full radius (circular) */
\`\`\`

Usage:
\`\`\`tsx
<button className="rounded-md hover:rounded-lg" />
\`\`\`

### Shadows

Box shadow variations:
\`\`\`css
shadow-sm     /* Small shadow */
shadow-md     /* Medium shadow */
shadow-lg     /* Large shadow */
shadow-xl     /* Extra large shadow */
\`\`\`

Usage:
\`\`\`tsx
<div className="shadow-md hover:shadow-lg" />
\`\`\`

### Animations & Transitions

Animation utilities:
\`\`\`css
animate-fade-in
animate-slide-up
animate-slide-down
animate-slide-left
animate-slide-right
\`\`\`

Transition durations:
\`\`\`css
duration-fast
duration-normal
duration-slow
\`\`\`

Transition timing functions:
\`\`\`css
ease-default
ease-in-out
ease-bounce
\`\`\`

Usage:
\`\`\`tsx
<div className="animate-fade-in duration-normal ease-default" />
\`\`\`

## Best Practices

1. **Theme Consistency**: Stick to the chosen theme's design tokens for your project.
2. **Responsive Design**: Use the spacing and typography scales to maintain consistency across breakpoints.
3. **Accessibility**: Ensure sufficient color contrast and readable font sizes.
4. **Component Patterns**: Leverage the design tokens in reusable component patterns.
5. **Dark Mode**: Use CSS variables to support both light and dark modes when needed.

## Component Examples

### Buttons

Primary Button:
\`\`\`tsx
<button className="
  bg-primary
  text-text-inverted
  px-md
  py-sm
  rounded-md
  shadow-sm
  hover:shadow-md
  duration-fast
  ease-default
">
  Click Me
</button>
\`\`\`

### Cards

Basic Card:
\`\`\`tsx
<div className="
  bg-surface
  p-lg
  rounded-lg
  shadow-md
  border
  border-border
  hover:shadow-lg
  duration-normal
">
  <h3 className="font-heading text-h3 mb-md">Card Title</h3>
  <p className="font-sans text-body text-text-muted">Card content</p>
</div>
\`\`\`

### Text Sections

Content Section:
\`\`\`tsx
<section className="space-y-lg">
  <h2 className="font-heading text-h2 text-primary">Section Title</h2>
  <p className="font-sans text-body text-text">
    Section content with <span className="text-accent">highlighted</span> text.
  </p>
</section>
\`\`\`
