import React, { FC } from 'react';

import { HistoryContainer, Title } from './components';
import { HistoryList } from './HistoryList';

export const History: FC = () => (
  <HistoryContainer>
    <Title>History</Title>
    <HistoryList />
  </HistoryContainer>
);
