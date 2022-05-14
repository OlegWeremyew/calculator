import React from 'react';

import { SettingsContainer } from '../../layouts';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { Title } from './components';
import { SettingsButton } from './SettingsButton';
import { SwitchTheme } from './SwitchTheme';
import { SettingsPropsType } from './types';

export const Settings = ({
  textCleaner,
  textSwitchValue,
  setHistoryBlockVisibility,
  clearHistory,
  resetAllSettings,
}: SettingsPropsType): ReturnComponentType => (
  <SettingsContainer>
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
  </SettingsContainer>
);

export default Settings;
