import React, { FC, memo } from 'react';

import { OperationType } from './types';

import { ButtonContainer, StyledButton } from 'layouts';

export const Operand: FC<OperationType> = memo(({ createOperation, operationsList }) => (
  <ButtonContainer>
    {operationsList.map(operation => (
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
));
