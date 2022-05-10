import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import Navbar from './Navbar/Navbar';

const Header = (): ReturnComponentType => (
  <header>
    Header
    <Navbar />
  </header>
);

export default Header;
