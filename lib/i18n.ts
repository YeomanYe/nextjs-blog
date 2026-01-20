import { Locale, SupportedLanguage } from '../locales/types';

// Default language
const DEFAULT_LANGUAGE: SupportedLanguage = 'en-US';

// Load locale files
const locales: Record<SupportedLanguage, Locale> = {
  'en-US': require('../locales/en-US.json') as Locale,
  'zh-CN': require('../locales/zh-CN.json') as Locale,
};

/**
 * Get the locale object for a given language
 * @param lang - The language code
 * @returns The locale object
 */
export function getLocale(lang: SupportedLanguage = DEFAULT_LANGUAGE): Locale {
  return locales[lang] || locales[DEFAULT_LANGUAGE];
}

/**
 * Translate a key with optional variables
 * @param lang - The language code
 * @param key - The translation key (e.g., "navigation.home" or "blog.showingResults")
 * @param variables - Optional variables to replace in the translation
 * @returns The translated string
 */
export function t(
  lang: SupportedLanguage,
  key: string,
  variables?: Record<string, string | number>
): string {
  const locale = getLocale(lang);
  
  // Split the key into parts
  const keys = key.split('.');
  
  // Traverse the locale object to find the value
  let value: any = locale;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // If the key is not found, return the key itself as a fallback
      return key;
    }
  }
  
  // If the value is not a string, return the key as a fallback
  if (typeof value !== 'string') {
    return key;
  }
  
  // Replace variables in the string
  if (variables) {
    return Object.entries(variables).reduce((result, [varName, varValue]) => {
      return result.replace(new RegExp(`\\{${varName}\\}`), String(varValue));
    }, value);
  }
  
  return value;
}

/**
 * Check if a language is supported
 * @param lang - The language code to check
 * @returns Whether the language is supported
 */
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return lang in locales;
}

/**
 * Get the supported languages
 * @returns An array of supported language codes
 */
export function getSupportedLanguages(): SupportedLanguage[] {
  return Object.keys(locales) as SupportedLanguage[];
}
