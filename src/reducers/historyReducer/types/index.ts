import { historyAction } from '../historyAction';
import { HistoryInitialValue } from '../historyReducer';

import { InferActionTypes } from 'store';

export type ActionHistoryTypes = InferActionTypes<typeof historyAction>;

export type HistoryInitialValueType = typeof HistoryInitialValue;

export type HistoryType = {
  id: string;
  value: string;
  result: string;
};
