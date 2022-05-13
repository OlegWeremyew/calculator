import * as themeConstants from '../constants';
import { MainThemeType } from '../types';

export const themeActions = {
  changeTheme(theme: MainThemeType) {
    return {
      type: themeConstants.CHANGE_THEME,
      payload: {
        theme,
      },
    } as const;
  },
};
