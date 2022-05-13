import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';
import { getHistoryList } from '../../../../utils/getHistoryList';

import HistoryItem from './HistoryItem/HistoryItem';

const HistoryListContainer = styled.div`
  padding-left: 10px;
  margin-left: 10px;
`;

const Text = styled.div`
  margin: 10px 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 18px;
`;

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
