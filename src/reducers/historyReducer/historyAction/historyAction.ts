import * as historyConstants from '../constants';
import { HistoryType } from '../types';

export const historyAction = {
  addNewHistory(value: string, current: string) {
    return {
      type: historyConstants.ADD_NEW_HISTORY,
      payload: {
        value,
        current,
      },
    } as const;
  },
  clearHistory() {
    return {
      type: historyConstants.CLEAR_HISTORY,
    } as const;
  },
  setHistoryBlockVisibility(status: boolean) {
    return {
      type: historyConstants.SET_HISTORY_BLOCK_VISIBILITY,
      payload: {
        status,
      },
    } as const;
  },
  setHistoryFromSessionStorage(list: HistoryType[]) {
    return {
      type: historyConstants.SET_HISTORY_FROM_SESSION_STORAGE,
      payload: {
        list,
      },
    } as const;
  },
  deleteHistoryItem(itemID: string) {
    return {
      type: historyConstants.DELETE_HISTORY_ITEM,
      payload: {
        itemID,
      },
    } as const;
  },
};
