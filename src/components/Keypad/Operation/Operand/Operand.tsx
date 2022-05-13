import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOperations } from '../../../../selectors/CalculatorSelector/CalculatorSelector';
import { ThemeType } from '../../../../theme';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

const OperandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }: ThemeType) => theme.background};
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  margin: 2px;
  font-size: 40px;
  cursor: pointer;
  color: ${({ theme }: ThemeType) => theme.color};
  border-radius: 5px;
  border: ${({ theme }: ThemeType) => theme.border} 3px solid;

  @media (max-width: 445px) {
    width: 70px;
    height: 70px;
    font-size: 30px;
  }

  &:hover {
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
    border: outset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }

  &:active {
    border: inset 4px ${({ theme }: ThemeType) => theme.hoverBgc};
  }
`;

const Operand: React.FC<OperationType> = ({ createOperation }): ReturnComponentType => {
  const operations = useSelector(getOperations);

  return (
    <OperandContainer>
      {operations.map(operation => (
        <StyledButton
          type="button"
          key={operation.value}
          onClick={(e: any) => createOperation(e.target.value)}
          value={operation.value}
        >
          {operation.value}
        </StyledButton>
      ))}
    </OperandContainer>
  );
};

export default Operand;

// types

export type OperationType = {
  createOperation(value: string): void;
};
