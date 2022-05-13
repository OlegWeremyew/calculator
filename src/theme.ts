import { DefaultTheme } from 'styled-components';

const black = '#1e1d1d';
const lightBlack = '#2f2d2d';
const hoverBlack = '#504c4c';
const white = '#eae5e5';
const darkWhite = '#d3c5c5';
const hoverWhite = '#a49595';
const lightBrown = '#c29b59';
const darkBrown = '#a48143';
const hoverBrown = '#8a6227';
const heavenly = '#86a5b6';
const heavenlyBlack = '#4388a1';
const hoverHeavenly = '#3d6c83';
const burgundy = '#44050c';
const error = '#c86464';

export const themeLight: DefaultTheme = {
  background: white,
  color: black,
  buttonsBgc: darkWhite,
  font: 'sans-serif',
  hoverBgc: hoverWhite,
  border: black,
  displayBgc: darkWhite,
  error,
};

export const themeDark: DefaultTheme = {
  background: black,
  color: white,
  buttonsBgc: lightBlack,
  font: 'sans-serif',
  hoverBgc: hoverBlack,
  border: hoverWhite,
  displayBgc: lightBlack,
  error,
};

export const themeLightBrown: DefaultTheme = {
  background: lightBrown,
  color: burgundy,
  buttonsBgc: darkBrown,
  font: 'sans-serif',
  hoverBgc: hoverBrown,
  border: burgundy,
  displayBgc: darkBrown,
  error,
};

export const themeHeavenly: DefaultTheme = {
  background: heavenly,
  color: lightBlack,
  buttonsBgc: heavenlyBlack,
  font: 'sans-serif',
  hoverBgc: hoverHeavenly,
  border: lightBlack,
  displayBgc: heavenlyBlack,
  error,
};
export const themeCrimson: DefaultTheme = {
  background: heavenly,
  color: lightBlack,
  buttonsBgc: heavenlyBlack,
  font: 'sans-serif',
  hoverBgc: hoverHeavenly,
  border: lightBlack,
  displayBgc: heavenlyBlack,
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
