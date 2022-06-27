import React, { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { SettingsClassComponent } from './SettingsClassComponent';
import { MapDispatchToPropsType, MapStateToPropsType, SettingsPropsType } from './types';

import { calculatorAction, themeActions } from 'reducers';
import { getIsShowControlPanel } from 'selectors';
import { AppRootStateType } from 'store';
import { ReturnComponentType } from 'types/ReturnComponentType';

export class SettingsClassComponentWrapper extends React.Component<SettingsPropsType> {
  render(): ReturnComponentType {
    const { isShowControlPanel, setControlPanelVisibility, changeTheme } = this.props;

    return (
      <SettingsClassComponent
        isShowControlPanel={isShowControlPanel}
        setControlPanelVisibility={setControlPanelVisibility}
        changeTheme={changeTheme}
      />
    );
  }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
  isShowControlPanel: getIsShowControlPanel(state),
});

const SettingsContainer = compose<ComponentType>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {
      setControlPanelVisibility: calculatorAction.setControlPanelVisibility,
      changeTheme: themeActions.changeTheme,
    },
  ),
)(SettingsClassComponentWrapper);

export default SettingsContainer;
