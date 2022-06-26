import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { historyAction } from '../../../../../reducers';

import { HistoryButton, HistoryItemContainer } from './components';
import { HistoryItemType } from './types';

export const HistoryItem: FC<HistoryItemType> = ({ historyWindow }) => {
  const dispatch = useDispatch();

  const deleteHistoryItem = (ItemID: string): void => {
    dispatch(historyAction.deleteHistoryItem(ItemID));
  };
  return (
    <article>
      <ol>
        {historyWindow.map(historyItem => (
          <HistoryItemContainer key={historyItem.id}>
            <li>
              {historyItem.value} = {historyItem.result}
            </li>
            <HistoryButton onClick={() => deleteHistoryItem(historyItem.id)}>
              ⌦
            </HistoryButton>
          </HistoryItemContainer>
        ))}
      </ol>
    </article>
  );
};
