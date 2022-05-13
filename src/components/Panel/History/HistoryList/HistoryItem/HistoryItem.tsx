import React from 'react';

import { useDispatch } from 'react-redux';

import { historyAction } from '../../../../../reducers';
import { HistoryType } from '../../../../../reducers/historyReducer/types';
import { ReturnComponentType } from '../../../../../types/ReturnComponentType';

import { HistoryButton, HistoryItemContainer } from './components';

const HistoryItem: React.FC<HistoryItemType> = ({
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

export default HistoryItem;

export type HistoryItemType = {
  historyWindow: HistoryType[];
};
