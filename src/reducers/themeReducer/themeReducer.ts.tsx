const CHANGE_THEME = 'CHANGE_THEME';
export type ThemeType = 'dark' | 'green' | 'light';
const initialThemeState = {
  theme: 'light' as ThemeType,
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
export const changeThemeAC = (theme: ThemeType) =>
  ({
    type: CHANGE_THEME,
    payload: { theme },
  } as const);
