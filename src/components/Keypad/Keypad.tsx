import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import KeypadButton from './KeypadButton/KeypadButton';
import Operation from './Operation/Operation';

const Keypad = (): ReturnComponentType => (
  <>
    <KeypadButton />
    <Operation />
  </>
);

export default Keypad;
