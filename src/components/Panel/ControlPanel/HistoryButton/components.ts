import styled from 'styled-components';

import { ThemeType } from 'types/themeType';

export const StyledButton = styled.button`
  width: 165px;
  height: 45px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  cursor: pointer;
  margin-left: 12px;
  font-size: 15px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  border-radius: 5px;
  color: ${({ theme }: ThemeType) => theme.color};
  text-transform: uppercase;

  @media (max-width: 445px) {
    width: 140px;
    margin-left: 4px;
    font-size: 13px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 3px ${({ theme }: ThemeType) => theme.border};
  }

  &:active {
    border: inset 3px ${({ theme }: ThemeType) => theme.border};
  }
`;
