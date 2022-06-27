import { HistoryType } from 'reducers/historyReducer/types';
import { AppRootStateType } from 'store';

export const getHistory = (state: AppRootStateType): HistoryType[] =>
  state.history.historyWindow;

export const getIsShowHistoryValue = (state: AppRootStateType): boolean =>
  state.history.isShowHistory;
