import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { historyAction } from '../../../reducers';
import { getIsShowHistoryValue } from '../../../selectors';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { ControlBlock, HistoryContainer, Title } from './components';
import { HistoryButton } from './HistoryButton';

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
    <HistoryContainer>
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
          <HistoryButton callback={showHistoryHandler}>Show history 👀</HistoryButton>
        </ControlBlock>
      )}
    </HistoryContainer>
  );
};
export default ControlPanel;
