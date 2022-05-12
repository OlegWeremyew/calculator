import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { historyAction } from '../../reducers/historyReducer/historyReducer';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import HistoryButton from './HistoryButton/HistoryButton';
import HistoryList from './HistoryList/HistoryList';

const StyledHistory = styled.div`
  font-size: 20px;
  padding: 10px 10px 10px 20px;
  margin-left: 20px;
  width: 320px;
  border: ${({ theme }: any) => theme.borders.primary} 2px solid;

  @media ${({ theme }: any) => theme.media.tablet} {
    width: 420px;
    margin-left: 0;
    margin-top: 10px;
  }

  @media ${({ theme }: any) => theme.media.phone} {
    width: 314px;
    margin-left: 0;
    margin-top: 10px;
  }
`;

const ControlBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const History = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [isDisplayHistory, setIsDisplayHistory] = useState<boolean>(true);

  const clearHistory = (): void => {
    dispatch(historyAction.clearHistory());
  };

  return (
    <StyledHistory>
      {isDisplayHistory ? (
        <ControlBlock>
          <div>
            <HistoryButton callback={clearHistory}>clear history</HistoryButton>
            <HistoryButton callback={() => setIsDisplayHistory(false)}>
              hide history
            </HistoryButton>
          </div>
          <HistoryList />
        </ControlBlock>
      ) : (
        <ControlBlock>
          <HistoryButton callback={() => setIsDisplayHistory(true)}>
            show history
          </HistoryButton>
        </ControlBlock>
      )}
    </StyledHistory>
  );
};

export default History;
