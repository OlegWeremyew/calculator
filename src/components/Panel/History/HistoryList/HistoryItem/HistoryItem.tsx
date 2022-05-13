import React from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  historyAction,
  HistoryType,
} from '../../../../../reducers/historyReducer/historyReducer';
import { ThemeType } from '../../../../../theme';
import { ReturnComponentType } from '../../../../../types/ReturnComponentType';

const HistoryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const HistoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 30px;
  cursor: pointer;
  background: ${({ theme }: ThemeType) => theme.background};
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 20px;
  border-radius: 3px;

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:active {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }
`;

const HistoryItem: React.FC<HistoryItemType> = ({
  historyWindow,
}): ReturnComponentType => {
  const dispatch = useDispatch();

  const deleteHistoryItem = (ItemID: string): void => {
    dispatch(historyAction.deleteHistoryItem(ItemID));
  };

  return (
    <div>
      <ol>
        {historyWindow.map(historyItem => (
          <HistoryItemContainer key={historyItem.id}>
            <li>{historyItem.value}</li>
            <HistoryButton onClick={() => deleteHistoryItem(historyItem.id)}>
              ⌦
            </HistoryButton>
          </HistoryItemContainer>
        ))}
      </ol>
    </div>
  );
};

export default HistoryItem;

export type HistoryItemType = {
  historyWindow: HistoryType[];
};
