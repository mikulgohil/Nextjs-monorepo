import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#404040',
        accent: '#ff4040',
        background: '#ffffff',
        text: '#000000'
      }
    }
  },
  plugins: []
}

export default config 