import type { CurrencyRate } from '../types';
import { getCurrencyFlag } from '../config/constants';
import {
  Card,
  CardLeft,
  CurrencyFlag,
  CurrencyInfo,
  CurrencyCode,
  CurrencyName,
  CardRight,
  CurrencyRate as CurrencyRateStyled,
  CurrencyPer,
} from './CurrencyCard.styled';

interface CurrencyCardProps {
  currency: CurrencyRate;
  base: string;
}

function formatRate(rate: number): string {
  return rate.toFixed(4);
}

export default function CurrencyCard({ currency, base }: CurrencyCardProps) {
  return (
    <Card>
      <CardLeft>
        <CurrencyFlag>
          {getCurrencyFlag(currency.code)}
        </CurrencyFlag>
        <CurrencyInfo>
          <CurrencyCode>{currency.code}</CurrencyCode>
          <CurrencyName>{currency.name}</CurrencyName>
        </CurrencyInfo>
      </CardLeft>
      <CardRight>
        <CurrencyRateStyled>{formatRate(currency.rate)}</CurrencyRateStyled>
        <CurrencyPer>per 1 {base}</CurrencyPer>
      </CardRight>
    </Card>
  );
}
