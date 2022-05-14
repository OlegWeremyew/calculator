import { DefaultTheme } from 'styled-components';

import { colors } from './constants';

export const themeLight: DefaultTheme = {
  background: colors.white,
  color: colors.black,
  buttonsBgc: colors.darkWhite,
  hoverBgc: colors.hoverWhite,
  border: colors.black,
  displayBgc: colors.darkWhite,
  error: colors.error,
};

export const themeDark: DefaultTheme = {
  background: colors.black,
  color: colors.white,
  buttonsBgc: colors.lightBlack,
  hoverBgc: colors.hoverBlack,
  border: colors.hoverWhite,
  displayBgc: colors.lightBlack,
  error: colors.error,
};

export const themeLightBrown: DefaultTheme = {
  background: colors.lightBrown,
  color: colors.burgundy,
  buttonsBgc: colors.darkBrown,
  hoverBgc: colors.hoverBrown,
  border: colors.burgundy,
  displayBgc: colors.darkBrown,
  error: colors.error,
};

export const themeHeavenly: DefaultTheme = {
  background: colors.heavenly,
  color: colors.lightBlack,
  buttonsBgc: colors.heavenlyBlack,
  hoverBgc: colors.hoverHeavenly,
  border: colors.lightBlack,
  displayBgc: colors.heavenlyBlack,
  error: colors.error,
};
export const themeCrimson: DefaultTheme = {
  background: colors.crimson,
  color: colors.black,
  buttonsBgc: colors.crimsonBlack,
  hoverBgc: colors.hoverCrimson,
  border: colors.lightBlack,
  displayBgc: colors.crimson,
  error: colors.error,
};
