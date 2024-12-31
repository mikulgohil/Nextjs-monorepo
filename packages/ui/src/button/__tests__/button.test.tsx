import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies default variant and size classes', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'bg-primary',
      'text-white',
      'h-10',
      'px-4',
      'py-2'
    )
  })

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-secondary', 'text-white')
  })

  it('applies accent variant classes', () => {
    render(<Button variant="accent">Accent Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-accent', 'text-white')
  })

  it('applies outline variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border', 'border-primary', 'text-primary')
  })

  it('applies small size classes', () => {
    render(<Button size="sm">Small Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-9', 'px-3')
  })

  it('applies large size classes', () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-11', 'px-8')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Button with ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('applies additional className prop', () => {
    render(<Button className="custom-class">Button with custom class</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('forwards additional props to button element', () => {
    render(
      <Button data-testid="test-button" disabled>
        Disabled Button
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-testid', 'test-button')
    expect(button).toBeDisabled()
  })
})
