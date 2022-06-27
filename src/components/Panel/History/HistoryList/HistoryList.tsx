import React, { FC } from 'react';

import { HistoryListContainer, Text, Title } from './components';
import { HistoryItem } from './HistoryItem';

import { useGetHistoryList } from 'utils';

export const HistoryList: FC = () => {
  const historyWindow = useGetHistoryList();
  return (
    <HistoryListContainer>
      <Text>
        {!historyWindow.length ? (
          <Title>Operations history is empty</Title>
        ) : (
          <HistoryItem historyWindow={historyWindow} />
        )}
      </Text>
    </HistoryListContainer>
  );
};
