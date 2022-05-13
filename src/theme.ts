import { DefaultTheme } from 'styled-components';

import { colors } from './constants/colors';

export const themeLight: DefaultTheme = {
  background: colors.white,
  color: colors.black,
  buttonsBgc: colors.darkWhite,
  font: 'sans-serif',
  hoverBgc: colors.hoverWhite,
  border: colors.black,
  displayBgc: colors.darkWhite,
  error: colors.error,
};

export const themeDark: DefaultTheme = {
  background: colors.black,
  color: colors.white,
  buttonsBgc: colors.lightBlack,
  font: 'sans-serif',
  hoverBgc: colors.hoverBlack,
  border: colors.hoverWhite,
  displayBgc: colors.lightBlack,
  error: colors.error,
};

export const themeLightBrown: DefaultTheme = {
  background: colors.lightBrown,
  color: colors.burgundy,
  buttonsBgc: colors.darkBrown,
  font: 'sans-serif',
  hoverBgc: colors.hoverBrown,
  border: colors.burgundy,
  displayBgc: colors.darkBrown,
  error: colors.error,
};

export const themeHeavenly: DefaultTheme = {
  background: colors.heavenly,
  color: colors.lightBlack,
  buttonsBgc: colors.heavenlyBlack,
  font: 'sans-serif',
  hoverBgc: colors.hoverHeavenly,
  border: colors.lightBlack,
  displayBgc: colors.heavenlyBlack,
  error: colors.error,
};
export const themeCrimson: DefaultTheme = {
  background: colors.crimson,
  color: colors.black,
  buttonsBgc: colors.crimsonBlack,
  font: 'sans-serif',
  hoverBgc: colors.hoverCrimson,
  border: colors.lightBlack,
  displayBgc: colors.crimson,
  error: colors.error,
};

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    color: string;
    buttonsBgc: string;
    font: string;
    hoverBgc: string;
    border: string;
    error: string;
    displayBgc: string;
  }
}

export type ThemeType = {
  theme: {
    background: string;
    color: string;
    buttonsBgc: string;
    font: string;
    hoverBgc: string;
    border: string;
    error: string;
    displayBgc: string;
  };
};
