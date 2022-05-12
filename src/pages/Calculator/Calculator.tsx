import React from 'react';

import styled from 'styled-components';

import Display from '../../components/Display/Display';
import History from '../../components/History/History';
import Keypad from '../../components/Keypad/Keypad';
import { ThemeType } from '../../theme';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledCalculator = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledDiv = styled.div`
  border: ${({ theme }: ThemeType) => theme.border} 2px solid;
  min-width: 200px;
`;

const Calculator = (): ReturnComponentType => (
  <StyledCalculator>
    <StyledDiv>
      <Display />
      <Keypad />
    </StyledDiv>
    <div>
      <History />
    </div>
  </StyledCalculator>
);

export default Calculator;
