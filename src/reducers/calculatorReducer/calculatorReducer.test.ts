import { calculatorAction } from './calculatorAction';
import { calculatorReducer } from './calculatorReducer';
import { CalculatorInitialValueType } from './types';

import { EMPTY_STRING } from 'constants/variables';

const startState: CalculatorInitialValueType = {
  currentValue: EMPTY_STRING,
  isShowControlPanel: true,
};

test('the visibility of the control panel should change', () => {
  const endState = calculatorReducer(
    startState,
    calculatorAction.setControlPanelVisibility(false),
  );

  expect(endState.isShowControlPanel).toBe(false);
});

test('the value should be added to the currentValue', () => {
  const endState = calculatorReducer(
    startState,
    calculatorAction.changeCurrentValue('12'),
  );

  expect(endState.currentValue).toBe('12');
});

test('the value should be added to the currentValue part2', () => {
  const endState = calculatorReducer(
    startState,
    calculatorAction.changeCurrentValue('14+2-17/9.23'),
  );

  expect(endState.currentValue).toBe('14+2-17/9.23');
});

test('the current value should become an empty string', () => {
  const endState = calculatorReducer(startState, calculatorAction.NullifyValue());

  expect(endState.currentValue).toBe(EMPTY_STRING);
});
