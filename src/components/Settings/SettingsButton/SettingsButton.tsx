import React, { FC, memo } from 'react';

import { SettingsTitle } from '../../../layouts';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { Container } from './components';
import { MyButton } from './MyButton';
import { SettingsButtonPropsType } from './types';

export const SettingsButton: FC<SettingsButtonPropsType> = memo(
  ({ title, text, callback }): ReturnComponentType => (
    <Container>
      <SettingsTitle>{title}</SettingsTitle>
      <MyButton callback={callback}>{text}</MyButton>
    </Container>
  ),
);
