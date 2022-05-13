import React from 'react';

import { useSelector } from 'react-redux';

import { StyledButton } from '../../../../layouts';
import { getOperations } from '../../../../selectors';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { OperandContainer } from './components';

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
