import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SuperSelect from '../../common/SuperSelect/SuperSelect';
import { changeThemeAC, ThemeType } from '../../reducers/themeReducer/themeReducer.ts';
import { AppRootStateType } from '../../store';
import { ReturnComponentType } from '../../types/ReturnComponentType';

// @ts-ignore
import style from './Settings.module.css';

const themes = ['white', 'dark', 'red'];

const Settings = (): ReturnComponentType => {
  const theme = useSelector<AppRootStateType, ThemeType>(state => state.them.theme);
  const dispatch = useDispatch();
  const onChangeOption = (color: ThemeType): void => {
    dispatch(changeThemeAC(color));
  };

  return (
    <div className={style[theme]}>
      <div className={style.main}>
        <span className={style[`${theme}-text`]}>Color them</span>
        <div>
          <SuperSelect options={themes} onChangeOption={onChangeOption} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
