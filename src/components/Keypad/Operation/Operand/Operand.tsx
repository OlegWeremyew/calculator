import React from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getOperations } from '../../../../selectors/CalculatorSelector/CalculatorSelector';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

const StyledOperand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #861f1f;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #720000;
  margin: 2px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: #9f2a2a;
  }
`;

const Operand: React.FC<OperationType> = ({ createOperation }): ReturnComponentType => {
  const operations = useSelector(getOperations);

  return (
    <StyledOperand>
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
    </StyledOperand>
  );
};

export default Operand;

// types

export type OperationType = {
  createOperation(value: string): void;
};
