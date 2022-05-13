import React from 'react';

import { useDispatch } from 'react-redux';

import { historyAction } from '../../../../../reducers';
import { ReturnComponentType } from '../../../../../types/ReturnComponentType';

import { HistoryButton, HistoryItemContainer } from './components';
import { HistoryItemType } from './types';

export const HistoryItem: React.FC<HistoryItemType> = ({
  historyWindow,
}): ReturnComponentType => {
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
