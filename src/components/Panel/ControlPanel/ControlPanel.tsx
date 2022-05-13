import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { historyAction } from '../../../reducers/historyReducer/historyReducer';
import { getIsShowHistoryValue } from '../../../selectors/HistorySelectors/HistorySelectors';
import { ThemeType } from '../../../theme';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import HistoryButton from '../History/HistoryButton/HistoryButton';

const StyledHistory = styled.div`
  font-size: 20px;
  padding: 10px;
  margin-left: 15px;
  width: 320px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;

  @media (max-width: 800px) {
    width: 420px;
    margin-left: 0;
    margin-top: 10px;
  }

  @media (max-width: 445px) {
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

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 0 0 10px 0;
`;

const ControlPanel = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const isShowHistory = useSelector(getIsShowHistoryValue);

  const clearHistory = (): void => {
    dispatch(historyAction.clearHistory());
  };

  const showHistoryHandler = (): void => {
    dispatch(historyAction.setHistoryBlockVisibility(true));
  };

  const hideHistoryHandler = (): void => {
    dispatch(historyAction.setHistoryBlockVisibility(false));
  };

  return (
    <StyledHistory>
      <Title>ControlPanel</Title>
      {isShowHistory ? (
        <ControlBlock>
          <div>
            <HistoryButton callback={clearHistory}>Clear history 🗑️</HistoryButton>
            <HistoryButton callback={hideHistoryHandler}>
              Hide history &#128584;
            </HistoryButton>
          </div>
        </ControlBlock>
      ) : (
        <ControlBlock>
          <HistoryButton callback={showHistoryHandler}>
            Show history &#128065;
          </HistoryButton>
        </ControlBlock>
      )}
    </StyledHistory>
  );
};
export default ControlPanel;
