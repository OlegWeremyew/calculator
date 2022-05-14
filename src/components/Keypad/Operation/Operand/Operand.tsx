import React from 'react';

import { getButtonsOperations } from '../../../../constants/buttonsValue/buttonsValue';
import { ButtonContainer, StyledButton } from '../../../../layouts';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { OperationType } from './types';

export const Operand: React.FC<OperationType> = ({
  createOperation,
}): ReturnComponentType => {
  const operations = getButtonsOperations();

  return (
    <ButtonContainer>
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
    </ButtonContainer>
  );
};
