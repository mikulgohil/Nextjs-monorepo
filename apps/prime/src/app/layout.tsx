import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prime Project',
  description: 'Prime project using shared UI components'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="theme-prime">
        {children}
      </body>
    </html>
  )
}
