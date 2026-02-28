import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const DialogBackdrop = styled.div`
  position: fixed;
  bottom: 100px;
  right: 24px;
  z-index: 9999;
  animation: ${slideUp} 0.25s ease-out;
`;

export const DialogCloseButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
`;
