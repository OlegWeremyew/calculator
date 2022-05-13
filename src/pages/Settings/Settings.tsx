import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SettingsButton from '../../components/SettingsButton/SettingsButton';
import SwitchTheme from '../../components/SwitchTheme/SwitchTheme';
import { calculatorAction } from '../../reducers/calculatorReducer/calculatorReducer';
import { historyAction } from '../../reducers/historyReducer/historyReducer';
import { themeActions } from '../../reducers/themeReducer/themeReducer.ts';
import { getIsShowControlPanel } from '../../selectors/CalculatorSelector/CalculatorSelector';
import { getHistoryLength } from '../../selectors/HistorySelectors/HistorySelectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { Container, Title } from './components';

const Settings = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const isShowControlPanel = useSelector(getIsShowControlPanel);
  const historyArrayLength = useSelector(getHistoryLength);

  const setHistoryBlockVisibility = (): void => {
    dispatch(calculatorAction.setControlPanelVisibility(!isShowControlPanel));
  };

  const clearHistory = (): void => {
    dispatch(historyAction.clearHistory());
  };

  const resetAllSettings = (): void => {
    dispatch(calculatorAction.setControlPanelVisibility(true));
    dispatch(themeActions.changeTheme('dark'));
  };

  const textSwitchValue = isShowControlPanel ? 'hide' : 'show';
  const textCleaner = historyArrayLength ? 'clear' : 'empty';

  return (
    <Container>
      <Title>Settings</Title>
      <SettingsButton
        title="Set history block visibility 👀:"
        text={textSwitchValue}
        callback={setHistoryBlockVisibility}
      />
      <SettingsButton
        title="Clear history 🗑️:"
        text={textCleaner}
        callback={clearHistory}
      />
      <SettingsButton
        title="Reset all settings 🛠:"
        text="reset"
        callback={resetAllSettings}
      />
      <SwitchTheme />
    </Container>
  );
};

export default Settings;
