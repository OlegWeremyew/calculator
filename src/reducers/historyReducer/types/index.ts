import { InferActionTypes } from '../../../store';
import { historyAction } from '../historyAction';
import { HistoryInitialValue } from '../historyReducer';

export type ActionHistoryTypes = InferActionTypes<typeof historyAction>;

export type HistoryInitialValueType = typeof HistoryInitialValue;

export type HistoryType = {
  id: string;
  value: string;
  result: string;
};
