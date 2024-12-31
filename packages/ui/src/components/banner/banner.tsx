import React from 'react'
import Image from 'next/image'
import { cn } from '../../utils/cn'
import type { BannerProps } from './banner.types'

/**
 * Banner component that displays a hero section with configurable image position
 * and optional content elements
 */
export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  imageUrl,
  imagePosition = 'right',
  primaryAction,
  secondaryAction,
  className,
}) => {
  const imageContent = imageUrl && (
    <div className="relative h-[300px] w-full md:h-[400px] md:w-1/2">
      <Image
        src={imageUrl}
        alt={title || 'Banner image'}
        fill
        className="rounded-lg object-cover"
        priority
      />
    </div>
  )

  const contentSection = (
    <div className="w-full space-y-6 px-4 md:w-1/2 md:px-8">
      {title && (
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-lg text-gray-600 md:text-xl dark:text-gray-300">
          {description}
        </p>
      )}
      {(primaryAction || secondaryAction) && (
        <div className="flex flex-col gap-4 sm:flex-row">
          {primaryAction && (
            <button
              onClick={primaryAction.onClick}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg btn-primary"
            >
              {primaryAction.label}
            </button>
          )}
          {secondaryAction && (
            <button
              onClick={secondaryAction.onClick}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg btn-secondary"
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      )}
    </div>
  )

  return (
    <section
      className={cn(
        'container mx-auto py-12 md:py-24',
        'flex flex-col items-center gap-8 md:flex-row md:gap-12',
        imagePosition === 'left' && 'md:flex-row-reverse',
        className
      )}
    >
      <>
        {imageContent}
        {contentSection}
      </>
    </section>
  )
}
