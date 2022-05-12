import { MainThemeType } from '../../reducers/themeReducer/themeReducer.ts';
import { AppRootStateType } from '../../store';

export const getThemeValue = (state: AppRootStateType): MainThemeType =>
  state.theme.theme;
