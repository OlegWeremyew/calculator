import React from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';
import { getHistoryList } from '../../../../utils';

import { HistoryListContainer, Text, Title } from './components';
import HistoryItem from './HistoryItem/HistoryItem';

const HistoryList = (): ReturnComponentType => {
  const historyWindow = getHistoryList();

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

export default HistoryList;
