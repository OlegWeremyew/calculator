export const CalculatorInitialValue: CalculatorInitialValueType = {
  currentValue: '0',
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
  action: any,
): CalculatorInitialValueType => {
  switch (action.type) {
    case '': {
      return state;
    }

    default:
      return state;
  }
};
