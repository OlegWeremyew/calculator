import { InferActionTypes } from '../../../store';
import { calculatorAction } from '../calculatorAction';

export type CalculatorInitialValueType = {
  currentValue: string;
  isShowControlPanel: boolean;
  buttons: ButtonsType[];
  operations: ButtonsType[];
};

export type ButtonsType = {
  value: string;
};

export type ActionCalculatorTypes = InferActionTypes<typeof calculatorAction>;
