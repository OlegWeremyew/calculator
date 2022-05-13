import React from 'react';

import styled, { keyframes } from 'styled-components';

import { ThemeType } from '../../theme';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const StyledLoader = styled.div`
  animation: ${rotateAnimation} 5s infinite linear;
  font-size: 120px;
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 250px;
  color: ${({ theme }: ThemeType) => theme.color};
`;

const Loader = (): ReturnComponentType => <StyledLoader>⟳</StyledLoader>;

export default Loader;
