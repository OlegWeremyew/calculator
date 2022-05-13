import React from 'react';

import { useSelector } from 'react-redux';

import { getIsShowHistoryValue } from '../../selectors/HistorySelectors/HistorySelectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import ControlPanel from '../ControlPanel/ControlPanel';
import History from '../History/History';

const Panel = (): ReturnComponentType => {
  const isShowHistory = useSelector(getIsShowHistoryValue);

  return (
    <div>
      <ControlPanel />
      {isShowHistory ? <History /> : null}
    </div>
  );
};

export default Panel;
