import * as calculatorConstants from '../constants';

export const calculatorAction = {
  changeCurrentValue(value: string) {
    return {
      type: calculatorConstants.CHANGE_CURRENT_VALUE,
      payload: {
        value,
      },
    } as const;
  },
  deleteLastSymbol(value: string) {
    return {
      type: calculatorConstants.DELETE_LAST_SYMBOL,
      payload: {
        value,
      },
    } as const;
  },
  NullifyValue() {
    return {
      type: calculatorConstants.NULLIFY_VALUE,
    } as const;
  },
  setErrorValue() {
    return {
      type: calculatorConstants.SET_ERROR_VALUE,
    } as const;
  },
  setControlPanelVisibility(status: boolean) {
    return {
      type: calculatorConstants.SET_CONTROL_PANEL_VISIBILITY,
      payload: {
        status,
      },
    } as const;
  },
};
