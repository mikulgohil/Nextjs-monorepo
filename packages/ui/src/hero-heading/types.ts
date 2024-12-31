import { BaseProps } from '../types'

export interface HeroHeadingProps extends BaseProps {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick?: () => void
}
