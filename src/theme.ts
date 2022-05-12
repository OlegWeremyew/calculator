const black = '#000000';
const lightBlack = '#2d2b2b';
const white = '#eae5e5';
const darkWhite = '#d3c5c5';
const lightBrown = '#e8b564';
const darkBrown = '#c29242';
const green = '#6dc775';
const error = '#c86464';

export const theme = {
  backgrounds: {
    primary: white,
    secondary: black,
    tertiary: lightBrown,
  },
  colors: {
    primary: black,
    secondary: white,
    tertiary: green,
    error,
  },
  buttonsBgc: {
    primary: darkWhite,
    secondary: lightBlack,
    tertiary: darkBrown,
  },
  fonts: {
    primary: 'sans-serif',
  },
  borders: {
    primary: black,
    secondary: white,
    tertiary: green,
  },
  media: {
    phone: '(max-width: 445px)',
    tablet: '(max-width: 800px) and (min-width: 445px)',
  },
};
