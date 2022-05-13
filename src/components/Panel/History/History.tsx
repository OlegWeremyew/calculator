import React from 'react';

import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { HistoryContainer, Title } from './components';
import HistoryList from './HistoryList/HistoryList';

const History = (): ReturnComponentType => (
  <HistoryContainer>
    <Title>History</Title>
    <HistoryList />
  </HistoryContainer>
);

export default History;
