import React from 'react';

import { useSelector } from 'react-redux';

import { Display, Keypad, Panel } from '../../components';
import { getIsShowControlPanel } from '../../selectors';
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
