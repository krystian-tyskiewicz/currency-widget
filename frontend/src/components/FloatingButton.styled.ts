import styled from 'styled-components';

export const FloatingButtonStyled = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;
