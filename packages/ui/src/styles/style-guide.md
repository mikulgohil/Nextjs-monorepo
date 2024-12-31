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
font-sans /_ Primary text font _/
font-heading /_ Heading font _/
font-mono /_ Monospace font _/
\`\`\`

Font Sizes:
\`\`\`css
text-display-1 /_ Largest display text _/
text-display-2 /_ Secondary display text _/
text-h1 /_ Main heading _/
text-h2 /_ Section heading _/
text-h3 /_ Subsection heading _/
text-h4 /_ Small heading _/
text-body-lg /_ Large body text _/
text-body /_ Default body text _/
text-body-sm /_ Small body text _/
text-caption /_ Caption text _/
\`\`\`

Usage:
\`\`\`tsx

<h1 className="font-heading text-h1">Heading</h1>
<p className="font-sans text-body">Body text</p>
\`\`\`

### Spacing

Consistent spacing scale across all themes:
\`\`\`css
spacing-2xs /_ Extra extra small _/
spacing-xs /_ Extra small _/
spacing-sm /_ Small _/
spacing-md /_ Medium _/
spacing-lg /_ Large _/
spacing-xl /_ Extra large _/
spacing-2xl /_ Extra extra large _/
spacing-3xl /_ Extra extra extra large _/
\`\`\`

Usage:
\`\`\`tsx

<div className="p-md mb-lg gap-sm" />
\`\`\`

### Border Radius

Border radius tokens:
\`\`\`css
rounded-none /_ No radius _/
rounded-sm /_ Small radius _/
rounded-md /_ Medium radius _/
rounded-lg /_ Large radius _/
rounded-xl /_ Extra large radius _/
rounded-full /_ Full radius (circular) _/
\`\`\`

Usage:
\`\`\`tsx
<button className="rounded-md hover:rounded-lg" />
\`\`\`

### Shadows

Box shadow variations:
\`\`\`css
shadow-sm /_ Small shadow _/
shadow-md /_ Medium shadow _/
shadow-lg /_ Large shadow _/
shadow-xl /_ Extra large shadow _/
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
