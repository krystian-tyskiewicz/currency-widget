import { createElement, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import type { WidgetOptions } from './types';

const App = lazy(() => import('./App'));

export interface WidgetInstance {
  open: () => void;
  close: () => void;
  destroy: () => void;
}

export function init(options: WidgetOptions = {}): WidgetInstance {
  const container = document.createElement('div');
  container.className = 'currency-widget-container';
  document.body.appendChild(container);

  const shadow = container.attachShadow({ mode: 'open' });

  const mountEl = document.createElement('div');
  mountEl.className = 'currency-widget-root';
  shadow.appendChild(mountEl);

  const root = createRoot(mountEl);

  root.render(
    createElement(
      StyleSheetManager,
      { target: shadow as any },
      createElement(
        Suspense,
        { fallback: null },
        createElement(App, { options }),
      ),
    ),
  );

  return {
    open() {
      const event = new CustomEvent('currency-widget-open');
      container.dispatchEvent(event);
    },
    close() {
      const event = new CustomEvent('currency-widget-close');
      container.dispatchEvent(event);
    },
    destroy() {
      root.unmount();
      container.remove();
    },
  };
}

declare global {
  interface Window {
    CurrencyWidget: { init: typeof init };
  }
}

if (typeof window !== 'undefined') {
  window.CurrencyWidget = { init };
}
