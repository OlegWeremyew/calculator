import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/HomePage';
import { ReturnComponentType } from '../types/ReturnComponentType';

const AppWrapper = styled.div`
  width: 1200px;
  min-height: 100vh;
`;

const App = (): ReturnComponentType => (
  <React.Suspense fallback={<span>df</span>}>
    <AppWrapper>
      <Header />
      <MainContent />
    </AppWrapper>
  </React.Suspense>
);

export default App;
