import { themeActions } from '../themeActions';
import { initialThemeState } from '../themeReducer';

import { InferActionTypes } from 'store';

export type ActionThemeTypes = InferActionTypes<typeof themeActions>;
export type MainThemeType = 'dark' | 'light-brown' | 'light' | 'heavenly' | 'crimson';
export type initStateThemeType = typeof initialThemeState;
