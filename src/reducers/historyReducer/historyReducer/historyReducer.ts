import * as historyConstants from '../constants';
import { ActionHistoryTypes, HistoryInitialValueType, HistoryType } from '../types';

export const HistoryInitialValue = {
  historyWindow: [] as HistoryType[],
  isShowHistory: true,
};

export const historyReducer = (
  state: HistoryInitialValueType = HistoryInitialValue,
  action: ActionHistoryTypes,
): HistoryInitialValueType => {
  switch (action.type) {
    case historyConstants.ADD_NEW_HISTORY: {
      return {
        ...state,
        historyWindow: [
          ...state.historyWindow,
          {
            id: String(Date.now()),
            value: action.payload.value,
            result: action.payload.current,
          },
        ],
      };
    }
    case historyConstants.CLEAR_HISTORY: {
      return {
        ...state,
        historyWindow: [],
      };
    }
    case historyConstants.SET_HISTORY_BLOCK_VISIBILITY: {
      return {
        ...state,
        isShowHistory: action.payload.status,
      };
    }
    case historyConstants.SET_HISTORY_FROM_SESSION_STORAGE: {
      return {
        ...state,
        historyWindow: action.payload.list,
      };
    }
    case historyConstants.DELETE_HISTORY_ITEM: {
      return {
        ...state,
        historyWindow: state.historyWindow.filter(
          item => item.id !== action.payload.itemID,
        ),
      };
    }
    default:
      return state;
  }
};
