import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PATH } from '../../constants';
import { ThemeType } from '../../theme';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 30px 0;
`;

const ReturnButton = styled.button`
  width: 300px;
  height: 60px;
  font-size: 25px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  color: ${({ theme }: ThemeType) => theme.color};
  cursor: pointer;
  border-radius: 5px;
  border: ${({ theme }: ThemeType) => theme.border} 2px solid;

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:active {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }
`;

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
