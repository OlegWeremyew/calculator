import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import KeypadButton from './KeypadButton/KeypadButton';
import Operation from './Operation/Operation';

const KeypadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  align-items: center;

  @media (max-width: 445px) {
    width: 310px;
  }
`;

const Keypad = (): ReturnComponentType => (
  <KeypadContainer>
    <KeypadButton />
    <Operation />
  </KeypadContainer>
);

export default Keypad;
