import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getCurrentValue } from '../../selectors/CalculatorSelector/CalculatorSelector';
import { ThemeType } from '../../theme';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledDisplay = styled.div`
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
  const currentValue = useSelector(getCurrentValue);

  return <StyledDisplay>{currentValue || 'lets start 🖩'}</StyledDisplay>;
};

export default Display;
