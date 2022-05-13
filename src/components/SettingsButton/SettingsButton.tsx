import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import { Container, Title } from './components';
import { MyButton } from './MyButton';
import { SettingsButtonPropsType } from './types';

export const SettingsButton: React.FC<SettingsButtonPropsType> = ({
  title,
  text,
  callback,
}): ReturnComponentType => (
  <Container>
    <Title>{title}</Title>
    <MyButton callback={callback}>{text}</MyButton>
  </Container>
);
