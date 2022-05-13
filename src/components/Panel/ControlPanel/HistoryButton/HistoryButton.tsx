import React from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { StyledButton } from './components';

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
