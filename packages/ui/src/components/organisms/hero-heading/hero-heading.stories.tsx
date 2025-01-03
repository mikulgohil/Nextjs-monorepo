import type { Meta, StoryObj } from '@storybook/react'
import { HeroHeading } from './hero-heading'

const meta: Meta<typeof HeroHeading> = {
  title: 'Components/HeroHeading',
  component: HeroHeading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof HeroHeading>

export const Default: Story = {
  args: {
    title: 'Start your free trial today',
    subtitle: 'Try Flowbite Platform for 30 days. No credit card required.',
    ctaText: 'Free trial for 30 days'
  }
}

export const WithCustomStyles: Story = {
  args: {
    title: 'Start your free trial today',
    subtitle: 'Try Flowbite Platform for 30 days. No credit card required.',
    ctaText: 'Free trial for 30 days',
    className: 'max-w-3xl mx-auto'
  }
} 