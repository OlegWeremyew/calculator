import React from 'react';

import styled from 'styled-components';

import Display from '../../components/Display/Display';
import Keypad from '../../components/Keypad/Keypad';
import Panel from '../../components/Panel/Panel';
import { ThemeType } from '../../theme';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledCalculator = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledDiv = styled.div`
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  min-width: 200px;
  height: 608px;

  @media (max-width: 445px) {
    height: 457px;
  }
`;

const Calculator = (): ReturnComponentType => (
  <StyledCalculator>
    <StyledDiv>
      <Display />
      <Keypad />
    </StyledDiv>
    <div>
      <Panel />
    </div>
  </StyledCalculator>
);

export default Calculator;
