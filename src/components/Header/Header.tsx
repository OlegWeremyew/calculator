import React from 'react';

// @ts-ignore
import calculator from '../../assets/images/calculator.png';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import { HeaderContainer, Image } from './components';
import Navbar from './Navbar/Navbar';

const Header = (): ReturnComponentType => (
  <HeaderContainer>
    <Image src={calculator} alt="calculator" />
    <Navbar />
  </HeaderContainer>
);

export default Header;
