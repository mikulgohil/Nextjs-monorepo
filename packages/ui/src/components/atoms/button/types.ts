import type { BaseProps } from '../types'
import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from './variants'

export interface ButtonProps extends 
  BaseProps,
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {} 