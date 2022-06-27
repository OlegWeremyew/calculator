import { calculatorAction } from '../calculatorAction';

import { InferActionTypes } from 'store';

export type CalculatorInitialValueType = {
  currentValue: string;
  isShowControlPanel: boolean;
};

export type ActionCalculatorTypes = InferActionTypes<typeof calculatorAction>;
