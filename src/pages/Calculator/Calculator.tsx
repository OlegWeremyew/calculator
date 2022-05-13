import React from 'react';

import { useSelector } from 'react-redux';

import Display from '../../components/Display/Display';
import Keypad from '../../components/Keypad/Keypad';
import Panel from '../../components/Panel/Panel';
import { getIsShowControlPanel } from '../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { CalculatorContainer, StyledBlock } from './components';

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
