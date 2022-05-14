export type ThemeType = {
  theme: ThemeObjectType;
};

export type ThemeObjectType = {
  background: string;
  color: string;
  buttonsBgc: string;
  hoverBgc: string;
  border: string;
  error: string;
  displayBgc: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    color: string;
    buttonsBgc: string;
    hoverBgc: string;
    border: string;
    error: string;
    displayBgc: string;
  }
}
