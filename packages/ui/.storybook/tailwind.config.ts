import { baseConfig } from '@repo/config/tailwind/base'

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    '../src/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
  ],
} 