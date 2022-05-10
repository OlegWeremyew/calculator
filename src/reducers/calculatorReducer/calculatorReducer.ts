export const CalculatorInitialValue: CalculatorInitialValueType = {
  currentValue: 0,
};

export type CalculatorInitialValueType = {
  currentValue: number;
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
