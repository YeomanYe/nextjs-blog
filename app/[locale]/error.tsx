'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { t } from '@/lib/i18n';
import { SupportedLanguage } from '@/locales/types';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
  params: Promise<{ locale: string }>;
}

export default function Error({ error, reset, params }: ErrorProps) {
  const locale: SupportedLanguage = 'en-US'; // Default fallback

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl font-semibold mb-4">{t(locale, 'errors.somethingWentWrong')}</h2>
        <p className="text-[var(--text-color)]/70 mb-8">
          {error.message || t(locale, 'errors.unknownError')}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn"
          >
            {t(locale, 'errors.tryAgain')}
          </button>
          <Link href={`/${locale}`} className="btn-secondary">
            {t(locale, 'navigation.home')}
          </Link>
        </div>
      </div>
    </div>
  );
}
