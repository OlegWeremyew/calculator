import React from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { PATH } from '../../../constants';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

const Navbar = (): ReturnComponentType => (
  <StyledNavbar>
    <NavLink to={PATH.HOME_PAGE_ROUTE}>Calculator</NavLink>
    <NavLink to={PATH.SETTINGS_PAGE_ROUTE}>Settings</NavLink>
  </StyledNavbar>
);

export default Navbar;
