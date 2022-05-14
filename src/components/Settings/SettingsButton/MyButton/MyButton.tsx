import React, { memo } from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { StyledButton } from './components';
import { MyButtonType } from './types';

export const MyButton: React.FC<MyButtonType> = memo(
  ({ children, callback }): ReturnComponentType => (
    <StyledButton onClick={callback} type="button">
      {children}
    </StyledButton>
  ),
);
