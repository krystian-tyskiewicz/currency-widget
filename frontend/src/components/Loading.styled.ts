import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/theme';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px;
  gap: 12px;
`;

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid ${theme.colors.border};
  border-top-color: ${theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 0.75s linear infinite;
`;

export const LoadingText = styled.span`
  color: ${theme.colors.textMuted};
  font-size: 13px;
`;
