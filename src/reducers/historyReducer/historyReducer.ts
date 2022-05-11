import { InferActionTypes } from '../../store';

export const HistoryInitialValue: HistoryInitialValueType = {
  historyWindow: [] as HistoryType[],
};

export type HistoryInitialValueType = {
  historyWindow: HistoryType[];
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
};

export type ActionHistoryTypes = InferActionTypes<typeof historyAction>;
