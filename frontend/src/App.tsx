import { lazy, Suspense, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import type { WidgetOptions } from './types';
import { useCurrencies } from './hooks/useCurrencies';
import { API_URL } from './config/constants';
import { theme } from './styles/theme';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import { FloatingButton } from './components/FloatingButton';
import { Dialog } from './components/Dialog';
import { DialogCloseButton } from './components/Dialog.styled';
import {
  WidgetContainer,
  WidgetHeader,
  BaseSelect,
  WidgetBody,
  WidgetFooter,
  RefreshButton,
} from './App.styled';

const CurrencyList = lazy(() => import('./components/CurrencyList'));

interface AppProps {
  options: WidgetOptions;
}

export default function App({ options }: AppProps) {
  const {
    currencies,
    loading,
    error,
    baseCurrency,
    setBaseCurrency,
    supportedBases,
    refresh,
  } = useCurrencies({
    apiUrl: API_URL,
    defaultBase: options.baseCurrency ?? 'EUR',
  });

  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.currency-widget-container');
    if (!container) return;

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    container.addEventListener('currency-widget-open', handleOpen);
    container.addEventListener('currency-widget-close', handleClose);

    return () => {
      container.removeEventListener('currency-widget-open', handleOpen);
      container.removeEventListener('currency-widget-close', handleClose);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const widgetRoot = document.querySelector('.currency-widget-container');
      if (widgetRoot && !widgetRoot.contains(target)) {
        setIsOpen(false);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleWidget = () => setIsOpen(prev => !prev);

  return (
    <ThemeProvider theme={theme}>
      <FloatingButton onClick={toggleWidget} />
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <WidgetContainer>
          <WidgetHeader>
            <h2>Currency Rates</h2>
            <BaseSelect
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
              aria-label="Base currency"
            >
              {(supportedBases.length ? supportedBases : [baseCurrency]).map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </BaseSelect>
            <DialogCloseButton
              onClick={() => setIsOpen(false)}
              aria-label="Close dialog"
              type="button"
            >
              ✕
            </DialogCloseButton>
          </WidgetHeader>

          <SearchBar value={search} onChange={setSearch} />

          <WidgetBody>
            {loading && <LoadingSpinner />}
            {!loading && error && <ErrorMessage message={error} onRetry={refresh} />}
            {!loading && !error && (
              <Suspense fallback={<LoadingSpinner />}>
                <CurrencyList currencies={currencies} search={search} base={baseCurrency} />
              </Suspense>
            )}
          </WidgetBody>

          <WidgetFooter>
            <RefreshButton onClick={refresh} aria-label="Refresh rates">
              ↻ Refresh
            </RefreshButton>
          </WidgetFooter>
        </WidgetContainer>
      </Dialog>
    </ThemeProvider>
  );
}
