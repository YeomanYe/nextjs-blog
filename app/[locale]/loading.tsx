import { t } from '@/lib/i18n';
import { SupportedLanguage } from '@/locales/types';

interface LoadingProps {
  params: Promise<{ locale?: string }>;
}

export default async function Loading({ params }: LoadingProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams?.locale as SupportedLanguage) || 'en-US';

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-[var(--border-color)] rounded-full"></div>
          {/* Inner spinning ring */}
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-[var(--primary-color)] rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-[var(--text-color)]/70">
          {t(locale, 'common.loading')}
        </p>
      </div>
    </div>
  );
}
