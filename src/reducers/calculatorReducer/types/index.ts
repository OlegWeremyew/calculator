import { InferActionTypes } from '../../../store';
import { calculatorAction } from '../calculatorAction';

export type CalculatorInitialValueType = {
  currentValue: string;
  isShowControlPanel: boolean;
};

export type ActionCalculatorTypes = InferActionTypes<typeof calculatorAction>;
