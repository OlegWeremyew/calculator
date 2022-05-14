import React from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';
import { useGetHistoryList } from '../../../../utils';

import { HistoryListContainer, Text, Title } from './components';
import { HistoryItem } from './HistoryItem';

export const HistoryList = (): ReturnComponentType => {
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
