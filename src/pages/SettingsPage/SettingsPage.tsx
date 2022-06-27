import React, { FC, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Settings from 'components/Settings/Settings';
import { SettingsContainer } from 'layouts';
import { calculatorAction, themeActions } from 'reducers';
import { getIsShowControlPanel } from 'selectors';

const SettingsPage: FC = () => {
  const dispatch = useDispatch();

  const isShowControlPanel = useSelector(getIsShowControlPanel);

  const setHistoryBlockVisibility = useCallback((): void => {
    dispatch(calculatorAction.setControlPanelVisibility(!isShowControlPanel));
  }, [dispatch, isShowControlPanel]);

  const resetAllSettings = useCallback((): void => {
    dispatch(calculatorAction.setControlPanelVisibility(true));
    dispatch(themeActions.changeTheme('dark'));
  }, [dispatch]);

  const textSwitchValue = isShowControlPanel ? 'hide' : 'show';

  return (
    <SettingsContainer>
      <Settings
        textSwitchValue={textSwitchValue}
        setHistoryBlockVisibility={setHistoryBlockVisibility}
        resetAllSettings={resetAllSettings}
      />
    </SettingsContainer>
  );
};

export default SettingsPage;
