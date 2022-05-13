import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import { Container, Title } from './components';
import MyButton from './MyButton/MyButton';

const SettingsButton: React.FC<PropsType> = ({
  title,
  text,
  callback,
}): ReturnComponentType => (
  <Container>
    <Title>{title}</Title>
    <MyButton callback={callback}>{text}</MyButton>
  </Container>
);

export default SettingsButton;

type PropsType = {
  title: string;
  text: string;
  callback: () => void;
};
