import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import MainContent from '../components/MainContent/HomePage';
import { ReturnComponentType } from '../types/ReturnComponentType';
import { getTheme } from '../utils/getTheme';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const App = (): ReturnComponentType => {
  const themeStyle = getTheme();

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
