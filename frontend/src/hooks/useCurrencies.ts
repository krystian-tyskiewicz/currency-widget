import { useState, useEffect, useCallback, useRef } from 'react';
import type { CurrencyRate, RatesResponse } from '../types';
import {
  RATES_REFRESH_INTERVAL_MS,
  SUPPORTED_BASE_CURRENCIES,
  CURRENCY_NAMES,
} from '../config/constants';

interface UseCurrenciesOptions {
  apiUrl: string;
  defaultBase: string;
}

export function useCurrencies({ apiUrl, defaultBase }: UseCurrenciesOptions) {
  const [currencies, setCurrencies] = useState<CurrencyRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [baseCurrency, setBaseCurrency] = useState(defaultBase.toUpperCase());
  const isInitialLoad = useRef(true);

  const fetchRates = useCallback(async () => {
    try {
      if (isInitialLoad.current) {
        setLoading(true);
      }
      setError(null);

      const res = await fetch(`${apiUrl}/currencies/rates?base=${baseCurrency}`);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data: RatesResponse = await res.json();

      const supportedCodes = SUPPORTED_BASE_CURRENCIES as readonly string[];
      const entries = Object.entries(data.rates).filter(([code]) =>
        supportedCodes.includes(code)
      );

      setCurrencies(
        entries.map(([code, rate]) => ({
          code,
          rate,
          name: CURRENCY_NAMES[code] ?? code,
        })),
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      if (isInitialLoad.current) {
        setLoading(false);
        isInitialLoad.current = false;
      }
    }
  }, [apiUrl, baseCurrency]);

  useEffect(() => {
    fetchRates();
    const id = setInterval(fetchRates, RATES_REFRESH_INTERVAL_MS);
    return () => clearInterval(id);
  }, [fetchRates]);

  return {
    currencies,
    loading,
    error,
    baseCurrency,
    setBaseCurrency,
    supportedBases: [...SUPPORTED_BASE_CURRENCIES],
    refresh: fetchRates,
  };
}
