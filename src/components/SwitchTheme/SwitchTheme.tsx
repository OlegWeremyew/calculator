import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
  useCallback,
} from 'react';

import { useDispatch } from 'react-redux';

import { MainThemeType, themeActions } from '../../reducers/themeReducer/themeReducer.ts';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import SwitchSelect from './SwitchSelect/SwitchSelect';

const SwitchTheme: React.FC<DefaultSelectType> = ({ onChange }): ReturnComponentType => {
  const dispatch = useDispatch();

  const changeSelectValue = useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
    dispatch(themeActions.changeTheme(e.currentTarget.value as MainThemeType));
  }, []);

  return (
    <div>
      <span>Color them</span>
      <SwitchSelect changeSelectValue={changeSelectValue} />
    </div>
  );
};

export default SwitchTheme;

type DefaultSelectType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;
