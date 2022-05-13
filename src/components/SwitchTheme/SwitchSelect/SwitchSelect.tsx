import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { themes } from '../../../constants/themes';
import { getThemeValue } from '../../../selectors/ThemeSelector/ThemeSelector';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const SwitchSelect = memo(
  ({ changeSelectValue, ...restProps }: any): ReturnComponentType => {
    const currentTheme = useSelector(getThemeValue);
    return (
      <select onChange={changeSelectValue} {...restProps}>
        <option value={currentTheme}>chosen theme: {currentTheme}</option>
        {themes
          ? themes.map(theme => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))
          : []}
      </select>
    );
  },
);

export default SwitchSelect;
