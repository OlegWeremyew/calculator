import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { PATH } from '../../constants';

import { PageContainer, ReturnButton, Title } from './components';

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
