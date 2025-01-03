import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    // Reference all stories from packages
    "../../ui/**/*.stories.@(js|jsx|ts|tsx)",
    "../../icons/**/*.stories.@(js|jsx|ts|tsx)",
    // Add other package paths as needed
  ],
  framework: '@storybook/nextjs',
  core: {
    disableTelemetry: true,
  },
  // Add Storysource and Accessibility addons
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
};

export default config; 