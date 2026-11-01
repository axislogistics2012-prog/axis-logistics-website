import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { company } from '@/lib/site'
import './globals.css'

const SITE_URL = 'https://axislogisticsindia.com'
const SITE_NAME = 'Axis Logistics India'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['500', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: 'Axis Logistics India | FTL, ODC & Trailer Transport Across India',
  description:
    'Axis Logistics India, Thane — trusted since 2008 for Full Truck Load, Part Load, ODC trailer, container and industrial transportation from Mumbai, Bhiwandi & Navi Mumbai to destinations across India. Get a free freight quote.',
  keywords: [
    'transport company Mumbai',
    'full truck load Mumbai to Delhi',
    'ODC trailer transport',
    'transport contractor Thane',
    'container transportation India',
    'Bhiwandi transport services',
    'part truck load',
    'industrial transportation',
  ],
  generator: 'v0.app',
  openGraph: {
    siteName: SITE_NAME,
    title: 'Axis Logistics India — Road Transport Across India Since 2008',
    description:
      'FTL, PTL, ODC trailers, container & door-to-door transportation from Mumbai to across India.',
    type: 'website',
    locale: 'en_IN',
    images: ['/images/hero-truck.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a2138',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: ['Axis Logistics', 'Axis Logistics India Thane'],
      url: SITE_URL,
    },
    {
      '@type': 'MovingCompany',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.jpeg`,
      image: `${SITE_URL}/logo.jpeg`,
      slogan: company.tagline,
      foundingDate: String(company.established),
      email: company.email,
      telephone: company.phones.map((p) => p.tel),
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Shop No. 4, Ramchandra Nagar-1, near Shiv Sena Shakha, Kamgar Hospital Road',
        addressLocality: 'Thane (West)',
        addressRegion: 'Maharashtra',
        postalCode: '400604',
        addressCountry: 'IN',
      },
      areaServed: 'IN',
      vatID: company.gstin,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}