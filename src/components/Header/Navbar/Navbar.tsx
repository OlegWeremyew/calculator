import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../../constants';

import { NavbarContainer } from './components';

export const Navbar: FC = () => (
  <NavbarContainer>
    <NavLink to={PATH.HOME_PAGE_ROUTE}>Calculator</NavLink>
    <NavLink to={PATH.SETTINGS_PAGE_ROUTE}>Settings</NavLink>
  </NavbarContainer>
);
