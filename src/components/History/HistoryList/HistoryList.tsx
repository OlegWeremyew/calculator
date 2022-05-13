import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getHistory } from '../../../selectors/HistorySelectors/HistorySelectors';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const StyledHistoryList = styled.div`
  padding-left: 10px;
  margin-left: 10px;
`;

const Title = styled.div`
  text-decoration: underline;
  margin: 10px 0;
`;

const HistoryList = (): ReturnComponentType => {
  const historyWindow = useSelector(getHistory);

  return (
    <StyledHistoryList>
      <Title>
        {historyWindow.length
          ? 'Operations history is below'
          : 'Operations history is empty'}
      </Title>
      <ol>
        {historyWindow.map(historyItem => (
          <li key={historyItem.id}>{historyItem.value}</li>
        ))}
      </ol>
    </StyledHistoryList>
  );
};

export default HistoryList;
