import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Pinyon_Script, Allura } from 'next/font/google'
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

const allura = Allura({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-names-face'
})

const SITE_URL = 'https://nuwani-bharatha-weddinginvitation.vercel.app'
const SHARE_DESCRIPTION = 'Join us as we celebrate our wedding on 11th December 2026 · St. Anthony\'s Church, Colpetty & Cinnamon Grand Colombo.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Nuwani & Bharatha Wedding',
    title: 'Nuwani & Bharatha · Wedding Invitation',
    description: SHARE_DESCRIPTION,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Nuwani & Bharatha wedding invitation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuwani & Bharatha · Wedding Invitation',
    description: SHARE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  title: 'Nuwani & Bharatha Wedding',
  description: 'Join us as we celebrate the wedding of Nuwani and Bharatha on 11th December 2026 at St. Anthony\'s Church, Colpetty and Cinnamon Grand Colombo.',
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
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${pinyonScript.variable} ${allura.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
