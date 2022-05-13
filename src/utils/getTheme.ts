import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { themeActions } from '../reducers';
import { getThemeValue } from '../selectors';
import {
  themeCrimson,
  themeDark,
  themeHeavenly,
  themeLight,
  themeLightBrown,
  ThemeObjectType,
} from '../theme';

export const getTheme = (): ThemeObjectType => {
  const dispatch = useDispatch();

  const themeValue = useSelector(getThemeValue);
  let themeStyle: any;

  useEffect(() => {
    const themeValueAsString = localStorage.getItem('themeValue');
    // eslint-disable-next-line no-unused-expressions
    themeValueAsString &&
      dispatch(themeActions.changeTheme(JSON.parse(themeValueAsString)));
  }, []);

  useEffect(() => {
    localStorage.setItem('themeValue', JSON.stringify(themeValue));
  }, [themeValue]);

  if (themeValue === 'light') themeStyle = themeLight;
  if (themeValue === 'dark') themeStyle = themeDark;
  if (themeValue === 'light-brown') themeStyle = themeLightBrown;
  if (themeValue === 'heavenly') themeStyle = themeHeavenly;
  if (themeValue === 'crimson') themeStyle = themeCrimson;
  return themeStyle;
};
