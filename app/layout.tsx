import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google'
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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Geodel Geothermal | Building the Next Generation of Geothermal Infrastructure',
  description: 'Geodel is developing better ways to drill, exchange, store and use thermal energy beneath our buildings. Starting in Pennsylvania and expanding across the East Coast.',
  generator: 'v0.app',
  keywords: ['geothermal energy', 'borehole drilling', 'thermal networks', 'heat pumps', 'subsurface intelligence', 'thermal storage', 'Philadelphia', 'workforce development'],
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable} bg-[#F7F6F3]`}>
      <body className="font-sans antialiased text-[#0B1211]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
