import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { PATH } from '../../constants';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { MainContainer } from './components';

const Calculator = React.lazy(() => import('../../pages/CalculatorPage/CalculatorPage'));
const Settings = React.lazy(() => import('../../pages/SettingsPage/SettingsPage'));
const PageNotFound = React.lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

export const MainContent = (): ReturnComponentType => (
  <MainContainer>
    <Routes>
      <Route path={PATH.HOME_PAGE_ROUTE} element={<Calculator />} />
      <Route path={PATH.SETTINGS_PAGE_ROUTE} element={<Settings />} />
      <Route path={PATH.ERROR_PAGE_ROUTE} element={<PageNotFound />} />
    </Routes>
  </MainContainer>
);
