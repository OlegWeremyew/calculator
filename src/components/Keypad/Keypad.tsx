import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import { Keypad } from './components';
import KeypadButton from './KeypadButton/KeypadButton';
import Operation from './Operation/Operation';

export default (): ReturnComponentType => (
  <Keypad>
    <KeypadButton />
    <Operation />
  </Keypad>
);
