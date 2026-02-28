import styled from 'styled-components';
import { theme } from '../styles/theme';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 20px;
  gap: 12px;
  text-align: center;
`;

export const ErrorIcon = styled.div`
  font-size: 28px;
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.negative};
  font-size: 13px;
  max-width: 260px;
`;

export const RetryButton = styled.button`
  padding: 7px 18px;
  background: ${theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: ${theme.radius.sm};
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;
