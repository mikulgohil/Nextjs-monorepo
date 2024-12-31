import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Focus Project',
  description: 'Focus project using shared UI components'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 