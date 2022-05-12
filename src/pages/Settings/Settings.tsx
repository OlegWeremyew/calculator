import React from 'react';

import { useDispatch } from 'react-redux';

import SuperSelect from '../../components/SuperSelect/SuperSelect';
import {
  changeThemeAC,
  MainThemeType,
} from '../../reducers/themeReducer/themeReducer.ts';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const themes = ['light', 'dark', 'light-brown'];

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
          <SuperSelect options={themes} onChangeOption={onChangeOption} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
