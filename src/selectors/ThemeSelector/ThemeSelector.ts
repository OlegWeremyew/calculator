import { MainThemeType } from 'reducers/themeReducer/types';
import { AppRootStateType } from 'store';

export const getThemeValue = (state: AppRootStateType): MainThemeType =>
  state.theme.theme;
