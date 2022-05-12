import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import KeypadButton from './KeypadButton/KeypadButton';
import Operation from './Operation/Operation';

const StyledKeypad = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  align-items: center;

  @media ${({ theme }: any) => theme.media.phone} {
    width: 310px;
    background-color: #730bc4;
  }
`;

const Keypad = (): ReturnComponentType => (
  <StyledKeypad>
    <KeypadButton />
    <Operation />
  </StyledKeypad>
);

export default Keypad;
