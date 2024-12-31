import React from 'react'
import { render, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider, useTheme } from '../theme-provider'

// Mock the theme configurations
jest.mock('../../../packages/config/tailwind/themes/prime-theme', () => ({
  primeTheme: {
    cssVariables: {
      '--color-primary': '#0070f3',
      '--color-secondary': '#7928ca',
    },
  },
}))

jest.mock('../../../packages/config/tailwind/themes/sharp-theme', () => ({
  sharpTheme: {
    cssVariables: {
      '--color-primary': '#000000',
      '--color-secondary': '#333333',
    },
  },
}))

jest.mock('../../../packages/config/tailwind/themes/focus-theme', () => ({
  focusTheme: {
    cssVariables: {
      '--color-primary': '#1a1a1a',
      '--color-secondary': '#4a4a4a',
    },
  },
}))

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Reset document root styles before each test
    document.documentElement.style.cssText = ''
  })

  it('renders children correctly', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test Content</div>
      </ThemeProvider>
    )
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies default theme (prime) CSS variables', () => {
    render(
      <ThemeProvider>
        <div>Content</div>
      </ThemeProvider>
    )

    expect(
      document.documentElement.style.getPropertyValue('--color-primary')
    ).toBe('#0070f3')
    expect(
      document.documentElement.style.getPropertyValue('--color-secondary')
    ).toBe('#7928ca')
  })

  it('applies specified default theme CSS variables', () => {
    render(
      <ThemeProvider defaultTheme="sharp">
        <div>Content</div>
      </ThemeProvider>
    )

    expect(
      document.documentElement.style.getPropertyValue('--color-primary')
    ).toBe('#000000')
    expect(
      document.documentElement.style.getPropertyValue('--color-secondary')
    ).toBe('#333333')
  })

  it('updates CSS variables when theme changes', () => {
    const TestComponent = () => {
      const { setTheme } = useTheme()
      return <button onClick={() => setTheme('focus')}>Change Theme</button>
    }

    const { getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    // Initial theme (prime)
    expect(
      document.documentElement.style.getPropertyValue('--color-primary')
    ).toBe('#0070f3')

    // Change theme to focus
    act(() => {
      getByText('Change Theme').click()
    })

    expect(
      document.documentElement.style.getPropertyValue('--color-primary')
    ).toBe('#1a1a1a')
  })
})

describe('useTheme', () => {
  it('throws error when used outside ThemeProvider', () => {
    const TestComponent = () => {
      useTheme()
      return null
    }

    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(() => {
      render(<TestComponent />)
    }).toThrow('useTheme must be used within a ThemeProvider')

    consoleError.mockRestore()
  })

  it('provides theme context when used within ThemeProvider', () => {
    const TestComponent = () => {
      const { theme } = useTheme()
      return <div>Current theme: {theme}</div>
    }

    const { getByText } = render(
      <ThemeProvider defaultTheme="sharp">
        <TestComponent />
      </ThemeProvider>
    )

    expect(getByText('Current theme: sharp')).toBeInTheDocument()
  })

  it('allows theme switching through context', () => {
    const TestComponent = () => {
      const { theme, setTheme } = useTheme()
      return (
        <div>
          <div>Current theme: {theme}</div>
          <button onClick={() => setTheme('focus')}>Switch to Focus</button>
        </div>
      )
    }

    const { getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    expect(getByText('Current theme: prime')).toBeInTheDocument()

    act(() => {
      getByText('Switch to Focus').click()
    })

    expect(getByText('Current theme: focus')).toBeInTheDocument()
  })
})
