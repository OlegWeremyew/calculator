import React from 'react';

import styled from 'styled-components';

import { ThemeType } from '../../../theme';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import HistoryList from './HistoryList/HistoryList';

const HistoryContainer = styled.details`
  font-size: 20px;
  padding: 10px;
  margin-left: 15px;
  width: 320px;
  margin-top: 10px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;

  @media (max-width: 800px) {
    width: 420px;
    margin-left: 0;
    margin-top: 10px;
  }

  @media (max-width: 445px) {
    width: 314px;
    margin-left: 0;
    margin-top: 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 0 0 10px 0;
`;

const History = (): ReturnComponentType => (
  <HistoryContainer>
    <Title>History</Title>
    <HistoryList />
  </HistoryContainer>
);

export default History;
