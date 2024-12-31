import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/globals.css';

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
    withThemeByClassName({
      themes: {
        prime: 'theme-prime',
        sharp: 'theme-sharp',
        focus: 'theme-focus',
      },
      defaultTheme: 'prime',
    }),
  ],
};

export default preview;
