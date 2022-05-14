import React, { memo } from 'react';

import { ButtonContainer, StyledButton } from '../../../../layouts';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { OperationType } from './types';

export const Operand: React.FC<OperationType> = memo(
  ({ createOperation, operationsList }): ReturnComponentType => (
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
  ),
);
