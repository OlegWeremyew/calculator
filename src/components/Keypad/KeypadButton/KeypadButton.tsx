import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { EMPTY_STRING } from '../../../constants';
import { calculatorAction } from '../../../reducers/calculatorReducer/calculatorReducer';
import {
  getButtons,
  getCurrentValue,
} from '../../../selectors/CalculatorSelector/CalculatorSelector';
import { ThemeType } from '../../../theme';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const KeypadButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background: ${({ theme }: ThemeType): string => theme.background};
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  color: ${({ theme }: ThemeType) => theme.color};
  margin: 2px;
  font-size: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:active {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  @media (max-width: 445px) {
    width: 70px;
    height: 70px;
    font-size: 30px;
  }
`;

const KeypadButton = (): ReturnComponentType => {
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
    <KeypadButtonContainer>
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
    </KeypadButtonContainer>
  );
};

export default KeypadButton;
