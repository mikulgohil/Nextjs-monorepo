import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#7928ca',
        accent: '#ff0080',
        background: '#ffffff',
        text: '#000000',
      },
    },
  },
  plugins: [],
}

export default config
