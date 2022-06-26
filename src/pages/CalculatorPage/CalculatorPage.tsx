import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { Display, Keypad, Panel } from '../../components';
import { getIsShowControlPanel } from '../../selectors';

import { CalculatorBlock, CalculatorContainer, StyledBlock } from './components';

const CalculatorPage: FC = () => {
  const isShowControlPanel = useSelector(getIsShowControlPanel);

  return (
    <CalculatorContainer>
      {isShowControlPanel ? (
        <CalculatorBlock>
          <StyledBlock>
            <Display />
            <Keypad />
          </StyledBlock>
          <div>
            <Panel />
          </div>
        </CalculatorBlock>
      ) : (
        <CalculatorBlock>
          <StyledBlock>
            <Display />
            <Keypad />
          </StyledBlock>
        </CalculatorBlock>
      )}
    </CalculatorContainer>
  );
};

export default CalculatorPage;
