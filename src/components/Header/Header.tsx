import React, { FC } from 'react';

import { HeaderContainer, Image } from './components';
import { Navbar } from './Navbar';

import calculator from 'assets/images/calculator.png';

export const Header: FC = () => (
  <HeaderContainer>
    <Image src={calculator} alt="calculator" />
    <Navbar />
  </HeaderContainer>
);
