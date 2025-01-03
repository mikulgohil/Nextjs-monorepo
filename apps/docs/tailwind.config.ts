import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    
  },
  plugins: []
}

export default config 