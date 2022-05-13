import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { historyAction, HistoryType } from '../reducers/historyReducer/historyReducer';
import { getHistory } from '../selectors/HistorySelectors/HistorySelectors';

export const getHistoryList = (): HistoryType[] => {
  const dispatch = useDispatch();

  const currentHistoryList = useSelector(getHistory);

  useEffect(() => {
    const currentHistoryListAsString = localStorage.getItem('currentHistoryList');
    // eslint-disable-next-line no-unused-expressions
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
