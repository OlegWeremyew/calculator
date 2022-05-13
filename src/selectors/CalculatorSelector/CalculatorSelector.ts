import { ButtonsType } from '../../reducers/calculatorReducer/calculatorReducer';
import { AppRootStateType } from '../../store';

export const getCurrentValue = (state: AppRootStateType): string =>
  state.calculator.currentValue;

export const getButtons = (state: AppRootStateType): ButtonsType[] =>
  state.calculator.buttons;

export const getOperations = (state: AppRootStateType): ButtonsType[] =>
  state.calculator.operations;

export const getIsShowControlPanel = (state: AppRootStateType): boolean =>
  state.calculator.isShowControlPanel;
