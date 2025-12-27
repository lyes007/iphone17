import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'iPhone 17',
  description: 'iPhone 17 Product Display',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

