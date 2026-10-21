import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Pinyon_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import './enhancements.css'

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
})

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-script-face'
})

export const metadata: Metadata = {
  title: 'Nuwani & Bharatha Wedding',
  description: 'Join us as we celebrate the wedding of Nuwani and Bharatha on 11th December 2026 at St. Anthony\'s Church, Kollupitiya and Cinnamon Grand Colombo.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#A6D5F7',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${pinyonScript.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
