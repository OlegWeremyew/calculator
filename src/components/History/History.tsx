import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { historyAction } from '../../reducers/historyReducer/historyReducer';
import { getHistory } from '../../selectors/HistorySelectors/HistorySelectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  padding: 10px;
`;

const StyledButton = styled.button`
  background-color: #863232;
`;

const History = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const historyWindow = useSelector(getHistory);

  const [isDisplayHistory, setIsDisplayHistory] = useState<boolean>(true);

  const clearHistory = (): void => {
    dispatch(historyAction.clearHistory());
  };

  return (
    <StyledHistory>
      {isDisplayHistory ? (
        <>
          <div>
            <StyledButton type="button" onClick={clearHistory}>
              clear history
            </StyledButton>
            <StyledButton type="button" onClick={() => setIsDisplayHistory(false)}>
              hide history
            </StyledButton>
          </div>
          <div>
            {historyWindow.length
              ? 'operations history is shown below'
              : 'operations history is empty'}
            <ul>
              {historyWindow.map(item => (
                <li key={item.id}>{item.value}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <StyledButton type="button" onClick={() => setIsDisplayHistory(true)}>
          show history
        </StyledButton>
      )}
    </StyledHistory>
  );
};

export default History;
