import { InferActionTypes } from '../../store';

export const HistoryInitialValue: HistoryInitialValueType = {
  historyWindow: [] as HistoryType[],
  isShowHistory: true,
};

export type HistoryInitialValueType = {
  historyWindow: HistoryType[];
  isShowHistory: boolean;
};

export type HistoryType = {
  id: string;
  value: string;
  result: string;
};

export const historyReducer = (
  state: HistoryInitialValueType = HistoryInitialValue,
  action: ActionHistoryTypes,
): HistoryInitialValueType => {
  switch (action.type) {
    case 'ADD_NEW_HISTORY': {
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
    case 'CLEAR_HISTORY': {
      return {
        ...state,
        historyWindow: [],
      };
    }
    case 'SET_HISTORY_BLOCK_VISIBILITY': {
      return {
        ...state,
        isShowHistory: action.payload.status,
      };
    }
    case 'SET_HISTORY_FROM_SESSION_STORAGE': {
      return {
        ...state,
        historyWindow: action.payload.list,
      };
    }
    case 'DELETE_HISTORY_ITEM': {
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

export const historyAction = {
  addNewHistory(value: string, current: string) {
    return {
      type: 'ADD_NEW_HISTORY',
      payload: {
        value,
        current,
      },
    } as const;
  },
  clearHistory() {
    return {
      type: 'CLEAR_HISTORY',
    } as const;
  },
  setHistoryBlockVisibility(status: boolean) {
    return {
      type: 'SET_HISTORY_BLOCK_VISIBILITY',
      payload: {
        status,
      },
    } as const;
  },
  setHistoryFromSessionStorage(list: HistoryType[]) {
    return {
      type: 'SET_HISTORY_FROM_SESSION_STORAGE',
      payload: {
        list,
      },
    } as const;
  },
  deleteHistoryItem(itemID: string) {
    return {
      type: 'DELETE_HISTORY_ITEM',
      payload: {
        itemID,
      },
    } as const;
  },
};

export type ActionHistoryTypes = InferActionTypes<typeof historyAction>;
