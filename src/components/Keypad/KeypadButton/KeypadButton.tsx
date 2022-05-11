import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { EMPTY_STRING } from '../../../constants';
import { calculatorAction } from '../../../reducers/calculatorReducer/calculatorReducer';
import {
  getButtons,
  getCurrentValue,
} from '../../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const StyledKeypadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: #861f1f;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #720000;
  margin: 2px;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    background-color: #9f2a2a;
  }
`;

const KeypadButton = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const buttons = useSelector(getButtons);

  const currentValue = useSelector(getCurrentValue);

  const tapeNumber = (value: string): void => {
    if (currentValue === '0') {
      dispatch(calculatorAction.addNewSymbol(EMPTY_STRING));
    }
    dispatch(calculatorAction.addNewSymbol(currentValue + value));
  };
  return (
    <StyledKeypadButton>
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
    </StyledKeypadButton>
  );
};

export default KeypadButton;
