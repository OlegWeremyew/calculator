import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../../layouts';
import { historyAction } from '../../../reducers';
import { getIsShowHistoryValue } from '../../../selectors';

import { HistoryContainer, Title } from './components';
import { HistoryButton } from './HistoryButton';

export const ControlPanel: FC = () => {
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
        <Container>
          <div>
            <HistoryButton callback={clearHistory}>Clear history 🗑️</HistoryButton>
            <HistoryButton callback={hideHistoryHandler}>
              Hide history &#128584;
            </HistoryButton>
          </div>
        </Container>
      ) : (
        <Container>
          <HistoryButton callback={showHistoryHandler}>Show history 👀</HistoryButton>
        </Container>
      )}
    </HistoryContainer>
  );
};
