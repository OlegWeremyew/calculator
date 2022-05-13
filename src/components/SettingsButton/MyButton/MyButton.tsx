import React from 'react';

import styled from 'styled-components';

import { ThemeType } from '../../../theme';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const StyledButton = styled.button`
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
`;

const MyButton: React.FC<MyButtonType> = ({
  children,
  callback,
}): ReturnComponentType => (
  <StyledButton onClick={callback} type="button">
    {children}
  </StyledButton>
);

export default MyButton;

type MyButtonType = {
  children: string;
  callback: () => void;
};
