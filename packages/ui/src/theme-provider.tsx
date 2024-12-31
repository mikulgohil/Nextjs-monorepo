'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { primeTheme } from '@repo/config/tailwind/themes/prime-theme'
import { sharpTheme } from '@repo/config/tailwind/themes/sharp-theme'
import { focusTheme } from '@repo/config/tailwind/themes/focus-theme'

type Theme = 'prime' | 'sharp' | 'focus'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const themes = {
  prime: primeTheme,
  sharp: sharpTheme,
  focus: focusTheme,
}

export function ThemeProvider({
  children,
  defaultTheme = 'prime'
}: {
  children: React.ReactNode
  defaultTheme?: Theme
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = document.documentElement
    const currentTheme = themes[theme]

    Object.entries(currentTheme.cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 