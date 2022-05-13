import React from 'react';

import { themes } from '../../../constants/themes';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const SwitchSelect = ({ onChangeCallback, restProps }: any): ReturnComponentType => (
  <select onChange={onChangeCallback} {...restProps}>
    {themes
      ? themes.map(theme => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))
      : []}
  </select>
);

export default SwitchSelect;
