import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from '../../../types/ReturnComponentType';

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  background: ${({ theme }: any) => theme.backgrounds.primary};
  cursor: pointer;
  margin-left: 3px;
  border: ${({ theme }: any) => theme.borders.primary} 2px solid;
  border-radius: 5px;

  &:hover {
    background-color: #e8d0af;
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
