import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import MyButton from './MyButton/MyButton';

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
