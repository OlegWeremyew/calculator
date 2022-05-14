import React from 'react';

import { useSelector } from 'react-redux';

import { Container } from '../../layouts';
import { getIsShowHistoryValue } from '../../selectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { ControlPanel } from './ControlPanel';
import { History } from './History';

export const Panel = (): ReturnComponentType => {
  const isShowHistory = useSelector(getIsShowHistoryValue);

  return (
    <Container>
      <ControlPanel />
      {isShowHistory ? <History /> : null}
    </Container>
  );
};
