import styled from 'styled-components';
import { theme } from '../styles/theme';

export const CurrencyList = styled.div`
  max-height: 380px;
  overflow-y: auto;
  padding: 6px 8px;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.border} transparent;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: ${theme.radius.sm};
  border: 1px solid transparent;
  cursor: default;
  transition: background 0.15s, border-color 0.15s;
  margin-bottom: 2px;

  &:hover {
    background: ${theme.colors.bgHover};
    border-color: ${theme.colors.border};
  }
`;

export const CardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CurrencyFlag = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  background: ${theme.colors.bgSecondary};
`;

export const CurrencyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrencyCode = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${theme.colors.text};
`;

export const CurrencyName = styled.span`
  font-size: 11px;
  color: ${theme.colors.textMuted};
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CurrencyRate = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: ${theme.colors.text};
  font-variant-numeric: tabular-nums;
`;

export const CurrencyPer = styled.span`
  font-size: 11px;
  color: ${theme.colors.textMuted};
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 32px 20px;
  color: ${theme.colors.textMuted};
  font-size: 13px;
`;
