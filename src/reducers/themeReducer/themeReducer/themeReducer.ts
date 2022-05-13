import * as themeConstants from '../constants';
import { ActionThemeTypes, initStateThemeType, MainThemeType } from '../types';

export const initialThemeState = {
  theme: 'dark' as MainThemeType,
};

export const themeReducer = (
  state: initStateThemeType = initialThemeState,
  action: ActionThemeTypes,
): initStateThemeType => {
  switch (action.type) {
    case themeConstants.CHANGE_THEME: {
      return { ...state, theme: action.payload.theme };
    }
    default:
      return state;
  }
};
