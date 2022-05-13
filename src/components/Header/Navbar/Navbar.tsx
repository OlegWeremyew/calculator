import React from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { PATH } from '../../../constants';
import { ThemeType } from '../../../theme';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin-right: 10px;
  color: ${({ theme }: ThemeType) => theme.color};
`;

const Navbar = (): ReturnComponentType => (
  <NavbarContainer>
    <NavLink to={PATH.HOME_PAGE_ROUTE}>Calculator</NavLink>
    <NavLink to={PATH.SETTINGS_PAGE_ROUTE}>Settings</NavLink>
  </NavbarContainer>
);

export default Navbar;
