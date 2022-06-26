import React, { FC } from 'react';

import { StyledButton } from './components';
import { HistoryButtonType } from './types';

export const HistoryButton: FC<HistoryButtonType> = ({ children, callback }) => (
  <StyledButton onClick={callback} type="button">
    {children}
  </StyledButton>
);
