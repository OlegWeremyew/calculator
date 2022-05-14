import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { themes } from '../../../../constants';
import { getThemeValue } from '../../../../selectors';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import { StyledOption, StyledSelect } from './components';

export const SwitchSelect = memo(
  ({ changeSelectValue, ...restProps }: any): ReturnComponentType => {
    const currentTheme = useSelector(getThemeValue);

    return (
      <StyledSelect onChange={changeSelectValue} {...restProps}>
        <StyledOption value={currentTheme}>chosen theme: {currentTheme}</StyledOption>
        {themes
          ? themes.map(theme => (
              <StyledOption key={theme} value={theme}>
                {theme}
              </StyledOption>
            ))
          : []}
      </StyledSelect>
    );
  },
);
