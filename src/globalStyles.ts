import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'sans-serif';
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 18px;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
      color: inherit;
      opacity: 0.7;
      font-weight: 500;
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
  }
`;
