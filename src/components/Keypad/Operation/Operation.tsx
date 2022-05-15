import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  FIXED_LENGTH,
  NUMBER_ONE,
  TIME_OUT_VALUE,
  ZERO_NUMBER,
} from '../../../constants';
import { calculatorAction, historyAction } from '../../../reducers';
import { getCurrentValue } from '../../../selectors';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { Operand } from './Operand';
import { OperationPropsType } from './types';

export const Operation: React.FC<OperationPropsType> = memo(
  ({ operationsList }): ReturnComponentType => {
    const dispatch = useDispatch();
    const currentValue = useSelector(getCurrentValue);

    const createOperation = useCallback(
      (value: string): void => {
        if (value === 'CE') {
          if (currentValue.length === NUMBER_ONE)
            dispatch(calculatorAction.NullifyValue());
          else {
            const current = currentValue.substring(
              ZERO_NUMBER,
              currentValue.length - NUMBER_ONE,
            );
            dispatch(calculatorAction.deleteLastSymbol(current));
          }
        } else if (value === 'C') {
          dispatch(calculatorAction.NullifyValue());
        } else if (value === '%') {
          dispatch(calculatorAction.changeCurrentValue(currentValue + value));
        } else if (value === '^') {
          const current = (+eval(currentValue) * +eval(currentValue)).toFixed(
            FIXED_LENGTH,
          );
          dispatch(calculatorAction.changeCurrentValue(current));
          dispatch(historyAction.addNewHistory(`${currentValue}^2`, current));
        } else if (value === '√') {
          const current = Math.sqrt(eval(currentValue)).toFixed(FIXED_LENGTH);
          dispatch(calculatorAction.changeCurrentValue(current));
          dispatch(historyAction.addNewHistory(`√${currentValue}`, current));
        } else if (value === '∛') {
          const current = Math.cbrt(eval(currentValue)).toFixed(FIXED_LENGTH);
          dispatch(calculatorAction.changeCurrentValue(current));
          dispatch(historyAction.addNewHistory(`∛${currentValue}`, current));
        } else if (value === '.') {
          if (
            currentValue.includes('.') &&
            !currentValue.includes('+') &&
            !currentValue.includes('-') &&
            !currentValue.includes('*') &&
            !currentValue.includes('/')
          )
            dispatch(calculatorAction.changeCurrentValue(currentValue));
          else if (
            value === '.' &&
            currentValue[currentValue.length - NUMBER_ONE] === '.'
          ) {
            dispatch(calculatorAction.changeCurrentValue(`${currentValue}`));
          } else {
            dispatch(calculatorAction.changeCurrentValue(`${currentValue}.`));
          }
        } else if (value === '=') {
          try {
            if (!currentValue.length) {
              dispatch(calculatorAction.NullifyValue());
            } else {
              const current = eval(currentValue).toFixed(FIXED_LENGTH);
              dispatch(calculatorAction.changeCurrentValue(current));
              dispatch(historyAction.addNewHistory(currentValue, current));
            }
          } catch {
            dispatch(calculatorAction.setErrorValue());
            setTimeout(() => {
              dispatch(calculatorAction.NullifyValue());
            }, TIME_OUT_VALUE);
          }
        }
      },
      [dispatch, currentValue],
    );

    return <Operand operationsList={operationsList} createOperation={createOperation} />;
  },
);
