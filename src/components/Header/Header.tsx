import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from '../../types/ReturnComponentType';

// @ts-ignore
import calculator from './calculator.png';
import Navbar from './Navbar/Navbar';

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #da8a8a;
`;

const Header = (): ReturnComponentType => (
  <StyledHeader>
    <img src={calculator} alt="calculator" style={{ width: '55px', height: '55px' }} />
    <Navbar />
  </StyledHeader>
);

export default Header;
