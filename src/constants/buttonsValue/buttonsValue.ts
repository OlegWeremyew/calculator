import { ButtonsType, ButtonsValueType } from './types';

export const buttonsValue: ButtonsValueType = {
  buttons: [
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '+' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '-' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '*' },
    { value: '(' },
    { value: '0' },
    { value: ')' },
    { value: '/' },
  ],
  operations: [{ value: '.' }, { value: '=' }, { value: 'CE' }, { value: 'C' }],
};

export const getButtonsKeypads = (): ButtonsType[] => buttonsValue.buttons;

export const getButtonsOperations = (): ButtonsType[] => buttonsValue.operations;
