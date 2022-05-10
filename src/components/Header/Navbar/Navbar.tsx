import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../../constants';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const Navbar = (): ReturnComponentType => (
  <nav>
    <NavLink to={PATH.HOME_PAGE_ROUTE}>Calculator</NavLink>
    <NavLink to={PATH.SETTINGS_PAGE_ROUTE}>Settings</NavLink>
  </nav>
);

export default Navbar;
