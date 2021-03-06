import React, { FC, memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getButtonsKeypads } from 'constants/buttonsValue/buttonsValue';
import { NUMBER_ONE, NUMBER_TWO } from 'constants/variables';
import { ButtonContainer, StyledButton } from 'layouts';
import { calculatorAction } from 'reducers';
import { getCurrentValue } from 'selectors';

export const KeypadButton: FC = memo(() => {
  const dispatch = useDispatch();
  const buttons = getButtonsKeypads();

  const currentValue = useSelector(getCurrentValue);

  const tapeNumber = (value: string): void => {
    if (currentValue === '0' && currentValue.length === NUMBER_ONE) {
      dispatch(calculatorAction.NullifyValue());
      dispatch(calculatorAction.changeCurrentValue(value));
    } else if (
      currentValue[currentValue.length - NUMBER_TWO] === '+' &&
      currentValue[currentValue.length - NUMBER_ONE] === '0' &&
      value === '0'
    ) {
      dispatch(calculatorAction.changeCurrentValue(currentValue));
    } else {
      dispatch(calculatorAction.changeCurrentValue(currentValue + value));
    }
  };
  return (
    <ButtonContainer>
      {buttons.map(button => (
        <StyledButton
          type="button"
          key={button.value}
          onClick={(e: any) => tapeNumber(e.target.value)}
          value={button.value}
        >
          {button.value}
        </StyledButton>
      ))}
    </ButtonContainer>
  );
});
