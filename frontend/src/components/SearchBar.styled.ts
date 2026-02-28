import styled from 'styled-components';
import { theme } from '../styles/theme';

export const SearchContainer = styled.div`
  padding: 10px 14px;
  border-bottom: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgSecondary};
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 10px;
  color: ${theme.colors.textMuted};
  pointer-events: none;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 32px 8px 34px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  background: ${theme.colors.bg};
  color: ${theme.colors.text};
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.textMuted};
  }
`;

export const SearchClearButton = styled.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.textMuted};
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 4px;
  line-height: 1;

  &:hover {
    color: ${theme.colors.text};
    background: ${theme.colors.bgHover};
  }
`;
