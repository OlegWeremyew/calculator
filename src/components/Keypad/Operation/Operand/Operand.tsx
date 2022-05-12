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
  background: ${({ theme }: any) => theme.backgrounds.primary};
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: ${({ theme }: any) => theme.buttonsBgc.primary};
  margin: 2px;
  font-size: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: ${({ theme }: any) => theme.borders.primary} 3px solid;

  @media ${({ theme }: any) => theme.media.phone} {
    width: 70px;
    height: 70px;
    font-size: 30px;
  }

  &:hover {
    background-color: #e8d0af;
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
