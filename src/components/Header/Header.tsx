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

const HeaderContainer = styled.header`
  height: 65px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }: ThemeType) => theme.buttonsBgc};
  border-bottom: 2px dashed ${({ theme }: ThemeType) => theme.border};
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  animation: ${rotateAnimation} 8s infinite linear;
`;

const Header = (): ReturnComponentType => (
  <HeaderContainer>
    <Image src={calculator} alt="calculator" />
    <Navbar />
  </HeaderContainer>
);

export default Header;
