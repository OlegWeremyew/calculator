import React from 'react';

import { useNavigate } from 'react-router-dom';

import { PATH } from '../../constants';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { PageContainer, ReturnButton, Title } from './components';

const PageNotFound = (): ReturnComponentType => {
  const navigate = useNavigate();

  const returnHomePage = (): void => {
    navigate(`${PATH.HOME_PAGE_ROUTE}`);
  };

  return (
    <PageContainer>
      <Title>Page not found</Title>
      <ReturnButton type="button" onClick={returnHomePage}>
        Return to the homepage 🏠
      </ReturnButton>
    </PageContainer>
  );
};

export default PageNotFound;
