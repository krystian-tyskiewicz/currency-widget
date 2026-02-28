export const API_URL = import.meta.env.VITE_API_URL || '/api';

export const RATES_REFRESH_INTERVAL_MS = 60000;

export const SUPPORTED_BASE_CURRENCIES = [
  'USD',
  'EUR',
  'GBP',
  'JPY',
  'CHF',
  'CAD',
  'AUD',
  'CNY',
  'INR',
  'PLN',
] as const;

export const CURRENCY_NAMES: Record<string, string> = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  CHF: 'Swiss Franc',
  CAD: 'Canadian Dollar',
  AUD: 'Australian Dollar',
  CNY: 'Chinese Yuan',
  INR: 'Indian Rupee',
  PLN: 'Polish Złoty',
};

export const CURRENCY_FLAGS: Record<string, string> = {
  USD: '🇺🇸',
  EUR: '🇪🇺',
  GBP: '🇬🇧',
  JPY: '🇯🇵',
  CHF: '🇨🇭',
  CAD: '🇨🇦',
  AUD: '🇦🇺',
  CNY: '🇨🇳',
  INR: '🇮🇳',
  PLN: '🇵🇱',
};

export function getCurrencyFlag(code: string): string {
  return CURRENCY_FLAGS[code] ?? '💱';
}
