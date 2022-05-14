import { themeActions, themeReducer } from './themeReducer';
import { initStateThemeType, MainThemeType } from './themeReducer/types';

const startState: initStateThemeType = {
  theme: 'dark' as MainThemeType,
};

test('topic value should be equal to light', () => {
  const endState = themeReducer(startState, themeActions.changeTheme('light'));

  expect(endState.theme).toBe('light');
});

test('topic value should be equal to heavenly', () => {
  const endState = themeReducer(startState, themeActions.changeTheme('heavenly'));

  expect(endState.theme).toBe('heavenly');
});
