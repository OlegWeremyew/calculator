import React, { ChangeEvent, FC, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { Container } from './components';
import { SwitchSelect } from './SwitchSelect';
import { DefaultSelectType } from './types';

import { SettingsTitle } from 'layouts';
import { themeActions } from 'reducers';
import { MainThemeType } from 'reducers/themeReducer/types';

export const SwitchTheme: FC<DefaultSelectType> = ({ onChange }) => {
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
