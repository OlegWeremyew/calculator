import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Display from '../../components/Display/Display';
import Keypad from '../../components/Keypad/Keypad';
import Panel from '../../components/Panel/Panel';
import { getIsShowControlPanel } from '../../selectors/CalculatorSelector/CalculatorSelector';
import { ThemeType } from '../../theme';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const CalculatorContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledBlock = styled.article`
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;
  min-width: 200px;
  height: 608px;

  @media (max-width: 445px) {
    height: 457px;
  }
`;

const Calculator = (): ReturnComponentType => {
  const isShowControlPanel = useSelector(getIsShowControlPanel);

  return (
    <CalculatorContainer>
      {isShowControlPanel ? (
        <CalculatorContainer>
          <StyledBlock>
            <Display />
            <Keypad />
          </StyledBlock>
          <div>
            <Panel />
          </div>
        </CalculatorContainer>
      ) : (
        <CalculatorContainer>
          <StyledBlock>
            <Display />
            <Keypad />
          </StyledBlock>
        </CalculatorContainer>
      )}
    </CalculatorContainer>
  );
};

export default Calculator;
