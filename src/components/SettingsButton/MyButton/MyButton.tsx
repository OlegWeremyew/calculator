import React from 'react';

import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { StyledButton } from './components';

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
