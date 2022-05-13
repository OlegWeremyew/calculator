import React from 'react';

import styled from 'styled-components';

import { ThemeType } from '../../theme';
import { ReturnComponentType } from '../../types/ReturnComponentType';
import { getCurrentValueFromLocalStorage } from '../../utils/getCurrentValue';

const DisplayContainer = styled.div`
  max-width: 420px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: ${({ theme }: ThemeType) => theme.displayBgc};
  font-size: 30px;
  margin-bottom: 1px;
  border-bottom: ${({ theme }: ThemeType) => theme.border} 3px solid;

  @media (max-width: 445px) {
    width: 310px;
  }
`;

const Display = (): ReturnComponentType => {
  const currentValue = getCurrentValueFromLocalStorage();

  return <DisplayContainer>{currentValue || 'lets start 🖩'}</DisplayContainer>;
};

export default Display;
