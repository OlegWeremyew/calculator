import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { EMPTY_STRING } from '../../../constants';
import { calculatorAction } from '../../../reducers/calculatorReducer/calculatorReducer';
import {
  getButtons,
  getCurrentValue,
} from '../../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

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
    <div>
      {buttons.map(button => (
        <button
          type="button"
          key={button.value}
          onClick={(e: any) => tapeNumber(e.target.value)}
          value={button.value}
        >
          {button.value}
        </button>
      ))}
    </div>
  );
};

export default KeypadButton;
