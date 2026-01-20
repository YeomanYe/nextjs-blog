import Link from 'next/link';
import { t } from '../lib/i18n';
import { SupportedLanguage } from '../locales/types';

interface NavbarProps {
  locale: SupportedLanguage;
}

export default function Navbar({ locale }: NavbarProps) {
  // Language switcher function
  const switchLanguage = (newLocale: SupportedLanguage) => {
    // Get the current path without the locale prefix
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en-US|zh-CN)/, '');
    
    // Navigate to the same path with the new locale
    window.location.href = `/${newLocale}${pathWithoutLocale || '/'}`;
  };

  return (
    <header className="bg-[var(--card-background)] shadow-lg border-b border-[var(--border-color)] backdrop-blur-sm bg-opacity-90 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
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
              className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-all duration-300 flex items-center gap-1"
            >
              {locale === 'en-US' ? 'EN' : '中文'}
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute right-0 mt-2 w-24 bg-[var(--card-background)] border border-[var(--border-color)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <button
                onClick={() => switchLanguage('en-US')}
                className={`w-full text-left px-4 py-2 text-sm transition-all duration-300 ${locale === 'en-US' ? 'text-[var(--primary-color)] bg-[var(--border-color)]' : 'text-[var(--text-color)] hover:bg-[var(--border-color)]'}`}
              >
                English
              </button>
              <button
                onClick={() => switchLanguage('zh-CN')}
                className={`w-full text-left px-4 py-2 text-sm transition-all duration-300 ${locale === 'zh-CN' ? 'text-[var(--primary-color)] bg-[var(--border-color)]' : 'text-[var(--text-color)] hover:bg-[var(--border-color)]'}`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}