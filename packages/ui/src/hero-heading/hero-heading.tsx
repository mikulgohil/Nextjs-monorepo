import React from 'react'
import { Button } from '../button'
import type { HeroHeadingProps } from './types'

export function HeroHeading({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  className = '',
  children,
}: HeroHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="font-heading text-primary text-4xl font-bold tracking-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 font-sans text-lg leading-8 text-gray-600">
        {subtitle}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button
          onClick={onCtaClick}
          size="lg"
          className="rounded-full px-8 font-sans"
        >
          {ctaText}
        </Button>
        {children}
      </div>
    </div>
  )
}
