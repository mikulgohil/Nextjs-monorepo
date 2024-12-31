import type { Config } from 'tailwindcss'
import { keyframes } from './themes.ts'

export const baseConfig: Partial<Config> = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          alt: 'var(--color-background-alt)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
          active: 'var(--color-surface-active)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          focus: 'var(--color-border-focus)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          light: 'var(--color-success-light)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          light: 'var(--color-error-light)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          light: 'var(--color-warning-light)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          light: 'var(--color-info-light)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        'display-1': [
          'var(--font-size-display-1)',
          { lineHeight: 'var(--line-height-display-1)' },
        ],
        'display-2': [
          'var(--font-size-display-2)',
          { lineHeight: 'var(--line-height-display-2)' },
        ],
        h1: ['var(--font-size-h1)', { lineHeight: 'var(--line-height-h1)' }],
        h2: ['var(--font-size-h2)', { lineHeight: 'var(--line-height-h2)' }],
        h3: ['var(--font-size-h3)', { lineHeight: 'var(--line-height-h3)' }],
        h4: ['var(--font-size-h4)', { lineHeight: 'var(--line-height-h4)' }],
        'body-lg': [
          'var(--font-size-body-lg)',
          { lineHeight: 'var(--line-height-body-lg)' },
        ],
        body: [
          'var(--font-size-body)',
          { lineHeight: 'var(--line-height-body)' },
        ],
        'body-sm': [
          'var(--font-size-body-sm)',
          { lineHeight: 'var(--line-height-body-sm)' },
        ],
        caption: [
          'var(--font-size-caption)',
          { lineHeight: 'var(--line-height-caption)' },
        ],
      },
      spacing: {
        '2xs': 'var(--spacing-2xs)',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      borderRadius: {
        none: '0',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: '9999px',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      keyframes,
      animation: {
        'fade-in': 'fade-in var(--duration-normal) var(--ease-default)',
        'slide-up': 'slide-up var(--duration-normal) var(--ease-default)',
        'slide-down': 'slide-down var(--duration-normal) var(--ease-default)',
        'slide-left': 'slide-left var(--duration-normal) var(--ease-default)',
        'slide-right': 'slide-right var(--duration-normal) var(--ease-default)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
      },
      transitionTimingFunction: {
        'ease-default': 'var(--ease-default)',
        'ease-in-out': 'var(--ease-in-out)',
        'ease-bounce': 'var(--ease-bounce)',
      },
      buttons: {
        'btn-primary': {
          backgroundColor: 'var(--primary-600)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'var(--primary-700)',
          },
        },
        'btn-secondary': {
          backgroundColor: 'var(--gray-100)',
          color: 'var(--gray-900)',
          '&:hover': {
            backgroundColor: 'var(--gray-200)',
          },
        },
      },
    },
  },
  plugins: [],
}
