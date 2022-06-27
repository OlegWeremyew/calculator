import styled from 'styled-components';

import { ThemeType } from 'types/themeType';

export const StyledButton = styled.button`
  height: 30px;
  width: 120px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  color: ${({ theme }: ThemeType) => theme.color};
  text-transform: uppercase;

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:active {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  @media (max-width: 520px) {
    font-size: 18px;
    height: 25px;
    width: 100px;
  }

  @media (max-width: 420px) {
    font-size: 15px;
    height: 22px;
    width: 70px;
  }
`;
