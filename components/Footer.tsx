import Link from 'next/link';
import { t } from '../lib/i18n';
import { SupportedLanguage } from '../locales/types';

interface FooterProps {
  locale: SupportedLanguage;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: '#', label: 'Twitter', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )},
    { href: '#', label: 'GitHub', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )},
    { href: '#', label: 'LinkedIn', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { href: '/rss.xml', label: 'RSS', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
      </svg>
    )},
  ];

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-color)] mt-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 py-2 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
              <span className="w-8 h-8 rounded bg-[var(--color-primary)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--bg-main)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <span className="font-bold text-lg font-mono text-[var(--color-primary)]">
                &gt;_TechBlog
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm max-w-xs font-mono text-xs">
              {locale === 'zh-CN'
                ? '// 分享技术见解，构建开发者社区'
                : '// Sharing tech insights to build a developer community'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-center md:text-left">
            {[
              { href: `/${locale}`, label: '~/home' },
              { href: `/${locale}/blog`, label: '~/blog' },
              { href: `/${locale}/projects`, label: '~/projects' },
              { href: `/${locale}/about`, label: '~/about' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-all duration-300 text-sm font-mono"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--border-color)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="font-mono text-xs text-[var(--color-primary)] bg-[var(--bg-surface)] px-3">EOF</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[var(--text-muted)] text-xs font-mono">
            {t(locale, 'footer.copyright', { year: currentYear })}
          </p>
          <p className="text-[var(--text-muted)] text-xs font-mono">
            {t(locale, 'footer.designedBy')} <span className="text-[var(--color-primary)]">_</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}
