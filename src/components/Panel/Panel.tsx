import React from 'react';

import { useSelector } from 'react-redux';

import { getIsShowHistoryValue } from '../../selectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { PanelContainer } from './components';
import { ControlPanel } from './ControlPanel';
import { History } from './History';

export const Panel = (): ReturnComponentType => {
  const isShowHistory = useSelector(getIsShowHistoryValue);

  return (
    <PanelContainer>
      <ControlPanel />
      {isShowHistory ? <History /> : null}
    </PanelContainer>
  );
};
