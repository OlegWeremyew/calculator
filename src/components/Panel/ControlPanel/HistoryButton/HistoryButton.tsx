import React from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { StyledButton } from './components';
import { HistoryButtonType } from './types';

export const HistoryButton: React.FC<HistoryButtonType> = ({
  children,
  callback,
}): ReturnComponentType => (
  <StyledButton onClick={callback} type="button">
    {children}
  </StyledButton>
);
