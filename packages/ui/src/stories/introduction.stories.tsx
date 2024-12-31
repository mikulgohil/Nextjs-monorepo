import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    docs: {
      description: {
        component: 'Welcome to @repo/ui - This is the shared UI component library for our monorepo.'
      }
    }
  }
};

export default meta;

export const Welcome = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Welcome to @repo/ui</h1>
      <p>This is the shared UI component library for our monorepo.</p>
    </div>
  );
}; 