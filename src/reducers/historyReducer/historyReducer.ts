export const HistoryInitialValue: HistoryInitialValueType = {
  historyWindow: [],
};

export type HistoryInitialValueType = {
  historyWindow: [];
};

export const historyReducer = (
  state: HistoryInitialValueType = HistoryInitialValue,
  action: any,
): HistoryInitialValueType => {
  switch (action.type) {
    case '': {
      return state;
    }

    default:
      return state;
  }
};
