import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './banner'
import { bannerMockData } from './banner.mock'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: bannerMockData.basic,
}

export const LeftImage: Story = {
  args: bannerMockData.leftImage,
}

export const Minimal: Story = {
  args: bannerMockData.minimal,
}

export const NoImage: Story = {
  args: {
    title: 'Banner Without Image',
    description: 'This banner demonstrates the layout without an image.',
    primaryAction: {
      label: 'Get Started',
      onClick: () => console.log('Clicked'),
    },
  },
}
