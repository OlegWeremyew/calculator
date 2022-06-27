import { AppRootStateType } from 'store';

export const getCurrentValue = (state: AppRootStateType): string =>
  state.calculator.currentValue;

export const getIsShowControlPanel = (state: AppRootStateType): boolean =>
  state.calculator.isShowControlPanel;
