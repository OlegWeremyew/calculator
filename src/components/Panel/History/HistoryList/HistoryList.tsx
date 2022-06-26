import React, { FC } from 'react';

import { useGetHistoryList } from '../../../../utils';

import { HistoryListContainer, Text, Title } from './components';
import { HistoryItem } from './HistoryItem';

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
