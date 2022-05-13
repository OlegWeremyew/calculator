import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import { KeypadContainer } from './components';
import { KeypadButton } from './KeypadButton';
import { Operation } from './Operation';

export const Keypad = (): ReturnComponentType => (
  <KeypadContainer>
    <KeypadButton />
    <Operation />
  </KeypadContainer>
);
