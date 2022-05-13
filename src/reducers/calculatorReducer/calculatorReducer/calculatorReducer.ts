import { EMPTY_STRING } from '../../../constants';
import * as calculatorConstants from '../constants';
import { ActionCalculatorTypes, CalculatorInitialValueType } from '../types';

export const CalculatorInitialValue: CalculatorInitialValueType = {
  currentValue: EMPTY_STRING,
  isShowControlPanel: true,
  buttons: [
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '+' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '-' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '*' },
    { value: '(' },
    { value: '0' },
    { value: ')' },
    { value: '/' },
  ],
  operations: [{ value: '.' }, { value: '=' }, { value: 'CE' }, { value: 'C' }],
};

export const calculatorReducer = (
  state: CalculatorInitialValueType = CalculatorInitialValue,
  action: ActionCalculatorTypes,
): CalculatorInitialValueType => {
  switch (action.type) {
    case calculatorConstants.CHANGE_CURRENT_VALUE: {
      return {
        ...state,
        currentValue: action.payload.value,
      };
    }
    case calculatorConstants.DELETE_LAST_SYMBOL: {
      return {
        ...state,
        currentValue: action.payload.value,
      };
    }
    case calculatorConstants.NULLIFY_VALUE: {
      return {
        ...state,
        currentValue: EMPTY_STRING,
      };
    }
    case calculatorConstants.SET_ERROR_VALUE: {
      return {
        ...state,
        currentValue: 'Error, incorrect expression',
      };
    }
    case calculatorConstants.SET_CONTROL_PANEL_VISIBILITY: {
      return {
        ...state,
        isShowControlPanel: action.payload.status,
      };
    }
    default:
      return state;
  }
};
