const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    staticDirs: ['../public'],
    // Set output directory
    outDir: '../storybook-static',
    // ... other config
  };
  
  export default config; 