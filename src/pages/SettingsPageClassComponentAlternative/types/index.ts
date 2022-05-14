import { MainThemeType } from '../../../reducers/themeReducer/types';

export type MapStateToPropsType = {
  isShowControlPanel: boolean;
};

export type MapDispatchToPropsType = {
  setControlPanelVisibility: (status: boolean) => void;
  changeTheme: (theme: MainThemeType) => void;
};

export type SettingsPropsType = MapStateToPropsType & MapDispatchToPropsType;
