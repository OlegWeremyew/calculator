import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Header, Loader, MainContent } from '../components';
import { ReturnComponentType } from '../types/ReturnComponentType';
import { getTheme } from '../utils';

import { AppWrapper } from './components';

export const App = (): ReturnComponentType => {
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
