import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://pacelio.incpritech.com';

export const metadata: Metadata = {
  title: {
    default: 'Pacelio — East Africa\'s Courier & Logistics Platform',
    template: '%s | Pacelio',
  },
  description: 'Connect businesses, courier agents, and logistics companies across East Africa. Real-time tracking, multi-carrier rate comparison, instant booking, and seamless delivery management — headquartered in Mbeya, Tanzania.',
  keywords: ['courier', 'logistics', 'Tanzania', 'East Africa', 'delivery', 'parcel tracking', 'business shipping', 'Pacelio', 'Mbeya', 'IncriprTech', 'last-mile delivery', 'COD', 'multi-carrier'],
  authors: [{ name: 'Pacelio', url: siteUrl }],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pacelio — East Africa\'s Courier & Logistics Platform',
    description: 'The smart way to ship, track, and manage deliveries across East Africa. Multi-carrier marketplace with real-time tracking, QR handoffs, and COD management.',
    url: siteUrl,
    siteName: 'Pacelio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacelio',
    description: 'East Africa\'s Courier & Logistics Platform — Multi-carrier marketplace with real-time tracking.',
  },
  icons: { icon: '/favicon.ico', apple: '/logo.png' },
  manifest: '/manifest.json',
  verification: {
    google: '', // Add Google Search Console verification code
  },
};

import { ThemeProvider } from '@/components/ThemeProvider';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pacelio',
  alternateName: 'Pacelio by IncriprTech',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'East Africa\'s courier and logistics platform. Multi-carrier marketplace with real-time tracking, QR handoffs, and COD management.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mbeya',
    addressCountry: 'TZ',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+255-792-017-591',
    email: 'pacelio@incpritech.com',
    contactType: 'customer support',
  },
  foundingDate: '2026',
  founder: [
    { '@type': 'Person', name: 'Privatus Cosmas' },
    { '@type': 'Person', name: 'Peter Ntonda' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
