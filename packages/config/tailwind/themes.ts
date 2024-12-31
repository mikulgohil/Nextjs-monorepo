import { focusTheme } from './themes/focus-theme'
import { primeTheme } from './themes/prime-theme'
import { sharpTheme } from './themes/sharp-theme'

export const themes = {
  focus: focusTheme,
  prime: primeTheme,
  sharp: sharpTheme,
}

export type ThemeType = keyof typeof themes

// Keyframes for animations
export const keyframes = {
  'fade-in': {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  'slide-up': {
    '0%': { transform: 'translateY(10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  'slide-down': {
    '0%': { transform: 'translateY(-10px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  'slide-left': {
    '0%': { transform: 'translateX(10px)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  'slide-right': {
    '0%': { transform: 'translateX(-10px)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
}

export { focusTheme, primeTheme, sharpTheme }
