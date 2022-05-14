import React from 'react';

import { Settings } from '../../../components/Settings';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import { SettingsPropsType } from '../types';

import { Container, Title } from './components';

export class SettingsClassComponent extends React.Component<SettingsPropsType> {
  render(): ReturnComponentType {
    const { isShowControlPanel, setControlPanelVisibility, changeTheme } = this.props;

    const textSwitchValue = isShowControlPanel ? 'hide' : 'show';

    const setHistoryBlockVisibility = (): void => {
      setControlPanelVisibility(!isShowControlPanel);
    };

    const resetAllSettings = (): void => {
      setControlPanelVisibility(true);
      changeTheme('dark');
    };

    return (
      <Container>
        <Title>Settings</Title>
        <Settings
          textSwitchValue={textSwitchValue}
          setHistoryBlockVisibility={setHistoryBlockVisibility}
          resetAllSettings={resetAllSettings}
        />
      </Container>
    );
  }
}
