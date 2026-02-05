'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { t } from '../lib/i18n';
import { SupportedLanguage } from '../locales/types';

interface NavbarProps {
  locale: SupportedLanguage;
}

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Language switcher function using Next.js router
  const switchLanguage = (newLocale: SupportedLanguage) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en-US|zh-CN)/, '');
    // Navigate to the same path with the new locale
    router.push(`/${newLocale}${pathWithoutLocale || '/'}`);
  };

  return (
    <header className="bg-[var(--card-background)] shadow-lg border-b border-[var(--border-color)] backdrop-blur-sm bg-opacity-90 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
          TechBlog
        </Link>
        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-all duration-300 relative group"
                >
                  {t(locale, 'navigation.home')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-all duration-300 relative group"
                >
                  {t(locale, 'navigation.about')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-all duration-300 relative group"
                >
                  {t(locale, 'navigation.projects')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-all duration-300 relative group"
                >
                  {t(locale, 'navigation.blog')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="relative group">
            <button
              className="relative px-5 py-2.5 rounded-lg bg-[var(--card-background)]/80 border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all duration-300 group flex items-center gap-3 cursor-pointer"
            >
              <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent font-medium text-sm">
                {locale === 'en-US' ? 'EN' : '中文'}
              </span>
              <svg className="w-3.5 h-3.5 text-[var(--primary-color)] transition-transform duration-300 group-hover:rotate-180 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-36 bg-[var(--card-background)]/95 backdrop-blur-sm border border-[var(--border-color)] rounded-lg shadow-[0_0_30px_rgba(0,212,255,0.2)] overflow-hidden opacity-0 invisible transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 cursor-default">
              <button
                onClick={() => switchLanguage('en-US')}
                className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                  locale === 'en-US'
                    ? 'text-[var(--primary-color)] bg-gradient-to-r from-[var(--primary-color)]/10 to-transparent border-l-2 border-[var(--primary-color)]'
                    : 'text-[var(--text-color)]/80 hover:text-[var(--primary-color)] hover:bg-[var(--border-color)]/50'
                }`}
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${locale === 'en-US' ? 'bg-[var(--primary-color)] shadow-[0_0_8px_var(--primary-color)]' : 'bg-[var(--text-color)]/40'}`}></span>
                <span className="font-medium">English</span>
              </button>
              <div className="h-px bg-[var(--border-color)]/50"></div>
              <button
                onClick={() => switchLanguage('zh-CN')}
                className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                  locale === 'zh-CN'
                    ? 'text-[var(--primary-color)] bg-gradient-to-r from-[var(--primary-color)]/10 to-transparent border-l-2 border-[var(--primary-color)]'
                    : 'text-[var(--text-color)]/80 hover:text-[var(--primary-color)] hover:bg-[var(--border-color)]/50'
                }`}
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${locale === 'zh-CN' ? 'bg-[var(--primary-color)] shadow-[0_0_8px_var(--primary-color)]' : 'bg-[var(--text-color)]/40'}`}></span>
                <span className="font-medium">中文</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
