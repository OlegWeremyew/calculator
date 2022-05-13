import styled, { keyframes } from 'styled-components';

import { ThemeType } from '../theme';

export const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  margin: 2px;
  font-size: 40px;
  cursor: pointer;
  color: ${({ theme }: ThemeType) => theme.color};
  border-radius: 5px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;

  @media (max-width: 445px) {
    width: 70px;
    height: 70px;
    font-size: 30px;
  }

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:active {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }
`;
