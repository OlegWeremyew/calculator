import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../../constants';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { NavbarContainer } from './components';

export const Navbar = (): ReturnComponentType => (
  <NavbarContainer>
    <NavLink to={PATH.HOME_PAGE_ROUTE}>Calculator</NavLink>
    <NavLink to={PATH.SETTINGS_PAGE_ROUTE}>Settings</NavLink>
  </NavbarContainer>
);
