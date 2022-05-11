import { EMPTY_STRING } from '../../constants';
import { InferActionTypes } from '../../store';

export const CalculatorInitialValue: CalculatorInitialValueType = {
  currentValue: EMPTY_STRING,
  buttons: [
    { value: '0' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '+' },
    { value: '-' },
    { value: '*' },
    { value: '/' },
  ],
  operations: [{ value: '=' }, { value: 'CE' }, { value: 'C' }],
};

export type CalculatorInitialValueType = {
  currentValue: string;
  buttons: ButtonsType[];
  operations: ButtonsType[];
};

export type ButtonsType = {
  value: string;
};

export const calculatorReducer = (
  state: CalculatorInitialValueType = CalculatorInitialValue,
  action: ActionCalculatorTypes,
): CalculatorInitialValueType => {
  switch (action.type) {
    case 'ADD_NEW_SYMBOL': {
      return {
        ...state,
        currentValue: action.payload.value,
      };
    }
    case 'DELETE_LAST_SYMBOL': {
      return {
        ...state,
        currentValue: action.payload.value,
      };
    }
    case 'NULLIFY_VALUE': {
      return {
        ...state,
        currentValue: EMPTY_STRING,
      };
    }
    case 'SET_ERROR_VALUE': {
      return {
        ...state,
        currentValue: 'Error',
      };
    }
    default:
      return state;
  }
};

export const calculatorAction = {
  addNewSymbol(value: string) {
    return {
      type: 'ADD_NEW_SYMBOL',
      payload: {
        value,
      },
    } as const;
  },
  deleteLastSymbol(value: string) {
    return {
      type: 'DELETE_LAST_SYMBOL',
      payload: {
        value,
      },
    } as const;
  },
  NullifyValue() {
    return {
      type: 'NULLIFY_VALUE',
    } as const;
  },
  setErrorValue() {
    return {
      type: 'SET_ERROR_VALUE',
    } as const;
  },
};

export type ActionCalculatorTypes = InferActionTypes<typeof calculatorAction>;
