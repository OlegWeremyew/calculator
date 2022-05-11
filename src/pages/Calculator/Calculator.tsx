import React from 'react';

import styled from 'styled-components';

import Display from '../../components/Display/Display';
import History from '../../components/History/History';
import Keypad from '../../components/Keypad/Keypad';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledCalculator = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  padding: 10px;
  background-color: #bea4a4;
`;

const Calculator = (): ReturnComponentType => (
  <StyledCalculator>
    <div>
      <Display />
      <Keypad />
    </div>
    <div>
      <History />
    </div>
  </StyledCalculator>
);

export default Calculator;
