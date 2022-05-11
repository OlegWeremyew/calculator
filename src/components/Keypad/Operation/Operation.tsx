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
import {
  getCurrentValue,
  getOperations,
} from '../../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const Operation = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const operations = useSelector(getOperations);

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

  return (
    <div>
      {operations.map(operation => (
        <button
          type="button"
          key={operation.value}
          onClick={(e: any) => createOperation(e.target.value)}
          value={operation.value}
        >
          {operation.value}
        </button>
      ))}
    </div>
  );
};

export default Operation;
