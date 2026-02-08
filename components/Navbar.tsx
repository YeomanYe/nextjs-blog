'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { t } from '../lib/i18n';
import { SupportedLanguage } from '../locales/types';

interface NavbarProps {
  locale: SupportedLanguage;
}

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLanguage = (newLocale: SupportedLanguage) => {
    const pathWithoutLocale = pathname.replace(/^\/(en-US|zh-CN)/, '');
    router.push(`/${newLocale}${pathWithoutLocale || '/'}`);
  };

  const navItems = [
    { href: `/${locale}`, label: t(locale, 'navigation.home') },
    { href: `/${locale}/blog`, label: t(locale, 'navigation.blog') },
    { href: `/${locale}/projects`, label: t(locale, 'navigation.projects') },
    { href: `/${locale}/about`, label: t(locale, 'navigation.about') },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--bg-surface)]/90 backdrop-blur-md border-b border-[var(--border-color)]/50'
          : 'bg-transparent'
      }`}
      style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold font-mono hover:text-[var(--color-primary-light)] transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-[var(--color-primary)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--bg-main)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <span className="font-mono text-lg">&gt;_TechBlog</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <nav>
              <ul className="flex space-x-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded text-sm font-mono transition-all duration-300 relative group ${
                        pathname === item.href
                          ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10'
                          : 'text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--border-color)]/30'
                      }`}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-primary)] rounded-full animate-blink"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="w-px h-6 bg-[var(--border-color)] mx-3"></div>

            <div className="relative group">
              <button
                className="relative px-4 py-2 rounded bg-[var(--bg-surface)]/50 border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-all duration-300 group flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-sm font-mono text-[var(--text-secondary)]">
                  {locale === 'en-US' ? 'EN' : '中文'}
                </span>
                <svg className="w-3 h-3 text-[var(--text-muted)] transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-36 bg-[var(--bg-surface)]/95 backdrop-blur-lg border border-[var(--border-color)] rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.15)] overflow-hidden opacity-0 invisible transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 cursor-default">
                <button
                  onClick={() => switchLanguage('en-US')}
                  className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 flex items-center gap-3 cursor-pointer font-mono ${
                    locale === 'en-US'
                      ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 border-l-2 border-[var(--color-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--border-color)]/30'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${locale === 'en-US' ? 'bg-[var(--color-primary)]' : 'bg-[var(--text-muted)]'}`}></span>
                  <span>English</span>
                </button>
                <div className="h-px bg-[var(--border-color)]/50"></div>
                <button
                  onClick={() => switchLanguage('zh-CN')}
                  className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 flex items-center gap-3 cursor-pointer font-mono ${
                    locale === 'zh-CN'
                      ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 border-l-2 border-[var(--color-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--border-color)]/30'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${locale === 'zh-CN' ? 'bg-[var(--color-primary)]' : 'bg-[var(--text-muted)]'}`}></span>
                  <span>中文</span>
                </button>
              </div>
            </div>
          </div>

          <button className="md:hidden p-2 rounded-lg bg-[var(--bg-surface)]/50 border border-[var(--border-color)]">
            <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
