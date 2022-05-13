import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getIsShowHistoryValue } from '../../selectors/HistorySelectors/HistorySelectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import ControlPanel from './ControlPanel/ControlPanel';
import History from './History/History';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
