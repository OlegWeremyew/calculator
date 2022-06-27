import React, { Suspense } from 'react';

import { ThemeProvider } from 'styled-components';

import { AppWrapper } from './components';

import { Header, Loader, MainContent } from 'components';
import { ReturnComponentType } from 'types/ReturnComponentType';
import { useGetTheme } from 'utils';

export const App = (): ReturnComponentType => {
  const themeStyle = useGetTheme();

  return (
    <ThemeProvider theme={themeStyle}>
      <Suspense fallback={<Loader />}>
        <AppWrapper>
          <Header />
          <MainContent />
        </AppWrapper>
      </Suspense>
    </ThemeProvider>
  );
};
