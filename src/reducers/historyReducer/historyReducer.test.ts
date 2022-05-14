import { EMPTY_ARRAY, FIRST_ELEMENT_IN_ARRAY, ZERO_NUMBER } from '../../constants';

import { historyAction } from './historyAction';
import { historyReducer } from './historyReducer';
import { HistoryInitialValueType, HistoryType } from './types';

const startState: HistoryInitialValueType = {
  historyWindow: [
    { id: '1', value: '12+4', result: '16' },
    { id: '2', value: '12-4', result: '8' },
    { id: '3', value: '1*4', result: '4' },
  ] as HistoryType[],
  isShowHistory: true,
};

test('calculation should be added to the list of histories', () => {
  const endState = historyReducer(startState, historyAction.addNewHistory('2*4', '8'));

  const ElementIndex: number = 3;
  const arrayLength: number = 4;
  const IdNewItem = String(Date.now());

  expect(endState.historyWindow[ElementIndex].value).toBe('2*4');
  expect(endState.historyWindow[ElementIndex].result).toBe('8');
  expect(endState.historyWindow[ElementIndex].id).toBe(IdNewItem);
  expect(endState.historyWindow.length).toBe(arrayLength);
});

test('clearing the calculation list', () => {
  const endState = historyReducer(startState, historyAction.clearHistory());

  expect(endState.historyWindow.length).toBe(ZERO_NUMBER);
  expect(endState.historyWindow).toBe(EMPTY_ARRAY);
});

test('delete list item part 1', () => {
  const endState1 = historyReducer(startState, historyAction.deleteHistoryItem('1'));
  const endState2 = historyReducer(startState, historyAction.deleteHistoryItem('2'));

  const arrayLength: number = 2;

  expect(endState1.historyWindow.length).toBe(arrayLength);
  expect(endState1.historyWindow[FIRST_ELEMENT_IN_ARRAY].result).toBe('8');
  expect(endState2.historyWindow.length).toBe(arrayLength);
  expect(endState2.historyWindow[FIRST_ELEMENT_IN_ARRAY].result).toBe('16');
});

test('delete list item part 2', () => {
  const endState = historyReducer(startState, historyAction.deleteHistoryItem('4'));

  const arrayLength: number = 3;

  expect(endState.historyWindow.length).toBe(arrayLength);
});

test('the visibility value should change to false', () => {
  const endState = historyReducer(
    startState,
    historyAction.setHistoryBlockVisibility(!startState.isShowHistory),
  );

  expect(endState.isShowHistory).toBe(false);
});
