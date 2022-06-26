import React, { FC, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import { PATH } from '../../constants';

import { MainContainer } from './components';

const Calculator = lazy(() => import('../../pages/CalculatorPage/CalculatorPage'));
const Settings = lazy(() => import('../../pages/SettingsPage/SettingsPage'));
const PageNotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

export const MainContent: FC = () => (
  <MainContainer>
    <Routes>
      <Route path={PATH.HOME_PAGE_ROUTE} element={<Calculator />} />
      <Route path={PATH.SETTINGS_PAGE_ROUTE} element={<Settings />} />
      <Route path={PATH.ERROR_PAGE_ROUTE} element={<PageNotFound />} />
    </Routes>
  </MainContainer>
);
