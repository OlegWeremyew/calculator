import React from 'react';

import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import MainContent from '../components/MainContent/HomePage';
import { getThemeValue } from '../selectors/ThemeSelector/ThemeSelector';
import { themeDark, themeLight, themeLightBrown } from '../theme';
import { ReturnComponentType } from '../types/ReturnComponentType';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const App = (): ReturnComponentType => {
  const themeValue = useSelector(getThemeValue);
  let themeStyle: any;

  if (themeValue === 'light') {
    themeStyle = themeLight;
  }
  if (themeValue === 'dark') {
    themeStyle = themeDark;
  }
  if (themeValue === 'light-brown') {
    themeStyle = themeLightBrown;
  }

  return (
    <React.Suspense fallback={<Loader />}>
      <ThemeProvider theme={themeStyle}>
        <AppWrapper>
          <Header />
          <MainContent />
        </AppWrapper>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;
