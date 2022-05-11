import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getCurrentValue } from '../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledDisplay = styled.div`
  min-width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(57, 139, 203, 0.87);
  font-size: 30px;
`;

const Display = (): ReturnComponentType => {
  const currentValue = useSelector(getCurrentValue);

  return <StyledDisplay>{currentValue || 'lets start'}</StyledDisplay>;
};

export default Display;
