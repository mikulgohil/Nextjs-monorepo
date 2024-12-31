import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sharp Project',
  description: 'Sharp project using shared UI components'
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