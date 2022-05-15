import styled, { keyframes } from 'styled-components';

import { ThemeType } from '../types/themeType';

export const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;

  @media (max-width: 520px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 310px;
  }
`;

export const SettingsTitle = styled.h1`
  font-size: 28px;

  @media (max-width: 520px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 94px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  margin: 2px;
  font-size: 50px;
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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }: ThemeType): string => theme.background};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
