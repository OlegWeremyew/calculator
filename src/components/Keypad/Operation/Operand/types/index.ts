import { ButtonsType } from 'constants/buttonsValue/types';

export type OperationType = {
  createOperation(value: string): void;
  operationsList: ButtonsType[];
};
