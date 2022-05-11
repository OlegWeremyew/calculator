import React from 'react';

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { PATH } from '../../constants';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import PageNotFound from '../PageNotFound/PageNotFound';

const StyledMainContent = styled.main`
  display: flex;
  justify-content: center;
`;

const Calculator = React.lazy(() => import('../../pages/Calculator/Calculator'));
const Settings = React.lazy(() => import('../../pages/Settings/Settings'));

const MainContent = (): ReturnComponentType => (
  <StyledMainContent>
    <Routes>
      <Route path={PATH.HOME_PAGE_ROUTE} element={<Calculator />} />
      <Route path={PATH.SETTINGS_PAGE_ROUTE} element={<Settings />} />
      <Route path={PATH.ERROR_PAGE_ROUTE} element={<PageNotFound />} />
    </Routes>
  </StyledMainContent>
);

export default MainContent;
