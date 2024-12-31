import { Preview } from '@storybook/react'
import '../src/styles/globals.css'

// Import theme CSS files
import '../../prime-theme/src/styles/theme.css'
import '../../sharp-theme/src/styles/theme.css'
import '../../focus-theme/src/styles/theme.css'

const preview: Preview = {
  parameters: {
    themes: {
      default: 'prime',
      list: [
        { name: 'prime', class: 'theme-prime', color: '#2563eb' },
        { name: 'sharp', class: 'theme-sharp', color: '#059669' },
        { name: 'focus', class: 'theme-focus', color: '#7c3aed' },
      ]
    }
  }
}

export default preview 