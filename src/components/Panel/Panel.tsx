import React from 'react';

import { useSelector } from 'react-redux';

import { getIsShowHistoryValue } from '../../selectors/HistorySelectors/HistorySelectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { PanelContainer } from './components';
import ControlPanel from './ControlPanel/ControlPanel';
import History from './History/History';

const Panel = (): ReturnComponentType => {
  const isShowHistory = useSelector(getIsShowHistoryValue);

  return (
    <PanelContainer>
      <ControlPanel />
      {isShowHistory ? <History /> : null}
    </PanelContainer>
  );
};

export default Panel;
