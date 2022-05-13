import React from 'react';

import { ThemeProvider } from 'styled-components';

import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import MainContent from '../components/MainContent/HomePage';
import { ReturnComponentType } from '../types/ReturnComponentType';
import { getTheme } from '../utils/getTheme';

import { AppWrapper } from './components';

export default (): ReturnComponentType => {
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
