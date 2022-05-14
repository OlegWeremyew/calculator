import React, { ChangeEvent, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { SettingsTitle } from '../../../layouts';
import { themeActions } from '../../../reducers';
import { MainThemeType } from '../../../reducers/themeReducer/types';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { Container } from './components';
import { SwitchSelect } from './SwitchSelect';
import { DefaultSelectType } from './types';

export const SwitchTheme: React.FC<DefaultSelectType> = ({
  onChange,
}): ReturnComponentType => {
  const dispatch = useDispatch();

  const changeSelectValue = useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
    onChange && onChange(e);
    dispatch(themeActions.changeTheme(e.currentTarget.value as MainThemeType));
  }, []);

  return (
    <Container>
      <SettingsTitle>Color them:</SettingsTitle>
      <SwitchSelect changeSelectValue={changeSelectValue} />
    </Container>
  );
};
