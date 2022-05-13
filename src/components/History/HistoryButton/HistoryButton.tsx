import React from 'react';

import styled from 'styled-components';

import { ThemeType } from '../../../theme';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const StyledButton = styled.button`
  width: 140px;
  height: 45px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  cursor: pointer;
  margin-left: 6px;
  font-size: 18px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  border-radius: 5px;
  color: ${({ theme }: ThemeType) => theme.color};

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

const HistoryButton: React.FC<HistoryButtonType> = ({
  children,
  callback,
}): ReturnComponentType => (
  <StyledButton onClick={callback} type="button">
    {children}
  </StyledButton>
);

export default HistoryButton;

export type HistoryButtonType = {
  children: string;
  callback: () => void;
};
