import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { EMPTY_STRING } from '../../../constants';
import { ButtonContainer, StyledButton } from '../../../layouts';
import { calculatorAction } from '../../../reducers';
import { getButtons, getCurrentValue } from '../../../selectors';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

export const KeypadButton = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const buttons = useSelector(getButtons);

  const currentValue = useSelector(getCurrentValue);

  const tapeNumber = (value: string): void => {
    if (currentValue === '0') {
      dispatch(calculatorAction.changeCurrentValue(EMPTY_STRING));
    }
    dispatch(calculatorAction.changeCurrentValue(currentValue + value));
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
};
