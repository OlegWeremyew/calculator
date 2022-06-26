import React, { FC } from 'react';

import calculator from '../../assets/images/calculator.png';

import { HeaderContainer, Image } from './components';
import { Navbar } from './Navbar';

export const Header: FC = () => (
  <HeaderContainer>
    <Image src={calculator} alt="calculator" />
    <Navbar />
  </HeaderContainer>
);
