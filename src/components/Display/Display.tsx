import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getCurrentValue } from '../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const StyledDisplay = styled.div`
  max-width: 420px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(163, 201, 224, 0.87);
  font-size: 30px;
  border-bottom: ${({ theme }: any) => theme.borders.primary} 2px solid;

  @media ${({ theme }: any) => theme.media.phone} {
    width: 310px;
  }
`;

const Display = (): ReturnComponentType => {
  const currentValue = useSelector(getCurrentValue);

  return <StyledDisplay>{currentValue || 'lets start 🖩'}</StyledDisplay>;
};

export default Display;
