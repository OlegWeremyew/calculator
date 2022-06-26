import React, { FC, memo } from 'react';

import { ButtonContainer, StyledButton } from '../../../../layouts';

import { OperationType } from './types';

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
