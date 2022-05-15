import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { historyAction } from '../reducers';
import { HistoryType } from '../reducers/historyReducer/types';
import { getHistory } from '../selectors';

export const useGetHistoryList = (): HistoryType[] => {
  const dispatch = useDispatch();

  const currentHistoryList = useSelector(getHistory);

  useEffect(() => {
    const currentHistoryListAsString = localStorage.getItem('currentHistoryList');
    currentHistoryListAsString &&
      dispatch(
        historyAction.setHistoryFromSessionStorage(
          JSON.parse(currentHistoryListAsString),
        ),
      );
  }, []);

  useEffect(() => {
    localStorage.setItem('currentHistoryList', JSON.stringify(currentHistoryList));
  }, [currentHistoryList]);
  return currentHistoryList;
};
