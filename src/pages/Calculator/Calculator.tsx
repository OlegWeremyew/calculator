import React from 'react';

import styled from 'styled-components';

import Display from '../../components/Display/Display';
import Keypad from '../../components/Keypad/Keypad';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledCalculator = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  background-color: #bea4a4;
`;

const Calculator = (): ReturnComponentType => (
  <StyledCalculator>
    <Display />
    <Keypad />
  </StyledCalculator>
);

export default Calculator;
