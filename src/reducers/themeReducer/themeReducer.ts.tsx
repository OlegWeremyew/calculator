const CHANGE_THEME = 'CHANGE_THEME';
export type MainThemeType = 'dark' | 'light-brown' | 'light' | 'heavenly' | 'crimson';
const initialThemeState = {
  theme: 'light' as MainThemeType,
};

type initStateThemeType = typeof initialThemeState;

export const themeReducer = (
  state: initStateThemeType = initialThemeState,
  action: changeThemeActionType,
): initStateThemeType => {
  switch (action.type) {
    case CHANGE_THEME: {
      return { ...state, theme: action.payload.theme };
    }
    default:
      return state;
  }
};

export type changeThemeActionType = ReturnType<typeof changeThemeAC>;
export const changeThemeAC = (theme: MainThemeType) =>
  ({
    type: CHANGE_THEME,
    payload: { theme },
  } as const);
