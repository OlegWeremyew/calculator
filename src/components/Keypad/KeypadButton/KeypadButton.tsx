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
  background: ${({ theme }: any): string => theme.backgrounds.primary};
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }: any) => theme.buttonsBgc.primary};
  color: ${({ theme }: any) => theme.colors.primary};
  margin: 2px;
  font-size: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: ${({ theme }: any) => theme.borders.primary} 3px solid;

  &:hover {
    background-color: #e8d0af;
  }

  @media ${({ theme }: any) => theme.media.phone} {
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
