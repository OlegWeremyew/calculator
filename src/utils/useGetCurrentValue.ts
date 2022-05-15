import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { calculatorAction } from '../reducers';
import { getCurrentValue } from '../selectors';

export const useGetCurrentValueFromLocalStorage = (): string => {
  const dispatch = useDispatch();

  const currentValue = useSelector(getCurrentValue);

  useEffect(() => {
    const currentValueAsString = localStorage.getItem('currentValueAsString');
    currentValueAsString &&
      dispatch(calculatorAction.changeCurrentValue(JSON.parse(currentValueAsString)));
  }, []);

  useEffect(() => {
    localStorage.setItem('currentValueAsString', JSON.stringify(currentValue));
  }, [currentValue]);
  return currentValue;
};
