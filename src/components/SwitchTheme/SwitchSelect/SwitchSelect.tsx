import React, { memo } from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { themes } from '../../../constants/themes';
import { getThemeValue } from '../../../selectors/ThemeSelector/ThemeSelector';
import { ThemeType } from '../../../theme';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const StyledSelect = styled.select`
  width: 300px;
  padding: 4px 55px 4px 5px;
  cursor: pointer;
  background: ${({ theme }: ThemeType) => theme.background};
  appearance: auto;
  border: ${({ theme }: ThemeType) => theme.border} solid 2px;
  border-radius: 3px;
  color: ${({ theme }: ThemeType) => theme.color};
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

const StyledOption = styled.option`
  color: ${({ theme }: ThemeType) => theme.color};
  cursor: pointer;

  &:checked {
    font-weight: 700;
    background: ${({ theme }: ThemeType) => theme.hoverBgc};
  }
`;

const SwitchSelect = memo(
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

export default SwitchSelect;
