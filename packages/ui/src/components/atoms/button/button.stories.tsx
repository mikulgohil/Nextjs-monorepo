import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg'
  }
} 