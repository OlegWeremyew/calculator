import React from 'react';

import { useDispatch } from 'react-redux';

import SwitshTheme from '../../components/SwitshTheme/SwitshTheme';
import {
  changeThemeAC,
  MainThemeType,
} from '../../reducers/themeReducer/themeReducer.ts';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const themes = ['light', 'dark', 'light-brown', 'heavenly', 'crimson'];

const Settings = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const onChangeOption = (color: MainThemeType): void => {
    dispatch(changeThemeAC(color));
  };

  return (
    <div>
      <div>
        <span>Color them</span>
        <div>
          <SwitshTheme options={themes} onChangeOption={onChangeOption} />
        </div>
      </div>
      <div>
        <div>
          <span>Set history block visibility</span>
          <button type="button">fg</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
