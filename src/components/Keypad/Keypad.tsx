import React, { FC, memo } from 'react';

import {
  getLowerButtonsOperations,
  getUpperButtonsOperations,
} from '../../constants/buttonsValue/buttonsValue';

import { KeypadContainer } from './components';
import { KeypadButton } from './KeypadButton';
import { Operation } from './Operation';

export const Keypad: FC = memo(() => {
  const upperOperators = getUpperButtonsOperations();
  const lowerOperators = getLowerButtonsOperations();

  return (
    <KeypadContainer>
      <Operation operationsList={upperOperators} />
      <KeypadButton />
      <Operation operationsList={lowerOperators} />
    </KeypadContainer>
  );
});
