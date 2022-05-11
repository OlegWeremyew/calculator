import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { PATH } from '../../constants';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import History from '../History/History';
import PageNotFound from '../PageNotFound/PageNotFound';

const Calculator = React.lazy(() => import('../../pages/Calculator/Calculator'));
const Settings = React.lazy(() => import('../../pages/Settings/Settings'));

const MainContent = (): ReturnComponentType => (
  <main>
    <Routes>
      <Route path={PATH.HOME_PAGE_ROUTE} element={<Calculator />} />
      <Route path={PATH.SETTINGS_PAGE_ROUTE} element={<Settings />} />
      <Route path={PATH.ERROR_PAGE_ROUTE} element={<PageNotFound />} />
    </Routes>
    <History />
  </main>
);

export default MainContent;
