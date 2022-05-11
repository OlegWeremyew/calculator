import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { historyAction } from '../../reducers/historyReducer/historyReducer';
import { getHistory } from '../../selectors/HistorySelectors/HistorySelectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const History = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const historyWindow = useSelector(getHistory);

  const [isDisplayHistory, setIsDisplayHistory] = useState<boolean>(true);

  const clearHistory = (): void => {
    dispatch(historyAction.clearHistory());
  };

  return (
    <div>
      {isDisplayHistory ? (
        <>
          {historyWindow.length
            ? 'operations history is shown below'
            : 'operations history is empty'}
          <ul>
            {historyWindow.map(item => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
          <button type="button" onClick={clearHistory}>
            clear history
          </button>
          <button type="button" onClick={() => setIsDisplayHistory(false)}>
            hide history
          </button>
        </>
      ) : (
        <button type="button" onClick={() => setIsDisplayHistory(true)}>
          show history
        </button>
      )}
    </div>
  );
};

export default History;
