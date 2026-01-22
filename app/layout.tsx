import '../styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getLocale, DEFAULT_LANGUAGE } from '../lib/i18n';
import { SupportedLanguage } from '../locales/types';

export const metadata: Metadata = {
  title: 'My Personal Blog',
  description: 'A personal blog system built with Next.js',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  // Await the params promise
  const resolvedParams = await params;
  // Get the current locale from params or use default
  const locale = (resolvedParams?.locale as SupportedLanguage) || DEFAULT_LANGUAGE;
  
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