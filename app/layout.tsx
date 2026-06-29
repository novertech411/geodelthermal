import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Geodel - Hydrological Intelligence for Critical Minerals',
  description: 'Geodel provides real-time hydrological intelligence for critical mineral operations, enabling mining companies to monitor, predict, and optimize water systems.',
  generator: 'v0.app',
  keywords: ['subsurface intelligence', 'geospatial', 'energy', 'geothermal', 'exploration', 'site assessment'],
  icons: {
    icon: [

      {
        url: '/icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-[#14101f]`}>
      <body className="font-sans antialiased text-[#fff]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
