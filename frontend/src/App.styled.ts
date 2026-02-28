import styled from 'styled-components';
import { theme } from './styles/theme';

export const WidgetContainer = styled.div`
  position: relative;
  font-family: ${theme.fontFamily};
  font-size: 14px;
  line-height: 1.5;
  background: ${theme.colors.bg};
  border-radius: ${theme.radius.default};
  box-shadow: ${theme.shadow};
  width: 100%;
  max-width: 520px;
  overflow: hidden;
  color: ${theme.colors.text};
`;

export const WidgetHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 8px 20px;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%);
  color: #fff;

  h2 {
    font-size: 17px;
    font-weight: 700;
  }
`;

export const BaseSelect = styled.select`
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 6px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 8px;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const WidgetBody = styled.div`
  min-height: 120px;
`;

export const WidgetFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 9px 16px;
  border-top: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgSecondary};
`;

export const RefreshButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 12px;
  cursor: pointer;
  padding: 3px 8px;
  border-radius: 4px;
  transition: background 0.15s;
  font-weight: 500;

  &:hover {
    background: ${theme.colors.primaryLight};
  }
`;

