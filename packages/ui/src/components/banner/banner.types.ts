export interface ActionButton {
  label: string
  onClick: () => void
}

export interface BannerProps {
  /** Main title of the banner */
  title?: string
  /** Description text below the title */
  description?: string
  /** URL of the banner image */
  imageUrl?: string
  /** Position of the image relative to content */
  imagePosition?: 'left' | 'right'
  /** Primary call-to-action button */
  primaryAction?: ActionButton
  /** Secondary call-to-action button */
  secondaryAction?: ActionButton
  /** Additional CSS classes */
  className?: string
}
