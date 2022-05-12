import React from 'react';

import styled, { keyframes } from 'styled-components';

// @ts-ignore
import calculator from '../../assets/images/calculator.png';
import { ThemeType } from '../../theme';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import Navbar from './Navbar/Navbar';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const StyledHeader = styled.header`
  height: 65px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  border-bottom: 2px dashed ${({ theme }: ThemeType) => theme.border};
`;

const StyledImg = styled.img`
  width: 55px;
  height: 55px;
  cursor: pointer;
  animation: ${rotateAnimation} 8s infinite linear;
`;

const Header = (): ReturnComponentType => (
  <StyledHeader>
    <StyledImg src={calculator} alt="calculator" />
    <Navbar />
  </StyledHeader>
);

export default Header;
