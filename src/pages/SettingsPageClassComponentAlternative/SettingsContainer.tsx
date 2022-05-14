import React, { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { calculatorAction, historyAction, themeActions } from '../../reducers';
import { getHistoryLength, getIsShowControlPanel } from '../../selectors';
import { AppRootStateType } from '../../store';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { MapDispatchToPropsType, MapStateToPropsType, SettingsPropsType } from './types';

export class SettingsClassComponent extends React.Component<SettingsPropsType> {
  render(): ReturnComponentType {
    const {
      isShowControlPanel,
      historyArrayLength,
      setControlPanelVisibility,
      clearHistory,
      changeTheme,
    } = this.props;

    return (
      <SettingsClassComponent
        isShowControlPanel={isShowControlPanel}
        historyArrayLength={historyArrayLength}
        setControlPanelVisibility={setControlPanelVisibility}
        clearHistory={clearHistory}
        changeTheme={changeTheme}
      />
    );
  }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
  isShowControlPanel: getIsShowControlPanel(state),
  historyArrayLength: getHistoryLength(state),
});

export const SettingsContainer = compose<ComponentType>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {
      setControlPanelVisibility: calculatorAction.setControlPanelVisibility,
      clearHistory: historyAction.clearHistory,
      changeTheme: themeActions.changeTheme,
    },
  ),
)(SettingsClassComponent);
