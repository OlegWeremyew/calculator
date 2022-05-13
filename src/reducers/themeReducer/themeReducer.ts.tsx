import { InferActionTypes } from '../../store';

const CHANGE_THEME = 'CHANGE_THEME';
export type MainThemeType = 'dark' | 'light-brown' | 'light' | 'heavenly' | 'crimson';
const initialThemeState = {
  theme: 'dark' as MainThemeType,
};

type initStateThemeType = typeof initialThemeState;

export const themeReducer = (
  state: initStateThemeType = initialThemeState,
  action: ActionThemeTypes,
): initStateThemeType => {
  switch (action.type) {
    case CHANGE_THEME: {
      return { ...state, theme: action.payload.theme };
    }
    default:
      return state;
  }
};

export const themeActions = {
  changeTheme(theme: MainThemeType) {
    return {
      type: CHANGE_THEME,
      payload: {
        theme,
      },
    } as const;
  },
};

export type ActionThemeTypes = InferActionTypes<typeof themeActions>;
