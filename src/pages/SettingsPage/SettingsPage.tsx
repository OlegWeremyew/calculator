import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Settings from '../../components/Settings/Settings';
import { SettingsContainer } from '../../layouts';
import { calculatorAction, historyAction, themeActions } from '../../reducers';
import { getHistoryLength, getIsShowControlPanel } from '../../selectors';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const SettingsPage = (): ReturnComponentType => {
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
    <SettingsContainer>
      <Settings
        textCleaner={textCleaner}
        textSwitchValue={textSwitchValue}
        setHistoryBlockVisibility={setHistoryBlockVisibility}
        clearHistory={clearHistory}
        resetAllSettings={resetAllSettings}
      />
    </SettingsContainer>
  );
};

export default SettingsPage;
