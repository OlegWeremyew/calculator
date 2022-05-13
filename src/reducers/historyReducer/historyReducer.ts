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
          { id: String(Date.now()), value: action.payload.value },
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
    default:
      return state;
  }
};

export const historyAction = {
  addNewHistory(value: string) {
    return {
      type: 'ADD_NEW_HISTORY',
      payload: {
        value,
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
};

export type ActionHistoryTypes = InferActionTypes<typeof historyAction>;
