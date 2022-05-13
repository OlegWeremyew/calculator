import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
  useCallback,
} from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { MainThemeType, themeActions } from '../../reducers/themeReducer/themeReducer.ts';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import SwitchSelect from './SwitchSelect/SwitchSelect';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
`;

const Title = styled.h1`
  font-size: 28px;
`;

const SwitchTheme: React.FC<DefaultSelectType> = ({ onChange }): ReturnComponentType => {
  const dispatch = useDispatch();

  const changeSelectValue = useCallback((e: ChangeEvent<HTMLSelectElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
    dispatch(themeActions.changeTheme(e.currentTarget.value as MainThemeType));
  }, []);

  return (
    <Container>
      <Title>Color them:</Title>
      <SwitchSelect changeSelectValue={changeSelectValue} />
    </Container>
  );
};

export default SwitchTheme;

type DefaultSelectType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;
