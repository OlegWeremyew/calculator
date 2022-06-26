import React, { FC, memo } from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { StyledButton } from './components';
import { MyButtonType } from './types';

export const MyButton: FC<MyButtonType> = memo(
  ({ children, callback }): ReturnComponentType => (
    <StyledButton onClick={callback} type="button">
      {children}
    </StyledButton>
  ),
);
