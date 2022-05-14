import React from 'react';

import { Settings } from '../../../components/Settings';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import { SettingsPropsType } from '../types';

import { Container, Title } from './components';

// eslint-disable-next-line react/prefer-stateless-function
export class SettingsClassComponent extends React.Component<SettingsPropsType> {
  render(): ReturnComponentType {
    const {
      isShowControlPanel,
      historyArrayLength,
      setControlPanelVisibility,
      clearHistory,
      changeTheme,
    } = this.props;

    const textSwitchValue = isShowControlPanel ? 'hide' : 'show';
    const textCleaner = historyArrayLength ? 'clear' : 'empty';

    const setHistoryBlockVisibility = (): void => {
      setControlPanelVisibility(!isShowControlPanel);
    };

    const clearHistoryHandler = (): void => {
      clearHistory();
    };

    const resetAllSettings = (): void => {
      setControlPanelVisibility(true);
      changeTheme('dark');
    };

    return (
      <Container>
        <Title>Settings</Title>
        <Settings
          textCleaner={textCleaner}
          textSwitchValue={textSwitchValue}
          setHistoryBlockVisibility={setHistoryBlockVisibility}
          clearHistory={clearHistoryHandler}
          resetAllSettings={resetAllSettings}
        />
      </Container>
    );
  }
}

export default Settings;
