import { MainThemeType } from '../../../reducers/themeReducer/types';

export type MapStateToPropsType = {
  isShowControlPanel: boolean;
  historyArrayLength: number;
};

export type MapDispatchToPropsType = {
  setControlPanelVisibility: (status: boolean) => void;
  clearHistory: () => void;
  changeTheme: (theme: MainThemeType) => void;
};

export type SettingsPropsType = MapStateToPropsType & MapDispatchToPropsType;
