import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Heading, Text } from '../typography'

describe('Typography Components', () => {
  describe('Heading', () => {
    it('renders children correctly', () => {
      render(<Heading>Test Heading</Heading>)
      expect(screen.getByText('Test Heading')).toBeInTheDocument()
    })

    it('applies default styles', () => {
      render(<Heading>Test Heading</Heading>)
      const heading = screen.getByText('Test Heading')
      expect(heading).toHaveClass('font-heading', 'text-2xl', 'font-bold')
    })

    it('merges custom className with default styles', () => {
      render(<Heading className="custom-class">Test Heading</Heading>)
      const heading = screen.getByText('Test Heading')
      expect(heading).toHaveClass('font-heading', 'text-2xl', 'font-bold', 'custom-class')
    })

    it('forwards additional props', () => {
      render(
        <Heading data-testid="test-heading" id="heading-1">
          Test Heading
        </Heading>
      )
      const heading = screen.getByText('Test Heading')
      expect(heading).toHaveAttribute('data-testid', 'test-heading')
      expect(heading).toHaveAttribute('id', 'heading-1')
    })

    it('renders as h2 element', () => {
      render(<Heading>Test Heading</Heading>)
      const heading = screen.getByText('Test Heading')
      expect(heading.tagName).toBe('H2')
    })
  })

  describe('Text', () => {
    it('renders children correctly', () => {
      render(<Text>Test Text</Text>)
      expect(screen.getByText('Test Text')).toBeInTheDocument()
    })

    it('applies default styles', () => {
      render(<Text>Test Text</Text>)
      const text = screen.getByText('Test Text')
      expect(text).toHaveClass('font-sans', 'text-base')
    })

    it('merges custom className with default styles', () => {
      render(<Text className="custom-class">Test Text</Text>)
      const text = screen.getByText('Test Text')
      expect(text).toHaveClass('font-sans', 'text-base', 'custom-class')
    })

    it('forwards additional props', () => {
      render(
        <Text data-testid="test-text" id="text-1">
          Test Text
        </Text>
      )
      const text = screen.getByText('Test Text')
      expect(text).toHaveAttribute('data-testid', 'test-text')
      expect(text).toHaveAttribute('id', 'text-1')
    })

    it('renders as p element', () => {
      render(<Text>Test Text</Text>)
      const text = screen.getByText('Test Text')
      expect(text.tagName).toBe('P')
    })
  })
})
