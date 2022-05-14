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
  lowerOperations: [{ value: '.' }, { value: 'C' }, { value: 'CE' }, { value: '=' }],
  upperOperations: [{ value: '^' }, { value: '√' }, { value: '∛' }, { value: '%' }],
};

export const getButtonsKeypads = (): ButtonsType[] => buttonsValue.buttons;

export const getLowerButtonsOperations = (): ButtonsType[] =>
  buttonsValue.lowerOperations;

export const getUpperButtonsOperations = (): ButtonsType[] =>
  buttonsValue.upperOperations;
