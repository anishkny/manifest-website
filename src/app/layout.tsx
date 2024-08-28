import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HotjarSnippet from './components/Hotjar'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manifest - Effortless Backends',
  description:
    'We are building the simplest backend in the world. Do you want to embark on this adventure with us?',
  openGraph: {
    type: 'website',
    url: 'https://manifest.build',
    title: 'Manifest - Effortless Backends',
    description:
      'We are building the simplest backend in the world. Do you want to embark on this adventure with us?',
    siteName: 'Manifest',
    images: [
      {
        url: 'https://manifest.build/assets/images/og-image.png'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {children}
        <HotjarSnippet />
        <GoogleAnalytics gaId="G-FPJ74C43L9" />
      </body>
    </html>
  )
}
