import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import Navbar from './Navbar/Navbar';

const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #da8a8a;
`;

const Header = (): ReturnComponentType => (
  <StyledHeader>
    Header
    <Navbar />
  </StyledHeader>
);

export default Header;
