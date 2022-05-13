import styled from 'styled-components';

import { ThemeType } from '../../../../theme';

export const StyledButton = styled.button`
  width: 140px;
  height: 45px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  cursor: pointer;
  margin-left: 6px;
  font-size: 14px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  border-radius: 5px;
  color: ${({ theme }: ThemeType) => theme.color};
  text-transform: uppercase;

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