import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { calculatorAction } from '../reducers';
import { getCurrentValue } from '../selectors/CalculatorSelector/CalculatorSelector';

export const getCurrentValueFromLocalStorage = (): string => {
  const dispatch = useDispatch();

  const currentValue = useSelector(getCurrentValue);

  useEffect(() => {
    const currentValueAsString = localStorage.getItem('currentValueAsString');
    // eslint-disable-next-line no-unused-expressions
    currentValueAsString &&
      dispatch(calculatorAction.changeCurrentValue(JSON.parse(currentValueAsString)));
  }, []);

  useEffect(() => {
    localStorage.setItem('currentValueAsString', JSON.stringify(currentValue));
  }, [currentValue]);
  return currentValue;
};
