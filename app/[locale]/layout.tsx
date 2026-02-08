import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import { SupportedLanguage } from '@/locales/types';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const lang = (locale as SupportedLanguage) || 'en-US';

  return (
    <>
      <FloatingParticles />
      <Navbar locale={lang} />
      <main className="container mx-auto py-8 relative">
        {children}
      </main>
      <Footer locale={lang} />
    </>
  );
}
