import React from 'react';

import { useSelector } from 'react-redux';

import { ControlPanel } from './ControlPanel';
import { History } from './History';

import { Container } from 'layouts';
import { getIsShowHistoryValue } from 'selectors';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const Panel = (): ReturnComponentType => {
  const isShowHistory = useSelector(getIsShowHistoryValue);
  return (
    <Container>
      <ControlPanel />
      {isShowHistory ? <History /> : null}
    </Container>
  );
};
