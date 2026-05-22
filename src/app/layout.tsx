import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Percelio — East Africa\'s Courier & Logistics Platform',
  description: 'Connect businesses, courier agents, and logistics companies across East Africa. Real-time tracking, instant booking, and seamless delivery management — starting in Tanzania.',
  keywords: ['courier', 'logistics', 'Tanzania', 'East Africa', 'delivery', 'parcel tracking', 'business shipping', 'Percelio'],
  authors: [{ name: 'Percelio Inc', url: 'https://percelio.com' }],
  openGraph: {
    title: 'Percelio — East Africa\'s Courier & Logistics Platform',
    description: 'The smart way to ship, track, and manage deliveries across East Africa.',
    url: 'https://percelio.com',
    siteName: 'Percelio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percelio',
    description: 'East Africa\'s Courier & Logistics Platform',
  },
  icons: { icon: '/favicon.ico' },
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
