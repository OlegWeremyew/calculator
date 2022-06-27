import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { PageContainer, ReturnButton, Title } from './components';

import { PATH } from 'constants/router';

const NotFoundPage: FC = () => {
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

export default NotFoundPage;
