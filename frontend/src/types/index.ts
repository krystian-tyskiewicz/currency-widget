export interface CurrencyRate {
  code: string;
  name: string;
  rate: number;
}

export interface RatesResponse {
  base: string;
  date: string;
  rates: Record<string, number>;
}

export interface WidgetOptions {
  baseCurrency?: string;
}
