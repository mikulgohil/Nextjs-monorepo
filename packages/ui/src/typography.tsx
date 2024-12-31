import { clsx } from 'clsx'
import React from 'react'

export const Heading = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={clsx('font-heading text-2xl font-bold', className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export const Text = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={clsx('font-sans text-base', className)} {...props}>
      {children}
    </p>
  )
}
