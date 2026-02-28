import { useMemo } from 'react';
import type { CurrencyRate } from '../types';
import CurrencyCard from './CurrencyCard';
import { CurrencyList as CurrencyListStyled, NoResults } from './CurrencyCard.styled';

interface CurrencyListProps {
  currencies: CurrencyRate[];
  search: string;
  base: string;
}

export default function CurrencyList({ currencies, search, base }: CurrencyListProps) {
  const filtered = useMemo(() => {
    if (!search.trim()) return currencies;
    const q = search.trim().toLowerCase();
    return currencies.filter(
      (c) =>
        c.code.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q),
    );
  }, [currencies, search]);

  if (filtered.length === 0) {
    return (
      <NoResults>
        No currencies match "{search}"
      </NoResults>
    );
  }

  return (
    <CurrencyListStyled>
      {filtered.map((currency) => (
        <CurrencyCard key={currency.code} currency={currency} base={base} />
      ))}
    </CurrencyListStyled>
  );
}
