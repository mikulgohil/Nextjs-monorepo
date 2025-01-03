import type { Preview } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from '../src/theme-provider'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const currentTheme = context.globals?.theme || 'prime';
      return (
        <ThemeProvider defaultTheme={currentTheme as 'prime' | 'sharp' | 'focus'}>
          <div className="p-4" data-theme={currentTheme}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
}

export default preview
