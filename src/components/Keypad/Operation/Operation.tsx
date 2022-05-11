import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  FIXED_LENGTH,
  ONE_NUMBER,
  TIME_OUT_VALUE,
  ZERO_NUMBER,
} from '../../../constants';
import { calculatorAction } from '../../../reducers/calculatorReducer/calculatorReducer';
import { historyAction } from '../../../reducers/historyReducer/historyReducer';
import { getCurrentValue } from '../../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import Operand from './Operand/Operand';

const Operation = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const currentValue = useSelector(getCurrentValue);

  const createOperation = (value: string): void => {
    if (value === 'CE') {
      if (currentValue.length === ONE_NUMBER) dispatch(calculatorAction.NullifyValue());
      else {
        dispatch(
          calculatorAction.deleteLastSymbol(
            currentValue.substring(ZERO_NUMBER, currentValue.length - ONE_NUMBER),
          ),
        );
      }
    } else if (value === 'C') {
      dispatch(calculatorAction.NullifyValue());
      // нужно фиксить будет
    } else if (value === '.') {
      if (
        currentValue.includes('.') &&
        !currentValue.includes('+') &&
        !currentValue.includes('-') &&
        !currentValue.includes('*') &&
        !currentValue.includes('/')
      )
        dispatch(calculatorAction.addNewSymbol(currentValue));
      else {
        dispatch(calculatorAction.addNewSymbol(`${currentValue}.`));
      }
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        dispatch(calculatorAction.addNewSymbol(eval(currentValue).toFixed(FIXED_LENGTH)));
        dispatch(historyAction.addNewHistory(currentValue));
      } catch {
        dispatch(calculatorAction.setErrorValue());
        setTimeout(() => {
          dispatch(calculatorAction.NullifyValue());
        }, TIME_OUT_VALUE);
      }
    }
  };

  return <Operand createOperation={createOperation} />;
};

export default Operation;
