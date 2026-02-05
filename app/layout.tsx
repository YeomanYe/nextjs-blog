import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Personal Blog',
  description: 'A personal blog system built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics - replace with your own domain */}
        <script
          defer
          src="https://plausible.io/js/script.js"
          data-domain="yourdomain.com"
        ></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}