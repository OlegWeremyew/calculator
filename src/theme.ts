import { DefaultTheme } from 'styled-components';

const black = '#1e1d1d';
const lightBlack = '#2f2d2d';
const hoverBlack = '#504c4c';
const white = '#eae5e5';
const darkWhite = '#d3c5c5';
const hoverWhite = '#a49595';
const lightBrown = '#bd872f';
const darkBrown = '#986e26';
const hoverBrown = '#98661f';
const burgundy = '#44050c';
const error = '#c86464';

export const themeLight: DefaultTheme = {
  background: white,
  color: black,
  buttonsBgc: darkWhite,
  font: 'sans-serif',
  hoverBgc: hoverWhite,
  border: black,
  error,
};

export const themeDark: DefaultTheme = {
  background: black,
  color: white,
  buttonsBgc: lightBlack,
  font: 'sans-serif',
  hoverBgc: hoverBlack,
  border: white,
  error,
};

export const themeLightBrown: DefaultTheme = {
  background: lightBrown,
  color: burgundy,
  buttonsBgc: darkBrown,
  font: 'sans-serif',
  hoverBgc: hoverBrown,
  border: burgundy,
  error,
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
  };
};
