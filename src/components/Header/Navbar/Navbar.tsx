import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { NavbarContainer } from './components';

import { PATH } from 'constants/router';

export const Navbar: FC = () => (
  <NavbarContainer>
    <NavLink to={PATH.HOME_PAGE_ROUTE}>Calculator</NavLink>
    <NavLink to={PATH.SETTINGS_PAGE_ROUTE}>Settings</NavLink>
  </NavbarContainer>
);
