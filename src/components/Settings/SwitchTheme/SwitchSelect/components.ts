import styled from 'styled-components';

import { ThemeType } from '../../../../types/themeType';

export const StyledSelect = styled.select`
  width: 300px;
  padding: 4px 55px 4px 5px;
  cursor: pointer;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  appearance: auto;
  border: ${({ theme }: ThemeType) => theme.border} solid 2px;
  border-radius: 3px;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 20px;

  &:focus {
    outline: none;
  }

  @media (max-width: 520px) {
    font-size: 16px;
    width: 240px;
  }

  @media (max-width: 420px) {
    font-size: 14px;
    width: 210px;
  }
`;

export const StyledOption = styled.option`
  color: ${({ theme }: ThemeType) => theme.color};
  cursor: pointer;

  &:checked {
    font-weight: 700;
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
  }
`;
