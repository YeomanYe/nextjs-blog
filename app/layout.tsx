import '../styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getLocale } from '../lib/i18n';

export const metadata: Metadata = {
  title: 'My Personal Blog',
  description: 'A personal blog system built with Next.js',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { locale?: string };
}) {
  // Get the current locale from params or use default
  const locale = params?.locale || 'en-US';
  
  return (
    <html lang={locale}>
      <head>
        {/* Plausible Analytics - replace with your own domain */}
        <script
          defer
          src="https://plausible.io/js/script.js"
          data-domain="yourdomain.com"
        ></script>
      </head>
      <body>
        <Navbar locale={locale} />
        <main className="container mx-auto py-8">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}