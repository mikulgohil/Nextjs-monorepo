import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'body1',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1 text example',
  },
};

export const Truncated: Story = {
  args: {
    truncate: true,
    children: 'This is a very long text that will be truncated when it reaches the end of its container width.',
  },
};

export const MultiLineTruncated: Story = {
  args: {
    truncate: true,
    lines: 2,
    children: `This is a very long text that will be truncated after two lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
}; 