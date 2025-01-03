import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from '../typography';

describe('Typography', () => {
  it('renders children correctly', () => {
    render(<Typography>Test Content</Typography>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    render(<Typography variant="h1">Heading</Typography>);
    const element = screen.getByText('Heading');
    expect(element.tagName).toBe('H1');
    expect(element).toHaveClass('text-4xl', 'font-bold');
  });

  it('applies alignment classes correctly', () => {
    render(<Typography align="center">Centered Text</Typography>);
    expect(screen.getByText('Centered Text')).toHaveClass('text-center');
  });

  it('handles truncation correctly', () => {
    render(<Typography truncate>Truncated Text</Typography>);
    expect(screen.getByText('Truncated Text')).toHaveClass('truncate');
  });

  it('handles multi-line truncation correctly', () => {
    render(<Typography truncate lines={2}>Multi-line Text</Typography>);
    expect(screen.getByText('Multi-line Text')).toHaveClass('line-clamp-2');
  });
}); 