import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${theme.fonts.primary};
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
      color: darkred;
    }
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, rgba(224, 196, 204, 0.85), #f1c87c);
  }
`;
