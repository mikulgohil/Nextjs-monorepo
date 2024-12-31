import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HeroHeading } from '../hero-heading'

describe('HeroHeading', () => {
  const defaultProps = {
    title: 'Welcome to our site',
    subtitle: 'Discover amazing features',
    ctaText: 'Get Started',
  }

  it('renders all required props correctly', () => {
    render(<HeroHeading {...defaultProps} />)

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.ctaText)).toBeInTheDocument()
  })

  it('applies custom className correctly', () => {
    render(<HeroHeading {...defaultProps} className="custom-class" />)

    const container = screen.getByText(defaultProps.title).closest('div')
    expect(container).toHaveClass('custom-class')
  })

  it('calls onCtaClick when CTA button is clicked', () => {
    const onCtaClick = jest.fn()
    render(<HeroHeading {...defaultProps} onCtaClick={onCtaClick} />)

    const button = screen.getByText(defaultProps.ctaText)
    fireEvent.click(button)

    expect(onCtaClick).toHaveBeenCalledTimes(1)
  })

  it('renders children when provided', () => {
    render(
      <HeroHeading {...defaultProps}>
        <button>Secondary Action</button>
      </HeroHeading>
    )

    expect(screen.getByText('Secondary Action')).toBeInTheDocument()
  })

  it('applies correct heading styles', () => {
    render(<HeroHeading {...defaultProps} />)

    const heading = screen.getByText(defaultProps.title)
    expect(heading).toHaveClass(
      'text-4xl',
      'font-bold',
      'tracking-tight',
      'font-heading',
      'text-primary'
    )
  })

  it('applies correct subtitle styles', () => {
    render(<HeroHeading {...defaultProps} />)

    const subtitle = screen.getByText(defaultProps.subtitle)
    expect(subtitle).toHaveClass(
      'text-lg',
      'leading-8',
      'text-gray-600',
      'font-sans'
    )
  })

  it('applies correct CTA button styles', () => {
    render(<HeroHeading {...defaultProps} />)

    const button = screen.getByText(defaultProps.ctaText)
    expect(button).toHaveClass('rounded-full', 'px-8', 'font-sans')
  })
})
